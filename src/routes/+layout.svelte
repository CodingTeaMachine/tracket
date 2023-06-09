<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import '../app.scss';
	
	import {AppShell} from "@skeletonlabs/skeleton";
	import Navigation from "$lib/assets/components/UI/Navigation.svelte";
	import {setLocale} from "$i18n/i18n-svelte";
	
	import type { LayoutData } from "./$types";
	import PageTitle from "$lib/assets/components/UI/PageTitle.svelte";
	
	export let data: LayoutData;
	setLocale(data.locale)
</script>


<AppShell slotSidebarLeft="w-64 bg-surface-500/10 text-white">
	<svelte:fragment slot="sidebarLeft">
		<div class="flex h-full flex-col justify-between">
			<Navigation />
<!--			<UserBar userLoggedIn={userLoggedIn} />-->
		</div>
	</svelte:fragment>
	
	<div class="container mx-auto p-10 h-full text-white">
		<PageTitle/>
		<slot/>
	</div>
	
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
