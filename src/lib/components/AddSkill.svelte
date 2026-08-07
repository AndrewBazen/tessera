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

{#if !open}
    <button class="toggle" aria-label="Add a new skill" onclick={() => open = true}>+ Add skill</button>
{:else}
    <form onsubmit={addSkill}>
        <input bind:value={newName} placeholder="New skill" />
        <button type="submit">Add</button>
        <button type="button" aria-label="Cancel" onclick={() => { open = false; newName = ''; error = ''; }}>×</button>
    </form>
    {#if error}<p class="error">{error}</p>{/if}
{/if}

<style>
    .toggle {
        width: 100%;
        background: transparent;
        border: 1px dashed var(--surface-border);
        color: var(--text-muted);
        padding: 0.5rem;
    }

    .toggle:hover {
        border-color: var(--accent);
        border-style: dashed;
        color: var(--accent);
        background: transparent;
    }

    form {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 0;
    }

    input {
        flex: 1;
        min-width: 0;
    }

    .error {
        margin: 0.25rem 0 0;
        color: var(--danger);
        font-size: 0.9rem;
    }
</style>