<script>
	import LL from "$i18n/i18n-svelte";
	import {pageTitle} from "$lib/stores/pageTitle";
	
	pageTitle.set($LL.navigation.home());
</script>
