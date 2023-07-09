import { FC } from 'react';
import NavbarItem from './NavbarItem';

const Navbar: FC = () => {
    return (
        <div className='flex gap-5 p-4 justify-evenly dark:bg-gray-600 bg-amber-100 lg:text-lg'>
            <NavbarItem title='Trending' param='trending' />
            <NavbarItem title='Top Rated' param='topRated' />
            <NavbarItem title='Latest Releases' param='latestReleases' />
        </div>
    );
};

export default Navbar;
