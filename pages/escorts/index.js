import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Modelsthums from "../../src/component/modelsthums";
import Fillter from "../../src/component/Fillter";
import Head from "next/head";
import { Modeldataapi, Modeltextdataapi } from "../../src/api/escortlistapi";
import { useState, useEffect } from "react";
import { Fillterdataapi, HModeldata } from "../../src/api/homepageapi";

const Escorts = () => {
  const [HomepageModeldata, setHomePageModeldata] = useState([]);
  const [modeltextdata, setModeltextData] = useState([]);
  const [fillterdata, setFillterData] = useState([]);

  const fetchModalthumData = async () => {
    var hmthum = await HModeldata();
    setHomePageModeldata(hmthum.escorts);
  };

  const fetchtextData = async () => {
    var mtextdata = await Modeltextdataapi();
    setModeltextData(mtextdata.page);
  };

  const locationData = (event) => {
    // console.log("event iss", event);
    setHomePageModeldata(event?.escorts);
  };

  const serviceData = (event) => {
    // console.log("event iss", event);
    setHomePageModeldata(event?.escorts);
  };

  const hairColorData = (event) => {
    // console.log("event iss", event);
    setHomePageModeldata(event?.escorts);
  };

  const ratesData = (event) => {
    // console.log("event iss", event);
    setHomePageModeldata(event?.escorts);
  };

  /* fillter data listing API here*/
  const fetchfillterData = async () => {
    var filldata = await Fillterdataapi();
    setFillterData(filldata);
    console.log("filterrdata", filldata);
  };

  useEffect(() => {
    fetchModalthumData();
    fetchtextData();
    setTimeout(() => {
      fetchfillterData();
    }, 2000);
  }, []);

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

              <div className={styles.allescortpage}>
                <div
                  dangerouslySetInnerHTML={{ __html: curElemt.section1 }}
                ></div>
                <Image
                  src="/images/hori_golden_line.svg"
                  alt="line"
                  layout="responsive"
                  width={1366}
                  height={5}
                />

                <Container fluid className={styles.h_thumnanils}>
                  <Row>
                    <Col
                      xs={{ span: 12, order: 2 }}
                      lg={{ span: 10, order: 1 }}
                      md={{ span: 9, order: 1 }}
                    >
                      <Modelsthums modeldata={HomepageModeldata} />
                    </Col>
                    <Col
                      xs={{ span: 12, order: 1 }}
                      lg={{ span: 2, order: 2 }}
                      md={{ span: 3, order: 2 }}
                    >
                      <Fillter
                        hairColorData={hairColorData}
                        serviceData={serviceData}
                        ratesData={ratesData}
                        locationData={locationData}
                        fillter={fillterdata}
                      ></Fillter>
                    </Col>
                  </Row>
                </Container>
                <div
                  dangerouslySetInnerHTML={{ __html: curElemt.section2 }}
                ></div>
                <div
                  dangerouslySetInnerHTML={{ __html: curElemt.section3 }}
                ></div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Escorts;

{
  /* {modeltextdata.map((item) => {
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

      })} */
}
