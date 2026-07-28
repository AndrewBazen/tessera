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
        width: .5rem;
        height: .5rem;
        padding: 0;
        border: none;
        cursor: pointer;
        background: var(--diamond-empty);
        transform: rotate(45deg); 
    }
    .diamond.filled {
        background: var(--color);
    }
</style>
