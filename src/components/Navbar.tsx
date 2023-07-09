import { FC } from 'react';
import NavbarItem from './NavbarItem';

const Navbar: FC = () => {
    return (
        <div className='flex gap-5 p-4 justify-evenly dark:bg-gray-600 bg-amber-100 lg:text-lg'>
            <NavbarItem title='Now Playing' param='nowPlaying' />
            <NavbarItem title='Popular' param='popular' />
            <NavbarItem title='Top Rated' param='topRated' />
            <NavbarItem title='Upcoming' param='upcoming' />
        </div>
    );
};

export default Navbar;
