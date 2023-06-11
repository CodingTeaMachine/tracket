<script lang="ts">
	import LL from "$i18n/i18n-svelte";
	import { Routes } from "$lib/routes";

	export let userLoggedIn = false;
	
	interface Link {
		destination: string
		label: string
		protected: boolean
	}

	const links: Link[] = [
		{
			label: $LL.navigation.home(),
			destination: Routes.HOME,
			protected: false
		},
		{
			label: $LL.navigation.orders(),
			destination: Routes.ORDERS,
			protected: true,
		},
		{
			label: $LL.navigation.customers(),
			destination: Routes.CUSTOMERS,
			protected: true,
		}
	]
</script>

<nav class='p-4 list-nav'>
	<ul class='flex flex-col gap-3'>
		{#each links as link}
			{#if !link.protected || userLoggedIn}
				<li>
					<a class='capitalize bg-primary-500 hover:!bg-primary-600' href={link.destination}>
						{link.label}
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</nav>
