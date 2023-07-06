'use client';
import { FC, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const DarkModeSwitch: FC = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleThemeToggle = () => {
        if (isMounted) {
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        }
    };

    return (
        <>
            {currentTheme === 'light' ? (
                <MdDarkMode
                    className='text-2xl cursor-pointer hover:text-amber-500'
                    onClick={handleThemeToggle}
                />
            ) : (
                <MdLightMode
                    className='text-2xl cursor-pointer hover:text-amber-500'
                    onClick={handleThemeToggle}
                />
            )}
        </>
    );
};

export default DarkModeSwitch;
