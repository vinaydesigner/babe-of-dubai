import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../src/component/layout';
import Navbar from '../src/component/Navbar';
import Footer from '../src/component/Footer';


function MyApp({ Component, pageProps }) {

  return (
    <>

      <Layout>
        <Navbar></Navbar>
        <Component {...pageProps} />
        <Footer></Footer>
      </Layout>

    </>
  )

}

export default MyApp
