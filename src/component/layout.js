import Topbar from "./common/Topbar"
import Bottom from "./common/Bottom"



const Layout = ({ children }) => {



  return (
    <>
      <Topbar></Topbar>
      <main>{children}</main>
      <Bottom></Bottom>




    </>
  )
}

export default Layout



// export async function getServerSideProps() {
//   const response = await fetch('https://dev.havingado.net/babesofdubai/api/v1/header-menu')
//   const data = await response.json()
//   console.log(data)

//   return {
//     props: {
//       data
//     }
//   }

// }



