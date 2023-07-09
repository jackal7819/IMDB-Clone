import {FC} from 'react';
import { RiHome4Fill, RiFileInfoFill } from 'react-icons/ri';
import Link from 'next/link';
import MenuItem from './MenuItem';
import DarkModeSwitch from './DarkModeSwitch';

const Header: FC = () => {
    return (
        <div className='flex items-center justify-between max-w-6xl py-6 mx-2 sm:mx-auto'>
            <div className='flex'>
                <MenuItem title='HOME' address='/' Icon={RiHome4Fill} />
                <MenuItem title='ABOUT' address='/about' Icon={RiFileInfoFill} />
            </div>
            <div className='flex items-center space-x-5'>
                <DarkModeSwitch />
                <Link href='/'>
                    <h2 className='text-2xl'>
                        <span className='px-2 py-1 mr-1 font-bold rounded-lg bg-amber-500'>
                            CINE
                        </span>
                        <span className='hidden text- xl sm:inline'>World</span>
                    </h2>
                </Link>
            </div>
        </div>
    );
}

export default Header;