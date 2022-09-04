import Bottom from "./common/bottom";
import Topbar from "./common/topbar";



const Layout = ({children}) => {
  return (
    <>
        <Topbar></Topbar>
        <main>{children}</main>
        <Bottom></Bottom>
    </>
  )
}

export default Layout

// import Tobnavbar from './tobnavbar';
// import Bottomfooter from './bottomfooter';




// const Layout = ({children}) => {
//   return (
//     <>
//       <Tobnavbar />
//         <main>{children}</main>
//       <Bottomfooter />
//     </>
//   )
// }

// export default Layout





// export default function Layout({ children }) {
//   return (
    
//   )
// }



