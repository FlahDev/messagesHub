<script lang="ts" module>
	import styled from 'styled-svelte5';

	import DocumentsSearch from './assets/documents-search.svelte';

	const VariantsMap = {
		'documents-search': DocumentsSearch
	};

	export type Icon1Variants = keyof typeof VariantsMap;
</script>

<script lang="ts">
	interface Props {
		src: Icon1Variants;
	}

	const { src }: Props = $props();

	const Variant = VariantsMap[src] || VariantsMap['documents-search'];

	const Wrapper = styled(
		'div',
		() => `
		display: flex;
		justify-content: center;
		align-items: center;
  `
	);
</script>

<Wrapper class="Image">
	<Variant />
</Wrapper>
