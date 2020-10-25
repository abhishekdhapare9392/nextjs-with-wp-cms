import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Blog from '../components/Blogs/Blog'

const slug = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title.rendered}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <Blog blog={props} />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const id = ctx.query.slug
  const res = await axios.get(
    `http://localhost/webwithwpcms/wp-json/wp/v2/posts/${id}`
  )
  const blog = res.data
  return {
    props: blog,
  }
}

export default slug
