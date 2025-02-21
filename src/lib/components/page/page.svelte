<script lang="ts">
	import styled from 'styled-svelte5';
	import { theme, type Colors } from '$lib/theme/theme';

	import type { Snippet } from 'svelte';

	interface MainProps {
		children: Snippet;
		backgroundColor?: Colors;
	}

	const { children, backgroundColor = 'neutral900' }: MainProps = $props();

	const StyledMain = styled(
		'main',
		() => `
		background-color: ${$theme.colors[backgroundColor]};
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	`
	);
</script>

<StyledMain>
	{@render children()}
</StyledMain>
