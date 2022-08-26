
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import Fillter from '../../src/component/Fillter';
import Modelsthums from '../../src/component/modelsthums';

const escorts = () => {
  return (
    <>
    <div className={styles.allescortpage} >
      <h1>All Escorts</h1>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />

      <Container fluid className={styles.h_thumnanils}>
          <Row>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 10, order: 1}} md={{ span: 9, order: 1 }}>
              <Modelsthums></Modelsthums>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 2, order: 2 }} md={{ span: 3, order: 2 }}>
              <Fillter></Fillter>
            </Col>
          </Row>
        </Container>
    </div>
    </>
  )
}

export default escorts