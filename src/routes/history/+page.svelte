<script lang="ts">
	import styled from 'styled-svelte5';
	import { goto } from '$app/navigation';

	import { theme } from '$lib/theme/theme';

	import { RoutePaths } from '$lib/routes';

	import Page from '$lib/components/page/page.svelte';
	import Header from '$lib/components/header/header.svelte';
	import Typography from '$lib/components/typography/typography.svelte';
	import Message from '$lib/components/message/message.svelte';

	const List = styled(
		'div',
		() => `
    width: 100%;
    height: 100%;
    position: relative;
    overflow: auto;

    display: flex;
    flex-direction: column;    
    box-sizing: border-box;

    background-color: ${$theme.colors.neutral550};
  `
	);
</script>

<Page>
	<Header />
	<List>
		<Message
			fromNumber="+55 (11) 91234-5678"
			sendTime="19:27"
			messageTextContent="Oi! Te liguei e você não atendeu, podemos marcar um horário amanha?"
			wasSentByMe
		/>
		<Message
			fromNumber="+55 (11) 95678-1234"
			sendTime="20:46"
			messageTextContent="Estava ocupado..."
		/>
		<Message
			fromNumber="+55 (11) 91234-5678"
			sendTime="20:57"
			messageImageSrc="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/35211_4DA8E347FB9842EB.jpg"
			wasSentByMe
		/>
	</List>
</Page>
