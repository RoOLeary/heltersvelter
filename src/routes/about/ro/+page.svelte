<script>

	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	const userState = writable({});

	onMount(async () => {
		await import('@shoelace-style/shoelace/dist/shoelace.js');
		const saved = sessionStorage.getItem('user');
		if (saved) userState.set(JSON.parse(saved));
		const savedMessage = localStorage.getItem('message');
		if (savedMessage) {
			message = JSON.parse(savedMessage);
		}
	});

	userState.subscribe((value) => {
		sessionStorage.setItem('user', JSON.stringify(value));
	});
	
	// import '@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js';

	console.log('userState', userState);
	// import Header from '../../Header.svelte';
	// import ProgressRing from '../../ProgressRing.svelte';
	// @ts-nocheck
    export let data;
    export let error;
	
	let message = '';

	// Define message with variant and text
	let alertMessage = {
		text: '',
		variant: 'danger', // default variant
		open: false
	};
    console.log(data.data);

	const showAlertMessage = (text, variant = 'primary') => {
    alertMessage = { text, variant, open: true };
    localStorage.setItem('message', JSON.stringify(text));
  };


  // Example usage
  const triggerSuccess = () => showAlertMessage('Your changes have been saved', 'success');
  const triggerWarning = () => showAlertMessage(message, 'danger');

	
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	

	<!-- Dynamic sl-alert -->
	{#if alertMessage.open}
		<sl-alert variant={alertMessage.variant} open>
		<sl-icon slot="icon" name="info-circle"></sl-icon>
		{alertMessage.text}
		</sl-alert>
	{/if}
	  
	<button onclick={triggerSuccess}>Show Success Alert</button>
	<button onclick={triggerWarning}>Show Warning Alert</button>

	<sl-alert variant="primary" open>
		<sl-icon slot="icon" name="info-circle"></sl-icon>
		<strong>This is super informative</strong><br />
		You can tell by how pretty the alert is.
	  </sl-alert>
	  
	  <br />
	  
	  <sl-alert variant="success" open>
		<sl-icon slot="icon" name="check2-circle"></sl-icon>
		<strong>Your changes have been saved</strong><br />
		You can safely exit the app now.
	  </sl-alert>
	  
	  <br />
	  
	  <sl-alert variant="neutral" open>
		<sl-icon slot="icon" name="gear"></sl-icon>
		<strong>Your settings have been updated</strong><br />
		Settings will take effect on next login.
	  </sl-alert>
	  
	  <br />
	  
	  <sl-alert variant="warning" open>
		<sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
		<strong>Your session has ended</strong><br />
		Please login again to continue.
	  </sl-alert>
	  
	  <br />
	  
	  
	  

	<br />

	<sl-progress-bar value="50"></sl-progress-bar>

	<br />

	<sl-progress-ring value="50" class="progress-ring-values" style="margin-bottom: .5rem;">50%</sl-progress-ring>

	<br />

	<sl-button circle><sl-icon name="dash" label="Decrease"></sl-icon></sl-button>
	<sl-button circle><sl-icon name="plus" label="Increase"></sl-icon></sl-button>


	<h1>QR</h1>

	<div class="qr-overview">
		<sl-qr-code value="https://blp3.vercel.app" label="Scan this code to visit Shoelace on the web!"></sl-qr-code>
		<br />
	  
		<sl-input maxlength="255" clearable label="Value"></sl-input>
	</div>

	<br />

	<div class="animation-overview">
		<sl-animation name="bounce" duration="2000" play><div class="box"></div></sl-animation>
		<sl-animation name="jello" duration="2000" play><div class="box"></div></sl-animation>
		<sl-animation name="heartBeat" duration="2000" play><div class="box"></div></sl-animation>
		<sl-animation name="flip" duration="2000" play><div class="box"></div></sl-animation>
	</div>

	<h1>Live editing</h1>

	<sl-input label="Message" value={message} oninput={event => message = event.target.value}></sl-input>

	<sl-alert open>
	<sl-icon slot="icon" name="info-circle"></sl-icon>
	{message}
	</sl-alert>

	<br />
	{#if alertMessage.open}
	<sl-alert variant="danger" open>
		<sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
		<strong>Your account has been deleted</strong><br />
		{message}
	</sl-alert>
	{/if}

	<h1>{message ? message : 'This is just a default'}</h1>

	<p>
		This is a <a href="https://svelte.dev/docs/kit">SvelteKit</a> app. You can make your own by typing
		the following into your command line and following the prompts:
	</p>

	<sl-carousel pagination>
		<sl-carousel-item>
		  <img
			alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
			src="https://shoelace.style/assets/examples/carousel/mountains.jpg"
		  />
		</sl-carousel-item>
		<sl-carousel-item>
		  <img
			alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
			src="https://shoelace.style/assets/examples/carousel/waterfall.jpg"
		  />
		</sl-carousel-item>
		<sl-carousel-item>
		  <img
			alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
			src="https://shoelace.style/assets/examples/carousel/sunset.jpg"
		  />
		</sl-carousel-item>
		<sl-carousel-item>
		  <img
			alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
			src="https://shoelace.style/assets/examples/carousel/field.jpg"
		  />
		</sl-carousel-item>
		<sl-carousel-item>
		  <img
			alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
			src="https://shoelace.style/assets/examples/carousel/valley.jpg"
		  />
		</sl-carousel-item>
	</sl-carousel>
	
	<p class="py-10"></p>

	<sl-image-comparer>
		<img
		  slot="before"
		  src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&sat=-100&bri=-5"
		  alt="Grayscale version of kittens in a basket looking around."
		/>
		<img
		  slot="after"
		  src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
		  alt="Color version of kittens in a basket looking around."
		/>
	</sl-image-comparer>
	  

	<p class="mt-12">
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
			<sl-spinner style="font-size: 50px; --track-width: 10px;"></sl-spinner>
        {:else}
          <ul>
            {#each data.data as post}
              <li><a href="/about/ro/{post.slug}" data-sveltekit-preload-data="hover">{post.title.rendered}</a></li>
            {/each}
          </ul>
        {/if}

		<br />
		
		<ul>
            {#each data.data as post}
				<sl-details summary={post.title.rendered}>
					Dayman. Fighter of the Nightman. Champion of the Sun. 
					You're a master of karate and friendship,
					for everyone.
			  	</sl-details>
            {/each}
          </ul>
     
	<a href="/about">
		go the fuck back
	</a>

	<sl-tooltip content="This is a tooltip. I'll cut off your balls.">
		<sl-button href="/about">go the fuck back</sl-button>
	</sl-tooltip>  
</div>


<style>
	.animation-overview .box {
	  display: inline-block;
	  width: 100px;
	  height: 100px;
	  background-color: var(--sl-color-primary-600);
	  margin: 1.5rem;
	}
  </style>