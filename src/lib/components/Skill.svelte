<script lang="ts">
    import { RANKS } from "$lib/ranks";
    import RankButton from "./RankButton.svelte";

    interface Props {
        name: string;
        rank: number;
    }

    let { name, rank = $bindable() }: Props = $props();

    let tier = $derived(RANKS[rank - 1]);
</script>

<div class="skill">
    <span class="name">{name}</span>
    <div class="ranks">
        {#each RANKS as _, i}
            <RankButton
                filled={i < rank}
                color={tier.color}
                label="Set {name} to {RANKS[i].name}"
                onclick={() => rank = i + 1}
            />
        {/each}
    </div>
</div>

<style>
    .skill {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.6rem 0.25rem;
        border-bottom: 1px solid rgba(59, 50, 82, 0.55);
    }

    .skill:last-child {
        border-bottom: none;
    }

    .name {
        text-transform: capitalize;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .ranks {
        display: flex;
        align-items: center;
        gap: 0.45rem;
        flex-shrink: 0;
    }
</style>

