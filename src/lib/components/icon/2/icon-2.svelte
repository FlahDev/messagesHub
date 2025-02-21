<script lang="ts" module>
	import { theme, type Colors } from '$lib/theme/theme';
	import styled from 'styled-svelte5';

	import FileAdd from './assets/file-add.svelte';
	import FileError from './assets/file-error.svelte';
	import FileSuccess from './assets/file-success.svelte';

	const VariantsMap = {
		'file-add': FileAdd,
		'file-error': FileError,
		'file-success': FileSuccess
	};

	export type Icon2Variants = keyof typeof VariantsMap;
</script>

<script lang="ts">
	interface Props {
		src: Icon2Variants;
		color?: Colors;
	}

	const { src, color = 'neutral100' }: Props = $props();

	const Variant = VariantsMap[src] || VariantsMap['file-add'];

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
