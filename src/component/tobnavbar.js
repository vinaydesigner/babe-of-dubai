import Link from "next/Link";
import Image from "next/image";
import { Container, Row } from "react-bootstrap";
import styles from '../../styles/Home.module.css';
import { useState } from "react";





const Tobnavbar = () => {

  const [status, setStatus] = useState(false)


  return (
    <>
      <header id="header">
        <Container fluid>
          <Row>
            <div className={styles.topquickinfo}>
              <ul>
                <li className={styles.topcall}><span>Call Now</span><Link href={'tel:+447831475881'}>(+44) 07831 475881</Link></li>
                <li className={styles.toptelegram}><Link href={'tel:+447831475881'}>(+44) 07831 475881</Link></li>
                <li className={styles.topwhatapps}><Link href={'tel:+447831475881'}>(+44) 07831 475881</Link></li>
              </ul>
            </div>
            <div className={styles.logo}>
              <Link href={'/'}><a><Image
                src="/images/logo.png"
                alt="Babes of Dubai Logo" layout=''
                width={212}
                height={118}
              /></a></Link>
            </div>


            <button className={styles.menuopen} onClick={() => setStatus(!status)}></button>
            <div className={`topmenu ${status ? 'active' : ''}`}>
              <ul>
                <li>
                  <Link href={'/'}>Home</Link>
                </li>
                <li>
                  <Link href={'/aboutus'}>About Us</Link>
                </li>
                <li>
                  <Link href={'/escorts'}>All Escorts</Link>
                </li>
                <li>
                  <Link href={'/duoescorts'}>Duo Escorts</Link>
                </li>

                <li className={styles.blank}></li>

                <li>
                  <Link href={'/booking'}>Booking</Link>
                </li>
                <li>
                  <Link href={'/employment'}>Employment</Link>
                </li>
                <li>
                  <Link href={'/reviews'}>Reviews</Link>
                </li>
                <li>
                  <Link href={'/contactus'}>Contact Us</Link>
                </li>
              </ul>
            </div>

          </Row>
        </Container>
      </header>
    </>
  )
}

export default Tobnavbar