import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Modelsthums from '../../src/component/modelsthums';
import Fillter from '../../src/component/Fillter';
import Head from 'next/head';
import { Modeldataapi, Modeltextdataapi } from '../../src/api/escortlistapi';
import { useState, useEffect } from 'react';



const Escorts = () => {

  const [modellistdata, setModellistData] = useState([]);
  const [modeltextdata, setModeltextData] = useState([]);

  const fetchData = async () => {
    var mdata = await Modeldataapi();
    setModellistData(mdata.escorts);
  };

  const fetchtextData = async () => {
    var mtextdata = await Modeltextdataapi();
    setModeltextData(mtextdata.page);
  };

  useEffect(() => {
    fetchData();
    fetchtextData();
  }, []);

  console.log(modeltextdata)
  console.log(modellistdata)



  return (
    <>

      {modeltextdata.map((curElemt) => {
        return (
          <>
            <div key={curElemt.id}>

              <Head>
                <title>{curElemt.meta_title}</title>
                <meta name="keyword" content={curElemt.meta_keyword} />
                <meta name="description" content={curElemt.meta_description} />
                <link rel="icon" href="favicon.ico" />
              </Head>

              <div className={styles.allescortpage} >
                <div dangerouslySetInnerHTML={{ __html: curElemt.section1 }}></div>
                <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />

                <Container fluid className={styles.h_thumnanils}>
                  <Row>
                    <Col xs={{ span: 12, order: 2 }} lg={{ span: 10, order: 1 }} md={{ span: 9, order: 1 }}>
                      <Modelsthums modeldata={modellistdata} />
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} lg={{ span: 2, order: 2 }} md={{ span: 3, order: 2 }}>
                      {/* <Fillter fillter={fillterdata}></Fillter> */}
                    </Col>
                  </Row>
                </Container>
                <div dangerouslySetInnerHTML={{ __html: curElemt.section2 }}></div>
                <div dangerouslySetInnerHTML={{ __html: curElemt.section3 }}></div>
              </div>
            </div>
          </>
        )
      })}

    </>
  )
}



export default Escorts



{/* {modeltextdata.map((item) => {
        return (
          <>
            <div key={item.id}>

              <Head>
                <title>{item.meta_title}</title>
                <meta name="keyword" content={item.meta_keyword} />
                <meta name="description" content={item.meta_description} />
                <link rel="icon" href="favicon.ico" />
              </Head>



              <div className={styles.allescortpage} >
                <div dangerouslySetInnerHTML={{ __html: item.section1 }}></div>
                <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />

                <Container fluid className={styles.h_thumnanils}>
                  <Row>
                    <Col xs={{ span: 12, order: 2 }} lg={{ span: 10, order: 1 }} md={{ span: 9, order: 1 }}>
                      <Modelsthums modeldata={modellistdata} />
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} lg={{ span: 2, order: 2 }} md={{ span: 3, order: 2 }}>
                      <Fillter></Fillter>
                    </Col>
                  </Row>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </Container>

                <div dangerouslySetInnerHTML={{ __html: item.section2 }}></div>
              </div>


            </div>
          </>
        )

      })} */}

