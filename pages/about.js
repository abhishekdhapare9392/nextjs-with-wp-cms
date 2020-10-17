import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Title from '../components/About/Title'
import About from '../components/About/About'
import Other from '../components/About/Other'

const about = ({ data }) => {
  const aboutData = data[0]
  console.log()
  // console.log(aboutData)
  return (
    <div>
      <Head>
        <title>About Us</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <Title aboutData={aboutData} />
        <About aboutData={aboutData} />
        <Other aboutData={aboutData} />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

about.getInitialProps = async (ctx) => {
  const res = await axios.get(
    `http://localhost/webwithwpcms/wp-json/wp/v2/pages?slug=about`
  )

  console.log(res.data)
  const data = res.data
  // const blog = await blogres.data;
  // console.log(data);
  return { data }
}

export default about
