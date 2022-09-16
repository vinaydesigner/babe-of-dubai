import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Reviewtextapi, Reviewmodellistapi } from '../src/api/wreviewapi';
import { useEffect, useState } from 'react';



const Review = () => {
  // console.log(rqpage);


  const [reviewlistingdata, setReviewlistingdata] = useState([]);
  const [reviewtext, setReviewtext] = useState([]);

  const fetchreviewmodelData = async () => {
    var reviewmodeldata = await Reviewmodellistapi();
    setReviewlistingdata(reviewmodeldata.reviews);
  };

  const fetchreviewtextData = async () => {
    var reviewtextdata = await Reviewtextapi();
    setReviewtext(reviewtextdata.page);
  };

  useEffect(() => {
    fetchreviewtextData();
    fetchreviewmodelData();
  }, []);
  console.log(reviewlistingdata)
  console.log(reviewtext)




  return (
    <>
      {reviewtext.map((curElemt) => {
        return (
          <div key={curElemt.id}>
            <title>{curElemt.meta_title}</title>
            <meta name="keyword" content={curElemt.meta_keyword} />
            <meta name="description" content={curElemt.meta_description} />
          </div>
        )
      })};

      <div className={styles.h_textinfo}>
        {reviewtext.map((curElemt) => {
          return (
            <div key={curElemt.id}>
              <div dangerouslySetInnerHTML={{ __html: curElemt.section1 }}></div>
            </div>
          )
        })}

        <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />

        <Container fluid className={styles.reviewpage}>
          <Row>
            <Col xs={12} lg={12} md={12}>

              {reviewlistingdata.map((rewElem) => {
                return (
                  <>
                    <div key={rewElem.id} className={styles.reviewlisting}>
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

        {reviewtext.map((curElemt) => {
          return (
            <div key={curElemt.id}>
              <div dangerouslySetInnerHTML={{ __html: curElemt.section2 }}></div>
              <div dangerouslySetInnerHTML={{ __html: curElemt.section3 }}></div>
            </div>
          )
        })}




      </div>
    </>
  )
}

export default Review


// export async function getServerSideProps() {
//   const response = await fetch(`https://dev.havingado.net/babesofdubai/api/v1/review-listing`)
//   const data = await response.json()
//   console.log(data);

//   return {
//     props: {
//       rqpage: data.reviews,
//       remetas: data.metas

//     }
//   }
// }


