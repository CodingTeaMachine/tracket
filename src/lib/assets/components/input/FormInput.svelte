<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let label = '';
	export let value: string;
	export let name: string;
	export let type: 'text' | 'email' | 'password' = 'text';
	export let placeholder: string;
	export let required = false;

	export let errorMode: boolean;
	export let errorMessage = '';
	
	export let capitalizeLabel = true;
	export let capitalizeErrorMessage = true;

	function typeAction(node) {
		node.type = type;
	}

	const dispatch = createEventDispatcher();

	function inputEventHandler(value: string) {
		dispatch('input', value);
	}
</script>

<label class="label">
	<div class:capitalize-first={capitalizeLabel}>
		{#if $$slots.label}
			<slot name="label" />
		{:else}
			{label}
		{/if}
	</div>
	<div class={
		$$slots.prefix ? 'input-group input-group-divider grid-cols-[auto_1fr_auto]' : ''
	}>
		{#if $$slots.prefix}
			<div class="input-group-shim [&>*:first-child]:h-4">
				<slot name="prefix"></slot>
			</div>
		{/if}
		<input
			use:typeAction
			class:input={!$$slots.prefix}
			class:input-error={errorMode}
			bind:value
			{name}
			{placeholder}
			{required}
			on:input={inputEventHandler}
		/>
	</div>
</label>

<div class="text-sm text-error-500" class:capitalize-first={capitalizeErrorMessage}>{errorMessage}</div>
