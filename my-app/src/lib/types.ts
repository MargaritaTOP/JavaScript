export type NewsPost = {
	id: number;
	title: string;
	body: string;
	category: 'technology' | 'science' | 'health' | 'business';
	author: string;
	image: string;
	date: string;
	likes: number;
	shares: number;
};