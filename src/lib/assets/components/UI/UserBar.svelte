<script lang="ts">
	import QuestionMark from "$lib/assets/icons/QuestionMark.svelte";
	import { LogIn, LogOut } from "lucide-svelte";
	import { Routes } from "$types/routes";

	export let userLoggedIn: boolean;
	export let initials = '';
</script>


<div class="flex h-16 w-full items-center justify-between bg-surface-500/40 px-4">
	<span
		class="badge h-10 w-10 border-4 border-surface-300-600-token hover:!border-primary-500 cursor-pointer rounded-full text-md"
	>
		{#if !userLoggedIn}
			<a href={Routes.LOGIN}>
				<QuestionMark className="w-4"/>
			</a>
		{:else}
			<a href={Routes.PROFILE}>
				<span class="uppercase">{initials}</span>
			</a>
		{/if}
	</span>
	{#if !userLoggedIn}
		<button class="btn-icon variant-ghost">
			<a href={Routes.LOGIN}>
				<LogIn size="20"/>
			</a>
		</button>
	{:else}
		<form method="POST">
			<button formaction={Routes.LOGOUT} type="submit" class="btn-icon variant-ghost">
				<LogOut size="20"/>
			</button>
		</form>
	{/if}

</div>
