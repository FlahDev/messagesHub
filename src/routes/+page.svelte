<script lang="ts">
	import { goto } from '$app/navigation';

	import { RoutePaths } from '$lib/routes';

	import Page from '$lib/components/page/page.svelte';
	import Header from '$lib/components/header/header.svelte';
	import Typography from '$lib/components/typography/typography.svelte';
	import Image from '$lib/components/image/image.svelte';
	import Button from '$lib/components/button/button.svelte';

	const handleClick = () => {
		goto(RoutePaths.upload, { replaceState: true });
	};
</script>

<Page>
	<Header />
	<div class="Texts">
		<Typography variant="title600" color="neutral100">
			Gerencie seu histórico de mensagens do WhatsApp
		</Typography>
		<Typography variant="display500" color="neutral300">
			Exporte e visualize seu histórico de mensagens com mais praticidade e segurança
		</Typography>
	</div>
	<div class="ImageWrapper">
		<Image src="documents-search" />
	</div>
	<div class="Footer">
		<Button
			onclick={handleClick}
			label="Começar"
			rightIcon="arrow-right"
			variant="green"
			floating
		/>
	</div>
</Page>

<style>
	.Texts {
		width: 100%;
		display: flex;
		flex-direction: column;
		row-gap: 18px;
		padding: 24px;
		box-sizing: border-box;
	}

	.ImageWrapper {
		flex-grow: 1;
	}

	.Footer {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 48px 24px;
		box-sizing: border-box;
	}
</style>
