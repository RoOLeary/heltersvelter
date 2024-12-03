<script>
    // @ts-nocheck
    export let data;
    export let error;

    console.log(data.data);
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Danger Ro, Fuck Yeah!</h1>

	<p>
		This is a <a href="https://svelte.dev/docs/kit">SvelteKit</a> app. You can make your own by typing
		the following into your command line and following the prompts:
	</p>

	<pre>npx sv create</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
	<br />
	<h3 class="font-bold mb-2">Output</h3>

    {#if error}
          <p>Error: {error}</p>
        {:else if data.length === 0}
          <p>Loading...</p>
        {:else}
          <ul>
            {#each data.data as post}
              <li><a href="/about/ro/{post.slug}" data-sveltekit-preload-data="hover">{post.title.rendered}</a></li>
            {/each}
          </ul>
        {/if}

        
     
	<a href="/about">
		go the fuck back
	</a>
</div>



  
  
  