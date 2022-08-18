import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {Container, Row, Col, Form} from 'react-bootstrap';


const contactus = () => {
    
  return (
    <>
        <div className={styles.h_textinfo}>
            <h1>Contact Us</h1>
            <p>To meet hot blonde&apos; brunette&apos; busty and curvy companions as early as tonight from AED150/hour&apos; check out our full selection of London escorts.</p>
            <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />
            <Container fluid className={styles.contactuspage}>
                <Row>
                    
                        <Col xs={12} lg={8} md={8}>
                            <div className={styles.c_form_box}>
                                <h4>Want us to contact you</h4>
                                <form>
                                    <input type="text" placeholder='Full name' ></input> 
                                    <input type="email" placeholder='Email address' ></input> 
                                    <input type="password" placeholder='Password' ></input>
                                    <textarea placeholder='Message'></textarea>
                                    <input type="submit" value='Submit'></input>
                                </form>
                            </div>
                        </Col>
                        <Col xs={12} lg={4} md={4}>
                            <div className={styles.c_info_box}>
                                <h4>Quick contact info</h4>
                                <div className={styles.c_call}><a href='tel:+447831475881'>(+44) 07831 475881</a></div>
                                <div className={styles.c_mail}><a href='mailto:babesofdubai.info@gmail.com'>babesofdubai.info@gmail.com </a></div>
                            </div>
                        </Col>
                    
                </Row>
            </Container>    
        </div>    
    </>
  )
}

export default contactus