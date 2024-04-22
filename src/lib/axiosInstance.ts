import axios from 'axios';

export default axios.create({
	baseURL: import.meta.env.VITE_ANIME_API,
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_ANIME_API_KEY,
		'X-RapidAPI-Host': import.meta.env.VITE_ANIME_API_HOST,
	},
});
