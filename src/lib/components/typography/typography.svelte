<script lang="ts">
	import styled from 'styled-svelte5';
	import { theme, type Colors } from '$lib/theme/theme';
	import type { Snippet } from 'svelte';

	const titles = {
		title600: {
			fontSize: '24px',
			fontWeight: '600',
			lineHeight: '36px',
			fontFamily: 'Inter'
		}
	};

	const displays = {
		display500: {
			fontSize: '18px',
			fontWeight: '600',
			lineHeight: '22px',
			fontFamily: 'Inter'
		},
		display600: {
			fontSize: '18px',
			fontWeight: '500',
			lineHeight: '22px',
			fontFamily: 'Inter'
		}
	};

	const labels = {
		label400: {
			fontSize: '16px',
			fontWeight: '500',
			lineHeight: '21px',
			fontFamily: 'Inter'
		},
		label500: {
			fontSize: '16px',
			fontWeight: '600',
			lineHeight: '21px',
			fontFamily: 'Inter'
		}
	};

	const bodies = {
		body400: {
			fontSize: '14px',
			fontWeight: '500',
			lineHeight: '21px',
			fontFamily: 'Inter'
		},
		body500: {
			fontSize: '14px',
			fontWeight: '600',
			lineHeight: '21px',
			fontFamily: 'Inter'
		}
	};

	const VariantMap = {
		...titles,
		...displays,
		...labels,
		...bodies
	};

	interface Props {
		variant?: keyof typeof VariantMap;
		color?: Colors;
		tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'legend';
		children: Snippet;
	}

	const { variant = 'title600', color = 'neutral100', tag = 'p', children }: Props = $props();

	const variantStyles = VariantMap[variant] || VariantMap.title600;

	const Text = styled(
		tag,
		() => `
        font-size: ${variantStyles.fontSize};
        font-weight: ${variantStyles.fontWeight};
        line-height: ${variantStyles.lineHeight};
        font-family: ${variantStyles.fontFamily};
        color: ${$theme.colors[color]};
        margin: 0px;
    `
	);
</script>

<Text class="Typorgraphy">
	{@render children()}
</Text>
