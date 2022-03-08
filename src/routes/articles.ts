import { getArticles } from "$lib/stories";


export async function get({ }) {
    const articles = await getArticles();
    return {
        body: {
            articles
        }
    }
}