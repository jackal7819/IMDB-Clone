import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';
import { Movie } from '@/app/page';
import { FiThumbsUp } from 'react-icons/fi';

type CardProps = {
    result: Movie;
};

const fallbackImage =
    'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80';

const Card: NextPage<CardProps> = ({ result }) => {
    return (
        <div className='p-3 m-2 transition-shadow duration-200 border-2 rounded-lg shadow-md cursor-pointer hover:shadow-slate-400 border-slate-400'>
            <Link href={`/movie/${result.id}`}>
                <Image
                    src={
                        result.backdrop_path
                            ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
                            : fallbackImage
                    }
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
