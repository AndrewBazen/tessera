// lib/persistence.ts

import { MAX_RANK } from "./ranks";
import { makeSkill, type SkillData } from "./xp";

const SHARED_STORAGE_KEY = "tessera"

export function saveState(skills: SkillData[]) {
    localStorage.setItem(SHARED_STORAGE_KEY, JSON.stringify(skills))
}

export function loadState(): SkillData[] {
    try {
        let data = localStorage.getItem(SHARED_STORAGE_KEY);
        if (data) {
            let parsed: SkillData[] = JSON.parse(data);
            if (Array.isArray(parsed)) {
                return parsed.filter(isValidSkill).map(s => 
                    makeSkill(s.name, s.baseXp, s.rank));
            }
        }
    } catch (e) {
        if (!(e instanceof SyntaxError)) throw e;
    }
    return [];
}

function isValidSkill(s: any): boolean {
    if (!s) { return false; }
    // check the name is a string
    if (typeof(s.name) !== "string" || s.name === "") { return false; }
    // check baseXp and rank are numbers
    if (typeof(s.baseXp) !== "number" || 
        typeof(s.rank) !=="number") { return false; }
    // check baseXp and rank are integers
    if (!Number.isInteger(s.baseXp) ||
        !Number.isInteger(s.rank)) { return false; }
    // check baseXp and rank are in acceptable ranges
    if (s.baseXp <= 0 || s.rank < 1 || s.rank > MAX_RANK) { return false; }
    return true;
}