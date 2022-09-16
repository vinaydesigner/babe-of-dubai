import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';

const links = ({ linksdata }) => {
  return (
    <>

      {linksdata.map((curElem) => {
        console.log(curElem);
        return (
          <div key={curElem.id}>
            <Head>
              <title>{curElem.meta_title}</title>
              <meta name="keyword" content={curElem.meta_keyword} />
              <meta name="description" content={curElem.meta_description} />
            </Head>

            <div className={styles.h_textinfo}>
              <div dangerouslySetInnerHTML={{ __html: curElem.section1 }}></div>
              <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />

              <Container fluid className={styles.linkspage}>
                <Row>
                  <Col xs={12} lg={12} md={12}>
                    {/* <div dangerouslySetInnerHTML={{ __html: curElem.section2 }}></div> */}
                    <div className={styles.linkcodearea}>
                      <textarea>{curElem.section2}</textarea>
                    </div>
                    <br />
                  </Col>
                </Row>
                <div dangerouslySetInnerHTML={{ __html: curElem.section3 }}></div>
              </Container>
            </div>

          </div>
        )

      })}

    </>
  )
}

export default links


export async function getServerSideProps() {
  const response = await fetch('https://dev.havingado.net/babesofdubai/api/v1/page-data/Links')
  const data = await response.json()

  return {
    props: {
      linksdata: data.page,
    }
  }
}



{/* <ul>
<li>Copy the Banner code given below and upload it on your site</li>
<li>Send us your website details and the URL of the page where our banner is displayed</li>
<li>Once we check the page we will place your banner on our site Webmaster Email: babesofdubai.info@gmail.com </li>
</ul> */}