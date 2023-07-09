import { FC } from 'react';

type ResultsProps = {
    results: {
        id: number;
        original_title: string;
    }[];
};

const Results: FC<ResultsProps> = ({ results }) => {
    const movies = results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
    ));

    return <div>{movies}</div>;
};

export default Results;

