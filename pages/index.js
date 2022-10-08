import Head from 'next/head';

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        {' '}
        This is the main page
        <hr />
        <p>variable in index.js: {props.variable}</p>
        <p>setVariable in index.js:</p>{' '}
        <button
          onClick={() => {
            props.setVariable(1);
          }}
        >
          {' '}
          to 1
        </button>
        <button
          onClick={() => {
            props.setVariable(0);
          }}
        >
          {' '}
          to 0
        </button>
        <hr />
      </main>
    </div>
  );
}
