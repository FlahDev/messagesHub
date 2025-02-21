<script lang="ts">
	import { fade } from 'svelte/transition';

	import { Composition } from './components';

	import type { ChangeEvent, DragEvent } from '$lib/types/events.types';

	interface Props {
		selectedFile: File | null;
		forceInvalidFile: boolean;
		onSubmit: () => void;
		isSelectedFileValid: boolean;
	}

	let {
		forceInvalidFile = $bindable(),
		selectedFile = $bindable(),
		onSubmit,
		isSelectedFileValid
	}: Props = $props();

	let input: HTMLInputElement;
	let isInArea = $state<boolean>(false);
	let timer = $state<NodeJS.Timeout | null>(null);

	const handleResolveFiles = (files?: FileList | null) => {
		if (!files || !files?.length) {
			forceInvalidFile = true;
			return;
		}

		const file = (files as any)[0];

		if (!file) {
			forceInvalidFile = true;
			return;
		}

		selectedFile = file;
	};

	const handleTriggerInput = () => {
		if (input) {
			forceInvalidFile = false;
			selectedFile = null;
			input.click();
		}
	};

	const handleFileChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const files = evt?.target?.files;

		handleResolveFiles(files);
	};

	const handleStopEvents = (evt: DragEvent<HTMLDivElement>) => {
		evt.preventDefault();
		evt.stopPropagation();
	};

	const handleHasEnteredArea = (evt: DragEvent<HTMLDivElement>) => {
		handleStopEvents(evt);

		if (selectedFile && isSelectedFileValid) return;

		forceInvalidFile = false;
		isInArea = true;
		selectedFile = null;

		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			isInArea = false;
			timer = null;
		}, 500);
	};

	const handleHasLeftArea = (evt: DragEvent<HTMLDivElement>) => {
		handleStopEvents(evt);
		isInArea = false;
	};

	const handleDrop = (evt: DragEvent<HTMLDivElement>) => {
		handleStopEvents(evt);

		if (timer) {
			clearTimeout(timer);
		}

		isInArea = false;

		const filesLits = (evt as any)?.dataTransfer?.files;

		handleResolveFiles(filesLits);
	};
</script>

<div class="UploadArea-Wrapper">
	<div
		class="EventsCapture"
		role="presentation"
		ondragover={handleHasEnteredArea as any}
		ondragenter={handleHasEnteredArea as any}
		ondragstart={handleHasEnteredArea as any}
		ondragleave={handleHasLeftArea as any}
		ondragend={handleHasLeftArea as any}
		ondrop={handleDrop as any}
	>
		{#if selectedFile}
			{#if isSelectedFileValid}<div class="transition" transition:fade>
					<Composition.Selected fileName={selectedFile?.name} onClick={onSubmit} />
				</div>
			{:else}<div class="transition">
					<Composition.Invalid onClick={handleTriggerInput} />
				</div>
			{/if}
		{:else if isInArea}<div class="transition" transition:fade>
				<Composition.Dragging />
			</div>
		{:else}
			<div class="transition">
				<Composition.Upload onClick={handleTriggerInput} />
			</div>
		{/if}

		<input type="file" bind:this={input} onchange={handleFileChange as any} multiple={false} />
	</div>
</div>

<style>
	.UploadArea-Wrapper {
		width: 100%;
		box-sizing: border-box;
	}

	.EventsCapture {
		width: 100%;
		height: min-content;
		box-sizing: border-box;
		/* position: relative; */
	}

	.transition {
		width: 100%;
		/* position: absolute; */
	}

	input {
		display: none;
	}
</style>
