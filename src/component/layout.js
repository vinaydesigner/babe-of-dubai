import Topbar from "./common/Topbar"
import Bottom from "./common/Bottom"

const Layout = ({ children, headermenu, footermenu }) => {

  return (
    <>
      <Topbar headermenu={headermenu} />
      <main>{children}</main>
      <Bottom footermenu={footermenu} />
    </>
  )
}

export default Layout





