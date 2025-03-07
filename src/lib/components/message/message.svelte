<script lang="ts">
	import styled from 'styled-svelte5';
	import { theme } from '$lib/theme/theme';
	import Typography from '$lib/components/typography/typography.svelte';

	interface Props {
		fromNumber: string;
		sendTime: string;
		messageTextContent?: string;
		messageImageSrc?: string;
		messageAudio?: any;
		messageVideo?: any;
		wasSentByMe?: boolean;
	}

	const {
		fromNumber,
		messageAudio,
		messageImageSrc,
		messageTextContent,
		messageVideo,
		sendTime,
		wasSentByMe
	}: Props = $props();

	const Wrapper = styled(
		'div',
		() => `
        width: 100%;
        display: flex;
        justify-content: ${wasSentByMe ? 'flex-end' : 'flex-start'};
        padding: 16px;
        box-sizing: border-box;
    `
	);

	const Message = styled(
		'div',
		() => `
    max-width: 250px;
    width: 200px;
    padding: 6px;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    background-color: ${wasSentByMe ? $theme.colors.green1000 : $theme.colors.neutral900};
    border-radius: 8px;
  `
	);
</script>

<div class="Message">
	<Wrapper>
		<Message>
			<div class="Head">
				<Typography variant="legend400" color="neutral100">
					{fromNumber}
				</Typography>
				<Typography variant="legend500" color="neutral300">
					{sendTime}
				</Typography>
			</div>
			<div class="Body">
				{#if messageTextContent}
					<Typography variant="label400" color="neutral100">
						{messageTextContent}
					</Typography>
				{/if}
				{#if messageImageSrc}
					<img src={messageImageSrc} alt="Imagem dentro da mensagem" />
				{/if}
			</div>
		</Message>
	</Wrapper>
</div>

<style>
	.Head {
		width: 100%;
		display: flex;
		justify-content: space-between;
		column-gap: 16px;
	}

	.Body img {
		width: 100%;
		max-height: 150px;
		border-radius: 8px;
	}
</style>
