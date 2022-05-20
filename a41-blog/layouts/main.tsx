import { FC, ReactNode } from 'react';
import Head from 'next/head';
import Header from '../components/Header'

const MainLayout: FC<{ children?: ReactNode }> = ({ children }) =>
    <div className="container">
        <Head>
            <title>My blog</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <main className="section">
            <div className="content">
                {children}
            </div>
        </main>
        <footer />
    </div>;

export default MainLayout