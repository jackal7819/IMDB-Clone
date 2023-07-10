'use client';
import { useEffect } from 'react';

type ErrorProps = {
    error: string | Error;
    reset: () => void;
};

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className='flex items-center justify-center gap-10 h-[70vh] flex-wrap'>
            <h1 className='text-4xl'>Something went wrong</h1>
            <button className='px-4 py-2 border rounded-lg hover:bg-amber-500' onClick={() => reset()}>Try again</button>
        </div>
    );
};

export default Error;
