<script lang="ts">
    import { totalXp, makeSkill, levelProgress } from "$lib/xp";
    import LevelCard from "$lib/components/LevelCard.svelte";
    import SkillList from "$lib/components/SkillList.svelte";
    import { loadState, saveState } from "$lib/persistence";
    import { browser } from "$app/env";

    let name = 'Andrew';

    let defaults = [
        makeSkill('coding', 100, 2),
        makeSkill('writing'),
        makeSkill('physical training', 500, 3),
    ];

    let skills = $state(browser ? loadState(defaults) : defaults);
    $effect(() => saveState(skills));

    let xp = $derived(totalXp(skills));
    let progress = $derived(levelProgress(xp));
</script>

<div class="page-container">
    <LevelCard {name} {progress} />
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