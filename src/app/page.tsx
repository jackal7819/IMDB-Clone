import Results from '@/components/Results';
import { FC } from 'react';

type Movie = {
    id: number;
    original_title: string;
};

type HomeProps = {
    searchParams: { genre: string };
};

const Home: FC<HomeProps> = async ({ searchParams }) => {
    const genre = searchParams.genre || 'popular';
    const API_KEY = process.env.API_KEY;
    let results: Movie[] = [];

    const fetchData = async (selectedGenre: string) => {
        try {
            const url = `https://api.themoviedb.org/3/movie/${selectedGenre}?api_key=${API_KEY}&language=en-US&page=1`;
            const res = await fetch(url);
            // const res = await fetch(url, { next: { revalidate: 10000 } });
            const data = await res.json();
            results = data.results;
        } catch (error) {
            console.error(error);
        }
    };

    const genreHandlers: { [key: string]: () => Promise<void> } = {
        nowPlaying: () => fetchData('now_playing'),
        popular: () => fetchData('popular'),
        topRated: () => fetchData('top_rated'),
        upcoming: () => fetchData('upcoming'),
    };

    const selectedHandler = genreHandlers[genre];
    if (typeof selectedHandler === 'function') {
        await selectedHandler();
    }

    return (
        <div>
            <Results results={results} />
        </div>
    );
};

export default Home;
