<script lang="ts">
	import { goto } from '$app/navigation';

	import { RoutePaths } from '$lib/routes';

	import Page from '$lib/components/page/page.svelte';
	import Header from '$lib/components/header/header.svelte';
	import Typography from '$lib/components/typography/typography.svelte';
	import Image from '$lib/components/image/image.svelte';
	import Button from '$lib/components/button/button.svelte';
	import Card from '$lib/components/card/card.svelte';
	import UploadArea from '$lib/components/uploadArea/uploadArea.svelte';

	let selectedFile: File | null = $state(null);
	let forceInvalidFile = $state<boolean>(false);

	const validFileTypes = [
		'application/x-zip-compressed',
		'application/zip-compressed',
		'application/zip'
	];
	let isSelectedFileValid = $derived.by(() => {
		if (!selectedFile) return false;

		const fileExtension = selectedFile.type;

		if (!fileExtension) return false;

		const isValid = validFileTypes.includes(fileExtension);

		return isValid;
	});

	const handleSelectAnother = () => {
		selectedFile = null;
	};

	// const handleClick = () => {
	// 	goto(RoutePaths.upload, { replaceState: true });
	// };

	const handleSubmit = () => {
		console.log(selectedFile);
	};
</script>

<Page backgroundColor="green900">
	<Header />
	<div class="Texts">
		<Typography variant="title600" color="neutral100">Upload de arquivo</Typography>
		<Typography variant="display500" color="neutral100">
			Envie o arquivo exportado do WhatsApp no formato compactado (zip).
		</Typography>
	</div>
	<Card>
		<div class="Wrapper">
			<UploadArea
				bind:selectedFile
				bind:forceInvalidFile
				onSubmit={handleSubmit}
				{isSelectedFileValid}
			/>
			{#if selectedFile && isSelectedFileValid}
				<div class="Footer-Centered">
					<Button label="Selecionar outro arquivo" variant="link" onclick={handleSelectAnother} />
				</div>
			{:else}
				<div class="Footer">
					<Typography variant="body500" color="neutral100">
						Para realizar a extração de suas conversas
					</Typography>
					<Typography variant="body500" color="neutral600">
						No aplicativo do WhatsApp, acesse: <br />Configurações > Mais > Exportar conversa
					</Typography>
				</div>
			{/if}
		</div>
	</Card>
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

	.Wrapper {
		width: 100%;
		padding: 24px;
		box-sizing: border-box;

		display: flex;
		flex-direction: column;
		row-gap: 40px;
	}

	.Footer {
		width: 100%;
		display: flex;
		flex-direction: column;
		row-gap: 8px;
	}
	.Footer-Centered {
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>
