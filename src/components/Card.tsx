import { FC } from 'react';
import { Movie } from '@/app/page';
import { FiThumbsUp } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

type CardProps = {
    result: Movie;
};

const Card: FC<CardProps> = ({ result }) => {
    return (
        <div className='p-3 m-2 transition-shadow duration-200 border-2 rounded-lg shadow-md cursor-pointer hover:shadow-slate-400 border-slate-400'>
            <Link href={`/movie/${result.id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${
                        result.backdrop_path || result.poster_path
                    }`}
                    width={500}
                    height={300}
                    alt='Movie'
                    className='h-auto max-w-full mx-auto mb-3 transition-opacity duration-200 rounded-lg group-hover:opacity-80'
                    placeholder='blur'
                    blurDataURL='/bean_eater.svg'
                />
                <div>
                    <p className='line-clamp-2'>{result.overview}</p>
                    <h2 className='text-lg font-bold truncate'>
                        {result.title || result.name}
                    </h2>
                    <p className='flex items-center justify-between'>
                        {result.release_date || result.first_air_date}{' '}
                        <FiThumbsUp /> {result.vote_count}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default Card;
