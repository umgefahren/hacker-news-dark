<script context="module" lang="ts">
	export async function load({ fetch }) {
		
		const requestUrl = `/articles`;
		const articlesResponse = await fetch(requestUrl);
		const articlesJson = await articlesResponse.json();
		const articles = articlesJson.articles;
		// const articles = await loadArticles(fetch);

		const preprocessedArticles = [];
		articles.forEach(article => {
		
			if (article == null) {
				return;
			}
			const articleUrl = article.url;
			let realUrl;
			if (articleUrl == undefined) {
				realUrl = { host: "none" };
			} else {
				realUrl = new URL(articleUrl);	
			}
			const newArticle = {
				id: article.id,
				type: article.type,
				title: article.title,
				time: article.time,
				url: realUrl,
			};
			preprocessedArticles.push(newArticle);
		});

		return {
			props: {
				articles: preprocessedArticles,
			}
		};
	}
</script>

<script lang="ts">
	export let articles = [];
</script>

<svelte:head>
	<title>Hacker News Reader (dark)</title>
</svelte:head>

<div class="w-screen h-screen">
	<table class="table-auto m-4 bg-gray-700 border mx-auto">
		<thead class="bg-gray-800">
			<tr class="border">
				<th class="text-white">Id</th>
				<th class="text-white">Title</th>
				<th class="text-white">Age</th>
				<th class="text-white">GoTo</th>
			</tr>
		</thead>
		<tbody>
			{#each articles as article}
				{#if article.type == 'story'}
					<tr class="border">
						<td class="text-white font-mono border"><p class="m-2">{article.id}</p></td>
						<td class="text-white border">
							<p class="ml-2 mr-2">
								{article.title}
							</p>
						</td>
						<td class="text-white border"
							><p>{Math.round((Date.now() / 1000 - article.time) / 60 / 60)}h</p></td
						>
						<td class="text-white"
							><a href={article.url} class="ml-2 mr-2">({article.url.host})</a></td
						>
					</tr>
				{/if}
			{/each}
		</tbody>
	</table>
</div>

<style>
	:global(body) {
		background-color: black;
	}
</style>
