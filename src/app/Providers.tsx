'use client';
import { ThemeProvider } from 'next-themes';
import { FC, ReactNode } from 'react';

type ProvidersProps = {
    children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <ThemeProvider enableSystem={true} attribute='class'>
            <div className='min-h-screen text-gray-800 transition-colors duration-300 bg-orange-100 select-none dark:bg-gray-800 dark:text-gray-200'>
                {children}
            </div>
        </ThemeProvider>
    );
};

export default Providers;
