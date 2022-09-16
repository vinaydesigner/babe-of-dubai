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





