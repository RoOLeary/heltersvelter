import type { PageLoad } from './$types';

export const load: PageLoad = async({ fetch, params }) => {

    const res = await fetch(`https://blpwp.frb.io/wp-json/wp/v2/news?slug=${params.slug}`);
    const data = await res.json();

	return {
		post: {
			data
		}
	};
};


// export const load = async ({ fetch }) => {
// 	const res = await fetch(`https://blpwp.frb.io/wp-json/wp/v2/news?slug=${params.slug}`);
// 	let data = await res.json();
// 	return { data };
// };