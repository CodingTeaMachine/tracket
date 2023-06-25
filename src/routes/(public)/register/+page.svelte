<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	import { AtSign, SquareAsterisk, User } from 'lucide-svelte';
	import FormInput from '$lib/assets/components/input/FormInput.svelte';
	import LL from "$i18n/i18n-svelte";
	import { Routes } from "$types/routes";

	export let form: ActionData;

	$: nameError = form?.errors.nameError;
	$: emialError = form?.errors.emailError;
	$: passswordError = form?.errors.passwordError;
	$: rePassswordError = form?.errors.rePasswordError;

	function resetNameError() {
		if (nameError) form.errors.nameError = '';
	}

	function resetEmailError() {
		if (emialError) form.errors.emailError = '';
	}

	function resetPasswordError() {
		if (passswordError) form.errors.passwordError = '';
	}

	function resetRePasswordError() {
		if (rePassswordError) form.errors.rePasswordError = '';
	}


</script>
<div class="flex -mt-10 h-full items-center justify-center">
	<div class="w-1/3 p-4 card">
		<div class="mb-5 text-center text-xl font-bold uppercase w-100 capitalize-first">register</div>
		
		{#if form?.errors.registrationError}
			<div class="text-center text-error-500">{ form.errors.registrationError }</div>
		{/if}
		<form method="POST" class="flex flex-col gap-3" use:enhance>
			<FormInput
				errorMode={nameError}
				errorMessage={nameError}
				label={$LL.inputs.name()}
				name="name"
				type="text"
				placeholder="John Doe"
				required
				on:input={resetNameError}
			>
				<svelte:fragment slot="prefix">
					<User />
				</svelte:fragment>
			</FormInput>
			
			<FormInput
				errorMode={emialError}
				errorMessage={emialError}
				label={$LL.inputs.email()}
				name="email"
				type="email"
				placeholder="john@doe.com"
				required
				on:input={resetEmailError}
			>
				<svelte:fragment slot="prefix">
					<AtSign />
				</svelte:fragment>
			</FormInput>
			
			<FormInput
				errorMode={passswordError}
				errorMessage={passswordError}
				label={$LL.inputs.password()}
				name="password"
				type="password"
				placeholder="password"
				required
				on:input={resetPasswordError}
			>
				<svelte:fragment slot="prefix">
					<SquareAsterisk />
				</svelte:fragment>
			</FormInput>
			
			<FormInput
				errorMode={rePassswordError}
				errorMessage={rePassswordError}
				label={$LL.inputs.rePassword()}
				name="rePassword"
				type="password"
				placeholder={$LL.inputs.password()}
				required
				on:input={resetRePasswordError}
			>
				<svelte:fragment slot="prefix">
					<SquareAsterisk />
				</svelte:fragment>
			</FormInput>
			
			<button type="submit" class="btn variant-filled-primary capitalize-first inline-block">
				{$LL.pages.register.register()}
			</button>
			
			<div class="text-center text-sm">
				<div class="inline-block capitalize-first">
					{$LL.pages.register.alreadyHaveAnAccount()}?
				</div>
				<a href={Routes.LOGIN} class="text-primary-500 hover:underline inline-block capitalize-first">
					{$LL.pages.register.loginNow()}!
				</a>
			</div>
		</form>
	
	</div>
</div>
