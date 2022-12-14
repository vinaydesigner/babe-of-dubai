import Link from 'next/link';
import Image from 'next/image';
import { Container, Row } from 'react-bootstrap';
import styles from '../../../styles/Home.module.css';


const Bottom = ({ footermenu }) => {
    return (
        <>

            <footer className={styles.footer}>

                <Container>
                    <div className={styles.fotinfro}>
                        <Image
                            src="/images/logo@2x.png"
                            alt="Babes of Dubai Logo" layout='responsive'
                            width={424}
                            height={236}
                        />
                        <ul>
                            {footermenu?.setting?.map((curElem) => {
                                return (
                                    <>
                                        <li><a href={'emailto:{curElem.email}'}>{curElem.email}</a></li>
                                        <li><a href={'tel:{curElem?.contact_no}'}> {curElem?.contact_no}</a></li>
                                    </>
                                )
                            })}

                        </ul>
                    </div>
                    <div className={styles.fotlinks}>
                        <h6>Navigation</h6>

                        <ul>
                            {footermenu?.footer_menu?.map((curElem) => {
                                return (
                                    <>
                                        <li>
                                            <Link href={curElem.menu_slug}>{curElem.menu_name}</Link>
                                        </li>
                                    </>
                                )
                            })}


                            {/* <li>
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
                                <Link href={'/faq'}>FAQs</Link>
                            </li>
                            <li>
                                <Link href={'/blog'}>Blog/Articles</Link>
                            </li>
                            <li>
                                <Link href={'/links'}>Links</Link>
                            </li>
                            <li>
                                <Link href={'/contactus'}>Contact Us</Link>
                            </li> */}
                        </ul>
                    </div>

                </Container>

                <div className={styles.copyright}>?? 2022 Babe of Dubai, All Rights Reserved Designed By <Link href="https://www.wave69.co.uk">Wave69</Link></div>
                <div className={styles.mobile_quickinfo}>
                    <Link href={'tel:+447831475881'}>
                        <a><Image src="/images/call_new.png" width={50} height={50} ></Image></a>
                    </Link>
                    <Link className={styles.toptelegram} href={'sms:+447831475881'}>
                        <a><Image src="/images/sms_new.png" width={50} height={50} ></Image></a>
                    </Link>
                    <Link className={styles.topwhatapps} href={'https://wa.me/+447831475881'}>
                        <a><Image src="/images/what_new.png" width={50} height={50} ></Image></a>
                    </Link>
                </div>
            </footer>

        </>
    )
}

export default Bottom












