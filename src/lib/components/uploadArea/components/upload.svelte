<script lang="ts">
	import styled from 'styled-svelte5';
	import { theme } from '$lib/theme/theme';
	import Icon from '$lib/components/icon/icon.svelte';
	import Typography from '$lib/components/typography/typography.svelte';
	import Button from '$lib/components/button/button.svelte';

	interface Props {
		onClick: () => void;
	}

	const { onClick }: Props = $props();

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

<StyledContainer class="UploadArea-Upload">
	<Icon src="file-add" size="2" color="neutral300" />
	<Typography variant="display600" color="neutral100">Arraste seu arquivo aqui</Typography>
	<Typography variant="display500" color="neutral300">ou</Typography>
	<Button variant="green" label="Selecionar arquivo" onclick={onClick} />
</StyledContainer>
