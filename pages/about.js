import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

const about = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default about;
