<script lang="ts" module>
	import { type Icon1Variants } from './1/icon-1.svelte';
	import { type Icon2Variants } from './2/icon-2.svelte';

	export type IIconSrc = Icon1Variants | Icon2Variants;
</script>

<script lang="ts">
	import Icon1 from './1/icon-1.svelte';
	import Icon2 from './2/icon-2.svelte';
	import type { Colors } from '$lib/theme/theme';
	import type { Component } from 'svelte';

	const SizeMap = {
		'1': Icon1,
		'2': Icon2
	};

	interface Props {
		src: IIconSrc;
		size?: keyof typeof SizeMap;
		color?: Colors;
	}

	const { src, size = '1', color = 'neutral100' }: Props = $props();

	const Icon: Component<Pick<Props, 'src' | 'color'>> = (SizeMap[size] || SizeMap['1']) as any;
</script>

<Icon {src} {color} />
