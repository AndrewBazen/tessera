// src/lib/xp.ts
import { RANKS } from './ranks';
export const DEFAULT_BASE_XP = 50;
const LEVEL_BASE = 100
const LEVEL_GROWTH = 2

export interface SkillData {
    name: string;
    baseXp: number;  // fixed per skill, never changes
    rank: number;    // 1..MAX_RANK
}

export function makeSkill(name: string, baseXp = DEFAULT_BASE_XP, rank = 1): SkillData {
    return { name, baseXp, rank };
}

export function skillXp(skill: SkillData): number {
    let xp = 0;
    for (let r = 1; r <= skill.rank; r++) {
        xp += skill.baseXp * RANKS[r - 1].multiplier;
    }
    return xp;
}

export function totalXp(skills: SkillData[]): number {
    return skills.reduce((sum, s) => sum + skillXp(s), 0);
}

export function xpForLevel(level: number): number {
    return Math.floor(LEVEL_BASE * (level - 1) ** LEVEL_GROWTH);
}

export function levelFromXp(xp: number): number {
    let level = 1;
    while (xpForLevel(level + 1) <= xp) level ++;
    return level;
}

export interface LevelProgress {
    level: number;
    current: number;
    required: number;
    fraction: number;
}

export function levelProgress(xp: number): LevelProgress {
    const level = levelFromXp(xp);
    const start = xpForLevel(level);
    const next = xpForLevel(level + 1);
    return {
        level,
        current: xp - start,
        required: next - start,
        fraction: (xp - start) / (next - start)
    }
}