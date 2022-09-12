import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import Modelsthums from '../src/component/modelsthums';


const duoescorts = ({ duomodeldata }) => {

  // console.log(fmetas);

  return (
    <>

      <div className={styles.duoescortpage} >
        <h1>Duo Escorts</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />

        <Container className={styles.h_thumnanils}>
          <Row>
            <Col xs={12} lg={12} md={12}>
              {/* <Modelsthums /> */}
              {duomodeldata.map((curElemt) => {
                return (
                  <>

                    <div className={styles.duoprofilebox}>
                      <h3>{curElemt.escort_name_f} + {curElemt.escort_name_s}</h3>
                      <div key={curElemt} className={styles.thumouterbox} >
                        <Link href={`/escorts/${curElemt.slug_f}`}>
                          <a>
                            <div className={styles.picbox}>
                              <img
                                src={`https://dev.havingado.net/babesofdubai${curElemt.thumbnail_f}`}
                                width={270}
                                height={400}
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
                          <span>AUD <strong> {curElemt.halfHrInCallRate_f} </strong> <strong> {curElemt.halfHrOutCallRate_f} </strong> </span >
                        </div>

                      </div>

                      <div key={curElemt} className={styles.thumouterbox} >

                        <Link href={`/escorts/${curElemt.slug_s}`}>
                          <a>
                            <div className={styles.picbox}>
                              <img
                                src={`https://dev.havingado.net/babesofdubai${curElemt.thumbnail_s}`}
                                width={270}
                                height={400}
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
                          <span>AUD <strong> {curElemt.halfHrInCallRate_s} </strong> <strong> {curElemt.halfHrOutCallRate_s} </strong> </span >
                        </div>

                      </div>

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

export default duoescorts



export async function getServerSideProps() {
  const response = await fetch('https://dev.havingado.net/babesofdubai/api/v1/duo-escort')
  const data = await response.json()

  return {
    props: {
      duomodeldata: data.duo_escorts,

    }
  }
}
