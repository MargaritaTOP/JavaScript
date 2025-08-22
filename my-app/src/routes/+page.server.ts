import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { mockNews } from '$lib/data';
import type { NewsPost } from '$lib/types';

export const load: PageServerLoad = async () => {
	try {
		return { initialNews: mockNews.slice(0, 6) };
	} catch (e) {
		throw error(500, 'Ошибка загрузки новостей');
	}
};