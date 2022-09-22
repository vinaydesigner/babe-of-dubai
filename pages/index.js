import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Modelsthums from "../src/component/modelsthums";
import Fillter from "../src/component/Fillter";
import {
  HomepageData,
  HModeldata,
  Fillterdataapi,
} from "../src/api/homepageapi";

export default function Home() {
  /* this function for home page contnet API line no 19,22 to 25 and 32,33 */
  const [homeDatanew, setHomeDatanew] = useState([]);
  const [HomepageModeldata, setHomePageModeldata] = useState([]);
  const [fillterdata, setFillterData] = useState([]);

  const fetchData = async () => {
    var data = await HomepageData();
    setHomeDatanew(data.page);
  };

  const locationData = (event) => {
    // console.log("event iss", event);
    setHomePageModeldata(event.escorts);
  };

  const serviceData = (event) => {
    // console.log("event iss", event);
    setHomePageModeldata(event.escorts);
  };

  const hairColorData = (event) => {
    // console.log("event iss", event);
    setHomePageModeldata(event.escorts);
  };

  const ratesData = (event) => {
    // console.log("event iss", event);
    setHomePageModeldata(event.escorts);
  };

  /* this function for home page modals API line no 28 to 31 and 32,35 */
  const fetchModalthumData = async () => {
    var hmthum = await HModeldata();
    setHomePageModeldata(hmthum.escorts);
  };

  /* fillter data listing API here*/
  const fetchfillterData = async () => {
    var filldata = await Fillterdataapi();
    setFillterData(filldata);
    console.log("filterrdata", filldata);
  };

  useEffect(() => {
    fetchData();
    fetchModalthumData();
    setTimeout(() => {
      fetchfillterData();
    }, 2000);
  }, []);

  console.log(fillterdata);

  /* this for buger menu */
  const [isHidden1, setIsHidden1] = useState(true);

  return (
    <>
      {homeDatanew.map((curElem) => {
        // console.log(curElem);
        return (
          <>
            <div key={curElem.id}>
              <Head>
                <title>{curElem.meta_title}</title>
                <meta name="keyword" content={curElem.meta_keyword} />
                <meta name="description" content={curElem.meta_description} />
                <link rel="icon" href="favicon.ico" />
              </Head>

              <div className={styles.h_textinfo}>
                {/* <h1>{curElem.page_name}</h1> */}
                <p>
                  {" "}
                  <span
                    dangerouslySetInnerHTML={{ __html: curElem.section1 }}
                  ></span>
                  <span className={isHidden1 ? "redemore-hide" : null}>
                    <span
                      dangerouslySetInnerHTML={{ __html: curElem.section2 }}
                    ></span>
                  </span>
                  <button
                    className="read_more"
                    onClick={() => setIsHidden1(!isHidden1)}
                  >
                    {" "}
                    {isHidden1 ? "+ Read More" : "- Read Less"}{" "}
                  </button>
                </p>

                <Image
                  src="/images/hori_golden_line.svg"
                  alt="golden line"
                  layout="responsive"
                  width={1366}
                  height={5}
                />

                <Container fluid className={styles.h_thumnanils}>
                  <Row>
                    <div className={styles.heading_shorby}>Sort by</div>
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
                  dangerouslySetInnerHTML={{ __html: curElem.section3 }}
                ></div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

// export async function getServerSideProps() {
//   const response = await fetch('https://dev.havingado.net/babesofdubai/api/v1/page-data/home')
//   const data = await response.json()

//   return {
//     props: {
//       homedata: data.page,
//     }
//   }

// }
