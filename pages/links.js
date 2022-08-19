import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container, Row, Col} from 'react-bootstrap';

const links = () => {
  return (
    <>
        <div className={styles.h_textinfo}>
        <h1>Links</h1>
        <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />
        
        <Container fluid className={styles.linkspage}>
          <Row>
            <Col xs={12} lg={12} md={12}>
               <p>Follow the given instructions below to get link exchange with us:</p>
               <ul>
                    <li>Copy the Banner code given below and upload it on your site</li>
                    <li>Send us your website details and the URL of the page where our banner is displayed</li>
                    <li>Once we check the page we will place your banner on our site Webmaster Email: babesofdubai.info@gmail.com </li>
               </ul>
               <Image src="/images/linkpic1.jpg" width={468} height={60}></Image>
               <div  className={styles.linkcodearea}>
                <textarea>Code place here</textarea> 
               </div>           
            </Col>
          </Row>
        </Container>
        </div>    
    </>
  )
}

export default links