import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row } from "react-bootstrap";
import styles from '../../../styles/Home.module.css';



const Topbar = ({ headermenu }) => {


    const [status, setStatus] = useState(false);

    return (
        <>
            <header id="header">
                <Container fluid>
                    <Row>
                        <div className={styles.topquickinfo}>
                            <ul>
                                {headermenu?.setting?.map((curElem) => {
                                    return (
                                        <>
                                            <li className={styles.topcall}><span>Call Now</span> <a href={'tel:{curElem?.contact_no}'}> {curElem?.contact_no}</a></li>
                                            <li className={styles.toptelegram}><a href={'tel:{curElem?.telegram_no}'}> {curElem?.telegram_no}</a></li>
                                            <li className={styles.topwhatapps}><a href={'tel:{curElem?.whatsapp_no}'}> {curElem?.whatsapp_no}</a></li>
                                        </>
                                    )
                                })}
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
                                {headermenu?.header_menu?.map((curElem) => {
                                    return (
                                        <>
                                            <li>
                                                <Link href={curElem.menu_slug}>{curElem.menu_name}</Link>
                                            </li>
                                        </>
                                    )
                                })}
                            </ul>
                        </div>

                    </Row>
                </Container>
            </header>

        </>
    )
}

export default Topbar

{/* <div className={styles.topquickinfo}>
    <ul>

        <li className={styles.topcall}><span>Call Now</span><Link href={'tel:+447831475881'}> (+44) 07831 475881 </Link></li>
        <li className={styles.toptelegram}><Link href={'tel:+447831475881'}> (+44) 07831 475881 </Link></li>
        <li className={styles.topwhatapps}><Link href={'tel:+447831475881'}> (+44) 07831 475881 </Link></li>
    </ul>
</div> */}



