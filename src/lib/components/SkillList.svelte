<script lang="ts">
    import Skill from "./Skill.svelte";
    import { makeSkill, type SkillData } from "$lib/xp";
    import AddSkill from "./AddSkill.svelte";

    interface Props {
        skills: SkillData[];
    }

    function handleAdd(name: string) {
        if (skills.some((s) => s.name.toLowerCase() === name.toLowerCase())) { 
            return "Name already taken"; }
        skills.push(makeSkill(name));
        return null;
    }

    let { skills }: Props = $props();
</script>

<div class="skill-list card">
    <AddSkill onadd={handleAdd} />
    <div class="skill-container">
        {#each skills as skill (skill.name) }
            <Skill name={skill.name} bind:rank={skill.rank} />
        {/each}
    </div>
</div>

<style>
    .skill-list {
        display: flex;
        flex-direction: column;
        padding: 1.25rem 1.5rem;
        margin: 0.5rem 1rem 1rem;
    }

    .skill-container {
        display: flex;
        flex-direction: column;
        margin-top: 0.5rem;
    }
</style>