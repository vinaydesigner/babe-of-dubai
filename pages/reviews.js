import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { Container, Row, Col } from 'react-bootstrap';


const Review = ({ rqpage, remetas }) => {
  console.log(rqpage);
  return (
    <>
      {remetas.map((metaElem) => {
        return (
          <div key={metaElem}>
            <title>{metaElem.meta_title}</title>
            <meta name="keyword" content={metaElem.meta_keyword} />
            <meta name="description" content={metaElem.meta_description} />
          </div>
        )
      })};

      <div className={styles.h_textinfo}>
        <h1>Reviews</h1>
        <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />

        <Container fluid className={styles.reviewpage}>
          <Row>
            <Col xs={12} lg={12} md={12}>

              {rqpage.map((rewElem) => {

                return (
                  <>
                    <div key={rewElem} className={styles.reviewlisting}>
                      <Row>
                        <Col xs={6} sm={2} md={2}>
                          <div>
                            <img src={`https://dev.havingado.net/babesofdubai${rewElem.escort_image}`} width={120} />

                          </div>
                          <span className={styles.reviewlink}>
                            <Link href="/writeareview">Write a Review</Link>
                          </span>
                        </Col>
                        <Col xs={6} sm={4} md={4}>
                          <p><strong>Reviewer Name :</strong> {rewElem.reviewer_name}</p>
                          <p><strong>Date of Visit :</strong> {rewElem.date_of_visit}</p>
                          <p><strong>Type of Visit :</strong> {rewElem.type_of_visit}</p>
                          <p><strong>Duration :</strong> {rewElem.duration}</p>
                          <p><strong>Looks :</strong> {rewElem.looks}</p>
                          <p><strong>Performance :</strong> {rewElem.performance}</p>
                        </Col>
                        <Col xs={12} sm={6} md={6}>
                          <p>{rewElem.comment}</p>
                        </Col>
                      </Row>
                    </div>
                  </>
                )

              })}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Review


export async function getServerSideProps() {
  const response = await fetch(`https://dev.havingado.net/babesofdubai/api/v1/review-listing`)
  const data = await response.json()
  console.log(data);

  return {
    props: {
      rqpage: data.reviews,
      remetas: data.metas

    }
  }
}


