<script>
	import {pageTitle} from "$lib/stores/pageTitle";

	let currentPageTitle = '';
	
	pageTitle.subscribe(value => currentPageTitle = value);
</script>

<h1 class="text-2xl font-bold tracking-widest mb-5 uppercase">
	{currentPageTitle}
</h1>
