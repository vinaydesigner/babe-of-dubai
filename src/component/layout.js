import Navbar from '../component/Navbar';
import Footer from '../component/Footer';


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
