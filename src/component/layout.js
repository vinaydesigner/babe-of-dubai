import Topbar from "./common/Topbar"
import Bottom from "./common/Bottom"

const Layout = ({ children }) => {

  return (
    <>
      <Topbar />
      <main>{children}</main>
      <Bottom />
    </>
  )
}

export default Layout





