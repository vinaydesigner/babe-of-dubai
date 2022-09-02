import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { Container, Row, Col } from 'react-bootstrap';


const review = ({ rqpage, remetas }) => {
  console.log(rqpage);
  return (
    <>
      {remetas.map((curElem) => {
        return (
          <div key={curElem}>
            <title>{curElem.meta_title}</title>
            <meta name="keyword" content={curElem.meta_keyword} />
            <meta name="description" content={curElem.meta_description} />
          </div>
        )
      })};

      <div className={styles.h_textinfo}>
        <h1>Reviews</h1>
        <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />

        <Container fluid className={styles.reviewpage}>
          <Row>
            <Col xs={12} lg={12} md={12}>

              {rqpage.map((curElem) => {

                return (
                  <>
                    <div key={curElem} className={styles.reviewlisting}>
                      <Row>
                        <Col xs={6} sm={2} md={2}>
                          <div>
                            <img src={`https://dev.havingado.net/babesofdubai${curElem.escort_image}`} />

                          </div>
                          <span className={styles.reviewlink}>
                            <Link href="/write-a-review">Write a Review</Link>
                          </span>
                        </Col>
                        <Col xs={6} sm={4} md={4}>
                          <p><strong>Reviewer Name :</strong> {curElem.reviewer_name}</p>
                          <p><strong>Date of Visit :</strong> {curElem.date_of_visit}</p>
                          <p><strong>Type of Visit :</strong> {curElem.type_of_visit}</p>
                          <p><strong>Duration :</strong> {curElem.duration}</p>
                          <p><strong>Looks :</strong> {curElem.looks}</p>
                          <p><strong>Performance :</strong> {curElem.performance}</p>
                        </Col>
                        <Col xs={12} sm={6} md={6}>
                          <p>{curElem.comment}</p>
                        </Col>
                      </Row>
                    </div>
                  </>
                )

              })};
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default review


export async function getServerSideProps() {
  const response = await fetch('https://dev.havingado.net/babesofdubai/api/v1/review-listing')
  const data = await response.json()

  return {
    props: {
      rqpage: data.reviews,
      remetas: data.metas

    }
  }
}