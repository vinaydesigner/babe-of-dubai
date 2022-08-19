import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container, Row, Col} from 'react-bootstrap';
import Reviewslist from "../src/component/Reviewslist"

const review = () => {
  return (
    <>
      <div className={styles.h_textinfo}>
        <h1>Reviews</h1>
        <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />
        
        <Container fluid className={styles.reviewpage}>
          <Row>
            <Col xs={12} lg={12} md={12}>
              <Reviewslist></Reviewslist>
            </Col>
          </Row>
        </Container>
      </div>    
    </>
  )
}

export default review