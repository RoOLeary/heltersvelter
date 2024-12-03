
// @ts-expect-error abc
export const load = async ({ fetch }) => {
	const res = await fetch(`https://blpwp.frb.io/wp-json/wp/v2/news?per_page=10`);
	const data = await res.json();
	return { data };
};