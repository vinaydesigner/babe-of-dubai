import Navbar from './Navbar';
import Footer from './Footer';



const layout = ({children}) => {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default layout


// export default function Layout({ children }) {
//   return (
    
//   )
// }



