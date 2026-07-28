// src/lib/ranks.ts
export interface RankTier {
    name: string;        // 'Iron', 'Bronze', ...
    color: string;       // CSS custom property
    multiplier: number;  // weight of the tier on xp
}

export const RANKS: RankTier[] = [
    { name: 'Iron',     color: 'var(--rank-iron)',     multiplier: 1 },
    { name: 'Bronze',   color: 'var(--rank-bronze)',   multiplier: 1.5 },
    { name: 'Silver',   color: 'var(--rank-silver)',   multiplier: 2 },
    { name: 'Gold',     color: 'var(--rank-gold)',     multiplier: 3 },
    { name: 'Platinum', color: 'var(--rank-platinum)', multiplier: 4 },
    { name: 'Diamond',  color: 'var(--rank-diamond)',  multiplier: 6 },
]

export const MAX_RANK = RANKS.length;