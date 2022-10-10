import Head from 'next/head';
import Link from 'next/link';

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Link href="/products"> To the products page</Link>
      </main>
    </div>
  );
}
