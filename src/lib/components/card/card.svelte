<script lang="ts">
	import styled from 'styled-svelte5';
	import { theme, type Colors } from '$lib/theme/theme';

	import type { Snippet } from 'svelte';

	interface MainProps {
		children: Snippet;
	}

	const { children }: MainProps = $props();

	const StyledMain = styled(
		'div',
		() => `
    width: 100%;
		flex-grow: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    
		padding: 16px 8px 24px 8px;    
    
		background-color: ${$theme.colors.neutral900};
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
	`
	);
</script>

<StyledMain>
	{@render children()}
</StyledMain>
