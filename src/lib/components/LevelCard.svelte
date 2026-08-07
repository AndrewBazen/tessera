<script lang="ts">
    import type { LevelProgress } from "$lib/xp";
    import ProgressBar from "./ProgressBar.svelte";

    interface Props {
        name: string;
        progress: LevelProgress;
    }

    let { name, progress }: Props = $props();
</script>

<div class="main card">
    <h1>Player: {name}</h1>
    <h2>Current Level: {progress.level} </h2>
    <div class="bar">
        <div class="track-wrap">
            <ProgressBar
                fraction={progress.fraction}
                label="Current progress to level {progress.level + 1}"
            />
        </div>
        <p class="xp-status">{progress.current}/{progress.required}</p>
    </div>
</div>

<style>
    .main {
        display: flex;
        flex-direction: column;
        padding: 0.5rem 1.5rem 1.5rem;
        margin: 1rem 1rem 0.5rem;
    }

    h1 {
        font-size: 1.7rem;
        margin: 0.75rem 0 0.1rem;
    }

    h2 {
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.14em;
        color: var(--text-muted);
        margin: 0 0 1rem;
    }

    .bar {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .track-wrap {
        flex: 1;
        min-width: 0;
    }

    .xp-status {
        margin: 0;
        white-space: nowrap;
    }
</style>