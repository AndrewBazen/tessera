<script lang="ts">
    interface Props {
        filled: boolean;
        color: string;
        label: string;
        onclick: () => void;
    }

    let { filled, color, label, onclick }: Props = $props();
</script>

<button class="diamond" class:filled aria-label={label} 
    style:--color={color} {onclick}></button>

<style>
    .diamond {
        width: .6rem;
        height: .6rem;
        padding: 0;
        border: none;
        border-radius: 0;   /* stay sharp — opt out of the global button radius */
        cursor: pointer;
        background: var(--diamond-empty);
        transform: rotate(45deg);
        transition: background 150ms ease, box-shadow 150ms ease;
    }
    .diamond:hover {
        background: var(--surface-border-lit);
    }
    .diamond.filled {
        background: var(--color);
        box-shadow: 0 0 6px var(--color);
    }
    .diamond.filled:hover {
        background: var(--color);
    }
</style>
