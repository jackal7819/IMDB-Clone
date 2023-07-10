import { FC } from 'react';
import Card from './Card';
import { Movie } from '@/app/page';

type ResultsProps = {
    results: Movie[];
};

const Results: FC<ResultsProps> = ({ results }) => {
    const movies = results.map((result) => (
        <Card key={result.id} result={result} />
    ));

    return (
        <div className='grid max-w-6xl grid-cols-1 gap-4 py-4 mx-auto 2xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3'>
            {movies}
        </div>
    );
};

export default Results;
