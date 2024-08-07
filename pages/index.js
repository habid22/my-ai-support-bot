import Head from 'next/head';
import ChatBox from '../components/ChatBox';

export default function Home() {
    return (
        <div style={{ fontFamily: 'Roboto, sans-serif', textAlign: 'center' }}>
            <Head>
                <title> Customer Support AI Demo 🤖</title>
            </Head>
            <main>
                <h1 style={{ fontSize: '2rem', margin: '20px 0' }}> Dealership Customer Support AI Demo 🤖</h1>
                <ChatBox />
            </main>
        </div>
    );
}
