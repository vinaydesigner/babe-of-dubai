import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import Modelsthums from '../src/component/modelsthums';
import { Duoescortapi, Duoescorttextapi } from '../src/api/duoescortsapi';
import { useState, useEffect } from 'react';


const Duoescorts = () => {

  const [duoescort, setDuoescort] = useState([]);
  const [duoescorttext, setDuoescorttext] = useState([]);

  const fetchduoData = async () => {
    var duodata = await Duoescortapi();
    setDuoescort(duodata.duo_escorts);
  };

  const fetchduotextData = async () => {
    var duotextdata = await Duoescorttextapi();
    setDuoescorttext(duotextdata.page);
  };

  useEffect(() => {
    fetchduoData();
    fetchduotextData();
  }, []);

  console.log(duoescort)
  console.log(duoescorttext)



  return (
    <>

      {duoescorttext.map((curElemt) => {
        return (
          <>
            <div key={curElemt.id}>

              <div className={styles.duoescortpage} >

                <div dangerouslySetInnerHTML={{ __html: curElemt.section1 }}></div>
                <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />

                <Container className={styles.h_thumnanils}>
                  <Row>
                    <Col xs={12} lg={12} md={12}>
                      {duoescort.map((curElemt) => {
                        return (
                          <div key={curElemt.id}>

                            <div className={styles.duoprofilebox}>
                              <h3>{curElemt.escort_name_f} + {curElemt.escort_name_s}</h3>
                              <div key={curElemt} className={styles.thumouterbox} >
                                <Link href={`/escorts/${curElemt.slug_f}`}>
                                  <a>
                                    <div className={styles.picbox}>
                                      <img
                                        src={`https://dev.havingado.net/babesofdubai${curElemt.thumbnail_f}`}

                                        alt={curElemt.escort_name_f}
                                        layout="responsive"
                                      />
                                    </div>
                                  </a>
                                </Link>
                                <div className={styles.modelsname}>
                                  {curElemt.escort_name_f}
                                  <span>
                                    <Image
                                      src="/images/selfie.svg"
                                      width={20}
                                      height={20}
                                    />
                                  </span>
                                  <span>
                                    <Image
                                      src="/images/video.svg"
                                      width={20}
                                      height={20}
                                    />
                                  </span>
                                </div>
                                <div className={styles.modelslocation}>
                                  <span>{curElemt.location_f}</span>
                                  <span>AED <strong> {curElemt.oneHrInCallRate_f} </strong> <strong> {curElemt.oneHrOutCallRate_f} </strong> </span >
                                </div>

                              </div>

                              <div key={curElemt} className={styles.thumouterbox} >

                                <Link href={`/escorts/${curElemt.slug_s}`}>
                                  <a>
                                    <div className={styles.picbox}>
                                      <img
                                        src={`https://dev.havingado.net/babesofdubai${curElemt.thumbnail_s}`}

                                        alt={curElemt.escort_name_s}
                                        layout="responsive"
                                      />
                                    </div>
                                  </a>
                                </Link>
                                <div className={styles.modelsname}>
                                  {curElemt.escort_name_s}
                                  <span>
                                    <Image
                                      src="/images/selfie.svg"
                                      width={20}
                                      height={20}
                                    />
                                  </span>
                                  <span>
                                    <Image
                                      src="/images/video.svg"
                                      width={20}
                                      height={20}
                                    />
                                  </span>
                                </div>
                                <div className={styles.modelslocation}>
                                  <span>{curElemt.location_s}</span>
                                  <span>AED <strong> {curElemt.oneHrInCallRate_f} </strong> <strong> {curElemt.oneHrOutCallRate_f} </strong> </span >
                                </div>

                              </div>

                            </div>


                          </div>
                        )

                      })}



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

export default Duoescorts



// export async function getServerSideProps() {
//   const response = await fetch('https://dev.havingado.net/babesofdubai/api/v1/duo-escort')
//   const data = await response.json()

//   return {
//     props: {
//       duomodeldata: data.duo_escorts,

//     }
//   }
// }
