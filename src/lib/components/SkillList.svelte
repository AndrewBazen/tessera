<script lang="ts">
    import Skill from "./Skill.svelte";
    import type { SkillData } from "$lib/xp";

    interface Props {
        skills: SkillData[];
    }

    let { skills }: Props = $props();
</script>

<div class="skill-list">
        {#each skills as skill (skill.name) }
            <Skill name={skill.name} bind:rank={skill.rank} />
        {/each}
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