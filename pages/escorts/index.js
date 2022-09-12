import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Modelsthums from '../../src/component/modelsthums';
import Fillter from '../../src/component/Fillter';
// import modelslistingapi from '../../src/api/modelslistingapi'


const escorts = ({ modeldata }) => {
  return (
    <>
      <div className={styles.allescortpage} >
        <h1>All Escorts</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />

        <Container fluid className={styles.h_thumnanils}>
          <Row>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 10, order: 1 }} md={{ span: 9, order: 1 }}>
              <Modelsthums modeldata={modeldata} />
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


export async function getServerSideProps() {
  const response = await fetch('https://dev.havingado.net/babesofdubai/api/v1/escort-listing')
  const data = await response.json()

  return {
    props: {
      modeldata: data.escorts,

    }
  }
}
