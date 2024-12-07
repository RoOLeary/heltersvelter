<script lang="ts">

	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
    console.log('huh?', data.post.data[0].title.rendered);
    let title = data.post.data[0].title.rendered;
    let content = data.post.data[0].content.rendered;

</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<div>{@html content}</div>



  
  
  