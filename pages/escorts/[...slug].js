import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import Link from 'next/link';
import Pupupselfi from '../../src/component/pupupselfi'

const modelsdetails = () => {
    return (
        <>
            <div className={styles.h_textinfo}>
                <h1>Models Details </h1>
                <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />

                <Container fluid className={styles.modelsdetailspage}>
                    <Row>
                        <Col xs={12} lg={4} md={4}>
                            <div className='md_linksof_video_selfi'>
                                <Pupupselfi></Pupupselfi>
                            </div>
                            <div className='md_title mobile'>Bridget   <span>AED 200/300</span></div>
                            <Image src="/images/models_thumbnails/pic1.jpg" width={350} height={520}></Image>
                        </Col>
                        <Col xs={12} lg={8} md={8}>
                            <div className='modelsdetails_innerbox'>
                                <div className='md_title'>Bridget   <span>AED 200/300</span></div>
                                <Accordion defaultActiveKey={['0', '1']} >
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header> Stats </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='md_stats'>
                                                <ul>
                                                    <li><strong>25</strong> Age</li>
                                                    <li><strong>5&apos; 4&#39;</strong> Height</li>
                                                    <li><strong>White</strong> Hair Colour</li>
                                                    <li><strong>Black</strong> Eye Colour</li>
                                                    <li><strong>Eastern</strong> Eye Colour</li>
                                                    <li><strong>34D</strong> Bust</li>
                                                    <li><strong>Enhanced</strong> Boobs</li>
                                                    <li><strong>Large</strong> Dress Size</li>
                                                    <li><strong>Adware Road</strong> Location</li>
                                                </ul>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header> About Me </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='md_aboutme'>
                                                <p>Likes ws giving stripping and lap dancing dinner dates massage foot worship party Mce sitting 69 owo</p>
                                                <p>Uniforms naughjity schoolgirl sexy secretary fitness latex.</p>
                                                <p>This is a Bridget profile here at Babes of Dubai</p>
                                                <p>Bridget is a 24-year-old blonde babe who joins us from Eastern Europe this sexy beautiful lady has natural 34C boobs stands at SUR and perfect English.</p>
                                                <p>Bridget is a Dream come true!</p>
                                                <p>You will see from her professional pictures just what a sexy curvy figure this lady has you will see from her gorgeous selfie just how naughty she loo can you imagine this sexy blonde dress. as a secretary popping up f rorn under your desk to making a hookingwith a London escort - we have tried to cover all the points that you may need or not know.</p>
                                                <p>You will see from her professional pictures just what a sexy curvy figure this lady has you will see from her gorgeous selfie just how naughty she loo can you imagine this sexy blonde dress. as a secretary popping up f rorn under your desk If you have never book. time with an escort before then do please read our guide to making a hookingwith a London escort - we have tried to cover all the points that you may need or not know.</p>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header> Rates </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='md_rates'>
                                                <ul>
                                                    <li>
                                                        <span></span>
                                                        <span>Incall</span>
                                                        <span>Outcall</span>
                                                    </li>
                                                    <li>
                                                        <span>1 Hour</span>
                                                        <span>200</span>
                                                        <span>350</span>
                                                    </li>
                                                    <li>
                                                        <span>90 Mins</span>
                                                        <span>400</span>
                                                        <span>550</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header> Location </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='md_location'>
                                                <span>International</span>
                                                <span>Umm Suqeim</span>
                                                <span>Meadows</span>
                                                <span>Emirates</span>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header> What I Like </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='md_whatlike'>
                                                <span>Incall</span>
                                                <span>Outcall</span>
                                                <span>A Level</span>
                                                <span>Party</span>
                                                <span>Watersport</span>
                                                <span>Meadows</span>
                                                <span>Curvy</span>
                                                <span>Dinner Dates</span>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header> Review </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='md_review'>
                                                <Link href="/write-a-review">Write a Review</Link>
                                                <ul>
                                                    <li>
                                                        <div>
                                                            <span>
                                                                <img src='/images/star_fill.png' />
                                                                <img src='/images/star_fill.png' />
                                                                <img src='/images/star_fill.png' />
                                                                <img src='/images/star_fill.png' />
                                                                <img src='/images/star_blank.png' />
                                                            </span>
                                                            <span className='rw_date'>11 July 2022</span>
                                                        </div>
                                                        <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header> Book me now </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='md_booknow'>
                                                <Link href="tel:+97138595225">+971 38595225</Link>
                                                <Link href="#">Book Me!</Link>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default modelsdetails



