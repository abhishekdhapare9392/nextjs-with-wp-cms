import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Slider from '../components/Home/Slider'
import axios from 'axios'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import Blog from '../components/Home/Blog'
import Contact from '../components/Home/Contact'

export default function Home({ data, blog }) {
  // console.log(blog);
  return (
    <div>
      <Head>
        <title>Website with CMS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <Slider props={{ data }} />
        <About props={{ data }} />
        <Services props={{ data }} />
        <Blog props={{ blog }} />
        <Contact {...data.contact} />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await axios.get(
    'http://localhost/webwithwpcms/wp-json/wp/v2/pages?slug=home'
  )
  const data = await res.data[0].acf

  const blogres = await axios.get(
    'http://localhost/webwithwpcms/wp-json/wp/v2/posts?categories=2'
  )

  const blog = await blogres.data
  // console.log(data);
  return { data, blog }
}
