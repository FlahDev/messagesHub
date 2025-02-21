<script lang="ts">
	import styled from 'styled-svelte5';
	import { theme, type Colors } from '$lib/theme/theme';

	import Icon, { type IIconSrc } from '$lib/components/icon/icon.svelte';
	import Typography from '$lib/components/typography/typography.svelte';

	interface VariantStyleProps {
		backgroundColor?: Colors;
		textColor: Colors;
		hoverBackgroundColor?: Colors;
		hoverTextColor?: Colors;
		textDecoration?: string;
	}

	const VariantsMap = {
		green: {
			backgroundColor: 'green900',
			textColor: 'neutral100',
			hoverBackgroundColor: 'green800'
		} as VariantStyleProps,
		neutral: {
			backgroundColor: 'neutral900',
			textColor: 'neutral100',
			hoverBackgroundColor: 'neutral800'
		} as VariantStyleProps,
		link: {
			textColor: 'neutral300',
			textDecoration: 'underline'
		} as VariantStyleProps
	};

	interface Props {
		leftIcon?: IIconSrc;
		rightIcon?: IIconSrc;
		variant?: keyof typeof VariantsMap;
		label: string;
		onclick?: () => void;
		floating?: boolean;
	}

	const { leftIcon, rightIcon, variant = 'green', label, onclick, floating }: Props = $props();

	const variantStyles = VariantsMap[variant] || VariantsMap.green;

	const StyledButton = styled(
		'button',
		() => `
    background-color: ${variantStyles.backgroundColor ? $theme.colors[variantStyles.backgroundColor] : 'transparent'};

    border: 0px;
		outline: 0px;
		margin: 0px;

		height: 45px;
		padding: 12px 16px;

		display: flex;
		align-items: center;
		column-gap: 12px;

		cursor: pointer;
    border-radius: 8px;

		transition: all 240ms;
		box-shadow: ${floating ? '0px 6px 18px #D2D2D2' : 'none'};

		p {
			${variantStyles?.textDecoration && `text-decoration: ${variantStyles.textDecoration};`}
		}

		&:active {
			${variantStyles.backgroundColor && `background-color: ${$theme.colors[variantStyles.backgroundColor]}`}
		}
		&:hover {
			${variantStyles.hoverBackgroundColor && `background-color: ${$theme.colors[variantStyles.hoverBackgroundColor]}`}
		}
		&:focus {
			outline: 4px solid ${$theme.colors.blue500}
		}
  `
	);
</script>

<StyledButton {onclick} class="Button">
	{#if leftIcon}
		<Icon size="1" src={leftIcon} color={variantStyles.textColor} />
	{/if}
	<Typography variant="label500" color={variantStyles.textColor}>
		{label}
	</Typography>
	{#if rightIcon}
		<Icon size="1" src={rightIcon} color={variantStyles.textColor} />
	{/if}
</StyledButton>
