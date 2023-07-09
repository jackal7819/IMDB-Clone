import './globals.css';
import Providers from './Providers';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

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
                    {children}
                </Providers>
            </body>
        </html>
    );
};

export default RootLayout;
