const hn = 'https://hacker-news.firebaseio.com/v0';

let latestCache: any[] = null;
let cacheTimestamp = null;

export async function getArticles(): Promise<any[]> {
    if (latestCache == null) {
        latestCache = await loadArticles();
        cacheTimestamp = Date.now();
        return latestCache;
    } else {
        const now = Date.now();
        if (Math.abs(cacheTimestamp - now) > 10000) {
            cacheTimestamp = now;
            latestCache = await loadArticles();
            return latestCache;
        } else {
            return latestCache;
        }
    }
}

export async function loadArticles(): Promise<any[]> {


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
    let articles = await Promise.all(articlesPromises);
    return articles;
}