<script lang="ts">
    let open = $state(false);
    let newName = $state('');
    let error = $state('');

    function addSkill(e: SubmitEvent) {
        e.preventDefault();
        const trimmed = newName.trim();
        if (trimmed === "") { return; }
        const verdict = onadd(trimmed)
        if (verdict !== null) {
            error = verdict;
        } else {
            newName = '';
            error = '';
            open = false;
        }
    }

    let { onadd }: { onadd: (name: string) => string | null } = $props();

</script>

<button 
    aria-label="Adds a new skill to the list."
    onclick={() => open = true}>+
</button>
{#if open}
    <form onsubmit={addSkill}>
        <input bind:value={newName} placeholder="New skill" />
        <button type="submit">Add</button>
        {#if error}<p class="error">{error}</p>{/if}
    </form>
{/if}