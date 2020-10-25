import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Title from '../components/Blogs/Title'
import Blogs from '../components/Blogs/Blogs'

const blog = ({ blogs }) => {
  //   console.log(blogs)
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <Title title='Blogs' subtitle='Let us get in to deep...' />
        <Blogs blogs={blogs} />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

blog.getInitialProps = async (ctx) => {
  const res = await axios.get(
    'http://localhost/webwithwpcms/wp-json/wp/v2/posts'
  )

  const blogs = await res.data
  //   console.log(blogs)
  return { blogs }
}

export default blog
