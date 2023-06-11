<script lang="ts">
	import LL from "$i18n/i18n-svelte";
	
	const emailAddress = 'codingteamachine@gmail.com';
</script>

<div class="h-5 pr-5 w-100">
	<div class="capitalize-first text-right text-sm w-fit float-right">
		{$LL.footer.createdBy()} - <a href={`mailto:${emailAddress}`}> {emailAddress} </a>
	</div>
</div>
