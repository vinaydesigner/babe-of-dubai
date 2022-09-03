import Tobnavbar from './tobnavbar';
import Bottomfooter from './bottomfooter';




const Layout = ({children}) => {
  return (
    <>
      <Tobnavbar />
        <main>{children}</main>
      <Bottomfooter />
    </>
  )
}

export default Layout





// export default function Layout({ children }) {
//   return (
    
//   )
// }



