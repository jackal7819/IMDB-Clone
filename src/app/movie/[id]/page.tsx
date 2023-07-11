import { Movie } from '@/app/page';
import { NextPage } from 'next';
import Image from 'next/image';

interface MoviePageProps {
    params: Movie;
}

const getMovie = async (movieId: number): Promise<Movie> => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
    );
    return await res.json();
};

const MoviePage: NextPage<MoviePageProps> = async ({ params }) => {
    const movieId = params.id;
    const movie = await getMovie(movieId);
    return (
        <div className='w-full mx-auto mt-5 lg:mt-10'>
            <div className='flex flex-col items-center content-center max-w-6xl p-4 mx-auto xl:flex-row md:space-x-6'>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${
                        movie.backdrop_path || movie.poster_path
                    }`}
                    width={700}
                    height={500}
                    alt='Movie'
                    className='h-auto max-w-full mb-3 rounded-lg'
                    placeholder='blur'
                    blurDataURL='/bean_eater.svg'
                />
                <div className='p-2'>
                    <h2 className='mb-4 text-lg font-bold'>
                        {movie.title || movie.name}
                    </h2>
                    <p className='mb-4'><span className='mr-2 font-semibold'>Overview:</span>{movie.overview}</p>
                    <p className='mb-4'><span className='mr-2 font-semibold'>Date Released:</span>{movie.release_date || movie.first_air_date}</p>
                    <p className='flex gap-3'><span className='font-semibold '>Rating:</span>{movie.vote_average}<span className='font-semibold'>Vote Count:</span>{movie.vote_count}</p>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
