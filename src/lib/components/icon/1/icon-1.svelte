<script lang="ts" module>
	import { theme, type Colors } from '$lib/theme/theme';
	import styled from 'styled-svelte5';

	import ArrowLeft from './assets/arrow-left.svelte';
	import ArrowRight from './assets/arrow-right.svelte';
	import Message from './assets/message.svelte';
	import FolderSuccess from './assets/folder-success.svelte';

	const VariantsMap = {
		'arrow-left': ArrowLeft,
		'arrow-right': ArrowRight,
		message: Message,
		'folder-success': FolderSuccess
	};

	export type Icon1Variants = keyof typeof VariantsMap;
</script>

<script lang="ts">
	interface Props {
		src: Icon1Variants;
		color?: Colors;
	}

	const { src, color = 'neutral100' }: Props = $props();

	const Variant = VariantsMap[src] || VariantsMap['arrow-left'];

	const Wrapper = styled(
		'div',
		() => `
		display: flex;
		justify-content: center;
		align-items: center;
    color: ${$theme.colors[color]};
  `
	);
</script>

<Wrapper class="Icon">
	<Variant />
</Wrapper>
