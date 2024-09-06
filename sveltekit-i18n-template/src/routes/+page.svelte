<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { availableLanguageTags, languageTag, setLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n.js';
	import { page } from '$app/stores';
</script>

<h1>{m.hello_world()}</h1>
<p>{m.greetings({ name: 'param' })}</p>

<h1>{languageTag()}</h1>

<a href="/about">{m.about()}</a>

<!-- will become on of -->

<a href="/en/about">{m.about()}</a>
<a href="/de/uber-uns">{m.about()}</a>
<a href="/fr/a-propos">{m.about()}</a>

<a href="/about" hreflang="de">{m.about()}</a>

<!-- Will always be german, regardless of the current language -->
<a href="/de/uber-uns" hreflang="de">{m.about()}</a>
<br />
{#each availableLanguageTags as lang}
	<!-- the hreflang attribute decides which language the link points to -->
	<a
		href={i18n.route($page.url.pathname)}
		hreflang={lang}
		aria-current={lang === languageTag() ? 'page' : undefined}
	>
		{lang}
	</a>
	<br />
{/each}

<button on:click={() => setLanguageTag('en')}>change language to "en"</button>
<button on:click={() => setLanguageTag('ko')}>change language to "ko"</button>
