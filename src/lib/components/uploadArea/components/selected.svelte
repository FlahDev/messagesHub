<script lang="ts">
	import styled from 'styled-svelte5';
	import { theme } from '$lib/theme/theme';
	import Icon from '$lib/components/icon/icon.svelte';
	import Typography from '$lib/components/typography/typography.svelte';
	import Button from '$lib/components/button/button.svelte';

	interface Props {
		onClick: () => void;
		fileName: string;
	}

	const { onClick, fileName }: Props = $props();

	const StyledContainer = styled(
		'div',
		() => `
    width: 100%;
    height: 266px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 64px 24px;
    row-gap: 16px;

    border: 2px solid ${$theme.colors.green900};
    border-radius: 32px;
    background-color: ${$theme.colors.neutral800};
  `
	);
</script>

<StyledContainer class="UploadArea-Selected">
	<Icon src="file-success" size="2" color="green200" />
	<Typography variant="display600" color="neutral100">Arquivo anexado!</Typography>
	<div class="FileNameWrapper">
		<Icon src="folder-success" size="1" color="neutral300" />
		<Typography variant="body500" color="neutral300">{fileName}</Typography>
	</div>
	<Button variant="green" label="Prosseguir para o histórico" onclick={onClick} />
</StyledContainer>

<style>
	.FileNameWrapper {
		display: flex;
		align-items: center;
		gap: 8px;
	}
</style>
