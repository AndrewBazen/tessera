<script lang="ts">
    import ProgressBar from "./ProgressBar.svelte";

    interface Props {
        name: string;
        level: number;
        fraction: number;
    }

    let { name, level, fraction }: Props = $props();
</script>

<div class="main">
    <h1>Player: {name}</h1>
    <h2>Current Level: {level} <ProgressBar {fraction} label="xp bar" /></h2>
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
</style>