import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import Head from 'next/head';




const faq = ({ faqpage, fmetas }) => {

    // console.log(fmetas);

    return (
        <>
            <div className={styles.h_textinfo}>

                {fmetas.map((curElem) => {
                    return (
                        <div key={curElem}>
                            <Head>
                                <title>{curElem.meta_title}</title>
                                <meta name="keyword" content={curElem.meta_keyword} />
                                <meta name="description" content={curElem.meta_description} />
                            </Head>

                            <div dangerouslySetInnerHTML={{ __html: curElem.section1 }}></div>
                        </div>
                    )
                })}


                <Image src="/images/hori_golden_line.svg" alt="hline" layout='responsive' width={1366} height={5} />
                <div>
                    <Container fluid className='faqpage'>
                        <Row>
                            <Col xs={12} lg={12} md={12}>
                                {faqpage.map((curElem) => {
                                    return (
                                        <>
                                            <div key={curElem}>
                                                <div className='faqinner'>
                                                    <Accordion defaultActiveKey={[]} >
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header> {curElem.question} </Accordion.Header>
                                                            <Accordion.Body>
                                                                {curElem.answer}
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>

                                            </div>
                                        </>
                                    )
                                })}

                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default faq;


export async function getServerSideProps() {
    const response = await fetch('https://dev.havingado.net/babesofdubai/api/v1/faq-listing')
    const data = await response.json()

    return {
        props: {
            faqpage: data.faqs,
            fmetas: data.metas

        }
    }
}




