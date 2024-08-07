import Head from 'next/head';
import ChatBox from '../components/ChatBox';

export default function Home() {
    return (
        <div>
            <Head>
                <title>AI Customer Support Bot</title>
            </Head>
            <main>
                <h1>AI Customer Support Bot</h1>
                <ChatBox />
            </main>
        </div>
    );
}
