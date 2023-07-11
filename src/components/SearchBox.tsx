'use client';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBox: FC = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!search) {
            return;
        }
        router.push(`/search/${search}`);
    };

    const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='flex items-end justify-center max-w-6xl mx-auto'>
            <input
                className='pt-8 text-lg placeholder-gray-500 bg-transparent rounded-sm outline-none'
                value={search}
                onChange={searchHandler}
                type='text'
                aria-label='Search'
                placeholder='Search keywords...'
            />
            <button
                className='text-lg text-amber-500 disabled:text-gray-400'
                type='submit'>
                Search
            </button>
        </form>
    );
};

export default SearchBox;
