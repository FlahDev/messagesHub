<script lang="ts">
	import styled from 'styled-svelte5';
	import { theme } from '$lib/theme/theme';
	import Icon from '$lib/components/icon/icon.svelte';
	import Typography from '$lib/components/typography/typography.svelte';

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

    background-color: ${$theme.colors.neutral700};
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='32' ry='32' stroke='%23BEBEBEFF' stroke-width='5' stroke-dasharray='12' stroke-dashoffset='20' stroke-linecap='round'/%3e%3c/svg%3e");
    border-radius: 32px;
  `
	);
</script>

<StyledContainer class="UploadArea-Dragging">
	<Icon src="file-add" size="2" color="neutral300" />
	<Typography variant="display600" color="neutral100">Solte o arquivo aqui</Typography>
</StyledContainer>
