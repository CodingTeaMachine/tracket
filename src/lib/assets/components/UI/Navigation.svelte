<script lang="ts">
	import LL from "$i18n/i18n-svelte";

	interface Link {
		destination: string
		label: string
	}

	const links: Link[] = [
		{
			label: $LL.navigation.home(),
			destination: '/'
		},
		{
			label: $LL.navigation.orders(),
			destination: '/orders'
		},
		{
			label: $LL.navigation.customers(),
			destination: '/customers'
		}
	]
</script>

<nav class='list-nav p-4'>
	<ul class='flex flex-col gap-3'>
		{#each links as link}
			<li>
				<a class='bg-primary-500 hover:!bg-primary-600' href={link.destination}>
					{link.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>
