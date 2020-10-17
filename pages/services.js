import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Title from '../components/Services/Title'
import Web from '../components/Services/Web'
import Mobile from '../components/Services/Mobile'
import Product from '../components/Services/Product'
import Banking from '../components/Services/Banking'
import axios from 'axios'

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <Head>
        <title>Services - Website with CMS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <Title services={data} />
        <Web services={data} />
        <Mobile services={data} />
        <Product services={data} />
        <Banking services={data} />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await axios.get(
    'http://localhost/webwithwpcms/wp-json/wp/v2/pages?slug=services'
  )

  const data = res.data[0]
  // console.log(data)

  return { data }
}
