import Image from 'next/Image';
import styles from '../styles/Home.module.css';
import {Container, Row, Col, Accordion} from 'react-bootstrap';



const faqs = () => {
  return (
    <>
        <div className={styles.h_textinfo}>
            <h1>FAQ's</h1>
            <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />
            <Container fluid className='faqpage'>
                <Row>
                    <Col xs={12} lg={12} md={12}>
                        <div className='faqinner'>
                            <Accordion defaultActiveKey={['0']} >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> What information do I need to provide to book an escort? </Accordion.Header>
                                <Accordion.Body>
                                <p>When you book incall escort services, we require your name and contact number. For outcall escort services, we require your name and the full address of the location. In case you are inviting the escort to your hotel room, we need the room number.</p>
                                <p>Top 10 Babes Escort is completely compliant with the privacy laws in the UK and we take measures to protect your information. We do not sell or share your information with a third party.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> How can I pay for the escort services? </Accordion.Header>
                                <Accordion.Body>
                                <p>A majority of the escorts accept just cash. So, you can pay within the first 5 minutes of meeting the escort in any major currency. A few escorts accept bank transfers and the payment would have to reflect in their bank accounts before you proceed further.</p>
                                <p>It is advisable to check whether your chosen escort accepts bank transfers or cash payments. That way, you will know the mode to pay and will not be disappointed. No escort accepts payments through debit or credit card.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> Can I cancel my appointment if I have a change of mind? </Accordion.Header>
                                <Accordion.Body>
                                <p>We realise that you are busy and at times, you may not be able to keep to an appointment. Should this happen, you can call or send us a text message. We do not charge a cancellation fee for incall escort services.</p>
                                <p>However, for outcall services, if the escort has already left to meet you, we request you to cover a reasonable amount that the escort incurs as travel expenses. We will let you the amount when you get in touch with us to cancel your appointment.</p>
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

export default faqs