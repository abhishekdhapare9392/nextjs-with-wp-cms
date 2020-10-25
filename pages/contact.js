import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Title from '../components/Contact/Title'
import Map from '../components/Contact/Map'
import Details from '../components/Contact/Details'

const contact = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Head>
        <title>Contact</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <Title data={data} />
        <Map data={data} />
        <Details data={data.acf} />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

contact.getInitialProps = async (ctx) => {
  const res = await axios.get(
    'http://localhost/webwithwpcms/wp-json/wp/v2/pages?slug=contact'
  )

  const data = await res.data[0]
  //   console.log(blogs)
  return { data }
}

export default contact
