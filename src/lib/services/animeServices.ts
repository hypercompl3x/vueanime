import axios from '../axiosInstance';
import type { Anime } from '../types';

type AnimeResponse = {
	data: Anime[];
	meta: Meta;
};

type Meta = {
	page: number;
	size: number;
	totalData: number;
	totalPage: number;
};

export const getAllAnime = async () => {
	try {
		const anime = await axios.get<AnimeResponse>('/?page=1&size=25');
		return { data: anime.data.data, error: '' };
	} catch (error) {
		console.error(error);
		return { error: (error as string).toString(), data: [] };
	}
};
