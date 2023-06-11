<script lang="ts">
	import {page} from '$app/stores'
	import LL from "$i18n/i18n-svelte";
	
	$: errorMessage = $page.status in $LL.pages.error ? $LL.pages.error[$page.status]() : $LL.pages.error.general()
</script>


<div class="w-100 h-full -mt-9 flex items-center justify-center text-9xl">
		{$page.status}  {errorMessage}
</div>
