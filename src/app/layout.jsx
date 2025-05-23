import { Footer, Header } from '@/components';
import { metadataMain } from '@/config/seo.config';
import { Geist, Nunito_Sans } from 'next/font/google';

import '@ant-design/v5-patch-for-react-19';
import { Analytics } from '@vercel/analytics/next';

import { LaptopContainer } from './(initialize)/laptop-initialize';
import Providers from './(initialize)/providers';
import './globals.css';

const nunito = Nunito_Sans({
    variable: '--font-nunito',
    subsets: ['latin'],
    weight: ['200', '300', '400', '700', '900'],
});

export const metadata = metadataMain;

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <body className={`${nunito.variable} antialiased overflow-x-hidden`}>
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
                <div className="overflow-hidden">
                    <LaptopContainer />
                </div>
                <Analytics />
            </body>
        </html>
    );
}
