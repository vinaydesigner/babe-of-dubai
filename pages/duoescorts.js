import styles from '../styles/Home.module.css';
import Image from 'next/image';
import {Container, Row, Col} from 'react-bootstrap';
import Modelsthums from '../src/component/modelsthums';


const duoescorts = () => {
  return (
    <>
    <div className={styles.duoescortpage} >
      <h1>Duo Escorts</h1>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />  

      <Container className={styles.h_thumnanils}>
          <Row>
            <Col xs={12} lg={12} md={12}>
            <Modelsthums></Modelsthums>
            </Col>
          </Row>
        </Container>

    </div>
    </>
  )
}

export default duoescorts