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

<div class="skill-list">
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
        width: 100%;
        height: 100%;
        border-radius: 8px;
        padding: 1rem 1rem;
        margin: 1rem;
        background: var(--surface);
        border: 1px solid var(--surface-border);
    }
</style>