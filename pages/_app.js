import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../src/component/layout';
import { Headermenuaapi, Footermenuaapi } from '../src/api/topandfooterapi';
import { useEffect, useState } from "react"



function MyApp({ Component, pageProps }) {

  const [headermenu, setHeadermenu] = useState([]);
  const [footermenu, setFootermenu] = useState([]);

  const fetchtopmenu = async () => {
    var topmenudata = await Headermenuaapi();
    setHeadermenu(topmenudata);
    // console.log(headermenu);
  }


  const fetchfootermenu = async () => {
    var footerdata = await Footermenuaapi();
    setFootermenu(footerdata);
    // console.log(footermenu);
  }

  useEffect(() => {
    fetchtopmenu();
    fetchfootermenu();
  }, []);
  console.log(headermenu);
  console.log(footermenu);




  return (
    <>
      <Layout headermenu={headermenu} footermenu={footermenu}>
        <Component {...pageProps} />
      </Layout>
    </>
  )

}

export default MyApp

// headermenu={headermenu}


