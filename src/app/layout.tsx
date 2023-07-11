import './globals.css';
import Providers from './Providers';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';

export const metadata = {
    title: 'IMDB Clone',
    description: 'IMDB Clone by Viktor',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    <Header />
                    <Navbar />
                    <SearchBox />
                    {children}
                </Providers>
            </body>
        </html>
    );
};

export default RootLayout;
