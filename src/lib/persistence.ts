// lib/persistence.ts

import { MAX_RANK } from "./ranks";
import { makeSkill, type SkillData } from "./xp";

const SHARED_STORAGE_KEY = "tessera"

export function saveState(skills: SkillData[]) {
    let data: Record<string, number> = {};
    skills.forEach(s => {
        data[s.name] = s.rank;
    }); 
    localStorage.setItem(SHARED_STORAGE_KEY, JSON.stringify(data))
}

export function loadState(defaults: SkillData[]): SkillData[] {
    let skills: SkillData[] = [];
    defaults.forEach(d => {
        skills.push(makeSkill(d.name, d.baseXp, d.rank));
    });
    try {
        let data = localStorage.getItem(SHARED_STORAGE_KEY);
        if (data) {
            let parsedData = JSON.parse(data);
            skills.forEach(s => {
                if (s.name in parsedData) {
                    const saved = parsedData[s.name];
                    if (typeof(saved) === "number" 
                        && saved <= MAX_RANK && saved > 0
                        && Number.isInteger(saved)) {
                        s.rank = saved
                    }
                }
            });
        }
    } catch (e) {
        if (!(e instanceof SyntaxError)) throw e;
    }
    return skills;
}