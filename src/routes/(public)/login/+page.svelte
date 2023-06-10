<script lang="ts">
	import { enhance } from "$app/forms";
	import LL from "$i18n/i18n-svelte";
	import type { ActionData } from "./$types";

	import { AtSign, SquareAsterisk } from "lucide-svelte";
	import FormInput from "$lib/assets/components/input/FormInput.svelte";

	export let form: ActionData;

	$: emailError = form?.errors.emailError;
	$: passwordError = form?.errors.passwordError;

	function resetEmailError() {
		if (emailError) form.errors.emailError = "";
	}

	function resetPasswordError() {
		if (passwordError) form.errors.passwordError = "";
	}
</script>

<div class="-mt-10 flex h-full items-center justify-center align-middle">
	<div class="w-1/3 p-4 card">
		<div class="mb-5 text-center text-xl font-bold uppercase w-100">{$LL.pages.login.login()}</div>

		{#if form?.errors.loginError}
			<div class="text-center text-error-500">{form.errors.loginError}</div>
		{/if}

		<form method="POST" class="flex flex-col gap-5" use:enhance>
			<FormInput
				value={form?.email ?? ""}
				errorMode={!!emailError}
				errorMessage={emailError}
				label={$LL.inputs.email()}
				name="email"
				type="email"
				placeholder="jhon@doe.com"
				required
				on:input={resetEmailError}
			>
				<svelte:fragment slot="prefix">
					<AtSign />
				</svelte:fragment>
			</FormInput>

			<FormInput
				errorMode={!!passwordError}
				errorMessage={passwordError}
				name="password"
				type="password"
				placeholder={$LL.inputs.password()}
				label={$LL.inputs.password()}
				required
				on:input={resetPasswordError}
			>
				<svelte:fragment slot="prefix">
					<SquareAsterisk />
				</svelte:fragment>
			</FormInput>

			<button type="submit" class="btn variant-filled-primary capitalize-first inline-block">
				{$LL.pages.login.login()}
			</button>

			<div class="text-center text-sm">
				<div class="inline-block capitalize-first">
					{$LL.pages.login.dontHaveAnAccount()}?
				</div>
				<a href="/register" class="inline-block text-primary-500 capitalize-first hover:underline">
					{$LL.pages.login.registerOneNow()}
				</a>
			</div>
		</form>
	</div>
</div>
