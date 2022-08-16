import Headertop from './Navbar';
import Footer from './Footer';


export default function Layout({ children }) {
    return (
      <>
        <Headertop />
          <main>{children}</main>
        <Footer />
      </>
    )
  }
  