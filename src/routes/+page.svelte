<script lang="ts">
    import { totalXp, levelFromXp, makeSkill, levelProgress } from "$lib/xp";
    import LevelCard from "$lib/components/LevelCard.svelte";
    import SkillList from "$lib/components/SkillList.svelte";

    let name = 'Andrew';

    let skills = $state([
        makeSkill('coding', 100, 2),
        makeSkill('writing'),
        makeSkill('physical training', 500, 3),
    ]);

    let xp = $derived(totalXp(skills));
    let level = $derived(levelFromXp(xp));
    let fraction = $derived(levelProgress(xp).fraction);
</script>

<div class="page-container">
    <LevelCard {name} {level} {fraction} />
    <SkillList {skills} />
</div>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
</style>