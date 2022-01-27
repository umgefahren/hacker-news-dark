<script context="module" lang="ts">
	const hn = 'https://hacker-news.firebaseio.com/v0';
	export async function load({}) {
		const topStoriesUrl = hn + '/topstories.json';

		const topStoriesResponse = await fetch(topStoriesUrl);
		const topStories: Number[] = (await topStoriesResponse.json()) as Number[];

		let articlesPromises = [];
		for (let i = 0; i < 100; i++) {
			const num = topStories[i];
			const articlePromise = fetch(hn + `/item/${num}.json`);
			const jsonPromise = articlePromise.then(
				function (article) {
					return article.json();
				},
				function (reason) {
					console.log(reason);
				}
			);
			articlesPromises.push(jsonPromise);
		}

		return {
			props: {
				articlesPromises: articlesPromises
			}
		};
	}
</script>

<svelte:head>
    <title>Hacker News Reader (dark)</title>
</svelte:head>

<script lang="ts">
	export let articlesPromises = [];
</script>

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
			{#each articlesPromises as articlePromise}
				{#await articlePromise}
					<tr class="border">
						<td colspan="4" class="text-white">Loading...</td>
					</tr>
				{:then article}
					{#if article.type == 'story'}
						<tr class="border">
							<td class="text-white font-mono border"><p class="m-2">{article.id}</p></td>
							<td class="text-white border">
								<p class="ml-2 mr-2">
									{article.title}
								</p>
							</td>
                            <td class="text-white border"><p>{ Math.round((Date.now() / 1000 - article.time) / 60 / 60)}h</p></td>
							<td class="text-white"
								><a href={article.url} class="ml-2 mr-2">({new URL(article.url).host})</a></td
							>
						</tr>
					{/if}
				{/await}
			{/each}
		</tbody>
	</table>
</div>

<style>
	:global(body) {
		background-color: black;
	}
</style>
