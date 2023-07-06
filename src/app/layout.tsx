import Header from '@/components/Header';
import './globals.css';
import Providers from './Providers';

export const metadata = {
    title: 'IMDB Clone',
    description: 'IMDB Clone by Viktor',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
