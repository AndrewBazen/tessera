<script lang="ts">
    import type { LevelProgress } from "$lib/xp";
    import ProgressBar from "./ProgressBar.svelte";

    interface Props {
        name: string;
        progress: LevelProgress;
    }

    let { name, progress }: Props = $props();
</script>

<div class="main">
    <h1>Player: {name}</h1>
    <h2>Current Level: {progress.level} </h2>
    <div class="bar">
        <ProgressBar 
            fraction={progress.fraction} 
            label="Current progress to level {progress.level + 1}" 
        />
        <p class="xp-status">{progress.current}/{progress.required}</p>
    </div>
</div>

<style>
    .main {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
        margin: 1rem;
        background: var(--surface);
        border: 1px solid var(--surface-border);
    }

    .bar {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
</style>