<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.scss';

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });


	import {AppShell} from "@skeletonlabs/skeleton";
	import Navigation from "$lib/assets/components/UI/Navigation.svelte";
	import {setLocale} from "$i18n/i18n-svelte";

	import type {PageData} from "./$types";
	import PageTitle from "$lib/assets/components/UI/PageTitle.svelte";
	import UserBar from "$lib/assets/components/UI/UserBar.svelte";
	import Footer from "$lib/assets/components/UI/Footer.svelte";

	export let data: PageData;
	setLocale(data.locale)

	$: userLoggedIn = !!data.user;
	$: initials = data.user?.name.slice(0, 2);
</script>


<AppShell slotSidebarLeft="w-64 bg-surface-500/10 text-white">
	<svelte:fragment slot="sidebarLeft">
		<div class="flex h-full flex-col justify-between">
			<Navigation {userLoggedIn}/>
			<UserBar {userLoggedIn} {initials}/>
		</div>
	</svelte:fragment>
	
	<div class="container mx-auto p-10 h-full text-white">
		<PageTitle/>
		<slot/>
	</div>
	
	<Footer slot="pageFooter"/>
</AppShell>
