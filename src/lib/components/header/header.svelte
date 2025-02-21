<script lang="ts">
	import styled from 'styled-svelte5';
	import { theme } from '$lib/theme/theme';

	import Typography from '$lib/components/typography/typography.svelte';
	import Icon from '$lib/components/icon/icon.svelte';
	import Button from '$lib/components/button/button.svelte';

	interface Props {
		variant?: 'ghost' | 'ghost-inverse';
		showButton?: boolean;
		buttonLabel?: string;
		onButtonClick?: () => void;
	}
	const {
		showButton = false,
		variant = 'ghost',
		onButtonClick,
		buttonLabel = 'Voltar'
	}: Props = $props();

	const variantMap = {
		ghost: {
			backgroundColor: 'transparent',
			color: $theme.colors.blue100
		},
		'ghost-inverse': {
			backgroundColor: 'transparent',
			color: $theme.colors.neutral900
		}
	};

	const variantStyles = variantMap[variant] || variantMap.ghost;

	const Header = styled(
		'div',
		() => `
				width: 100%;
				height: 72px;
				padding: 24px;

				display: flex;
				align-items: center;
				justify-content: space-between;
				box-sizing: border-box;
				column-gap: 16px;

        background-color:${variantStyles.backgroundColor};
        color: ${variantStyles.color};
    `
	);
</script>

<Header>
	{#if showButton}
		<Button label={buttonLabel} leftIcon="arrow-left" variant="neutral" />
	{/if}
	<div class="wrapper">
		<Icon src="message" />
		<Typography color="blue100" variant="display600">Message Hub</Typography>
	</div>
</Header>

<style>
	.wrapper {
		width: 100%;
		display: flex;
		align-items: center;
		column-gap: 16px;
	}
</style>
