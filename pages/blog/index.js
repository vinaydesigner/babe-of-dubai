import Image from 'next/image';
import {Container, Row, Col, Form} from 'react-bootstrap';
import styles from '../../styles/Home.module.css';

const index = () => {
  return (
    <>  
    <div className={styles.h_textinfo}>
    <h1>Blog page</h1>
    <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />
    
    <Container fluid className={styles.aboutuspage}>
      <Row>
      </Row>
    </Container>    
        <p>Blog page listing comming soon</p>
    </div>
    </>
  )
}

export default index