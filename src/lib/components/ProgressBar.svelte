<script lang="ts">
    interface Props {
        fraction: number;
        label: string;
    }

    let { fraction, label }: Props = $props();

    let percent = $derived(Math.max(0, Math.min(1, fraction)) * 100)
</script>

<div
    class="track"
    role="progressbar"
    aria-label={label}
    aria-valuemin={0}
    aria-valuemax={100}
    aria-valuenow={Math.round(percent)}
>
    <div class="fill" style:width="{percent}%"></div>
</div>

<style>
    .track {
        width: 50%;
        height: 0.75rem;
        border-radius: 999px;
        background: var(--diamond-empty);
        border: 1px solid var(--surface-border);
        overflow: hidden;
    }

    .fill {
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(90deg, #8a6a2f, var(--accent));
        transition: width 300ms ease;
    }
</style>