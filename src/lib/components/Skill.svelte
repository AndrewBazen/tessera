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
    <span>{name}</span>
    {#each RANKS as _, i}
        <RankButton
            filled={i < rank}
            color={tier.color}
            label="Set {name} to {RANKS[i].name}"
            onclick={() => rank = i + 1}
        />
    {/each}
</div>

<style>
    .skill {
        display: flex;
        align-items: center;
        gap: 0.35rem;
    }
</style>

