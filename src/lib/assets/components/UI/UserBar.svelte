<script lang="ts">
	import QuestionMark from "$lib/assets/icons/QuestionMark.svelte";
	import {LogIn, LogOut} from "lucide-svelte";

	export let userLoggedIn: boolean;
</script>


<div class="flex h-16 w-full items-center justify-between bg-surface-500/40 px-4">
	<span
		class="badge h-10 w-10 border-4 border-surface-300-600-token hover:!border-primary-500 cursor-pointer rounded-full text-md"
	>
		{#if !userLoggedIn}
			<a href="/login">
				<QuestionMark className="w-4"/>
			</a>
		{:else}
			<a href="/profile">
				<span>DM</span>
			</a>
		<!--	TODO: Display username-->
		{/if}
	</span>
	{#if !userLoggedIn}
		<button class="btn-icon variant-ghost">
			<a href="/login">
				<LogIn size="20"/>
			</a>
		</button>
	{:else}
		<form method="POST">
			<button formaction="/logout" type="submit" class="btn-icon variant-ghost">
				<LogOut size="20"/>
			</button>
		</form>
	{/if}

</div>
