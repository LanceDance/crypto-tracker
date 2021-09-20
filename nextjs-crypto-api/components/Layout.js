import Link from 'next/link';
import Head from 'next/head';

const Layout = ({children, title = "Crypto Tracker"}) => {
    return (
        <div className="layout">
                  <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <link href="/" passHref></link>
        </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;