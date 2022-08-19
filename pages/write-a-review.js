import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {Container, Row, Col, Form} from 'react-bootstrap';


const write_a_review = () => {
  return (
    <>
      <div className={styles.h_textinfo}>
            <h1>Write A Review</h1>
            <p>To meet hot blonde, brunette, busty and curvy companions as early as tonight from AED150/hour, check out our full selection of London escorts.</p>
            <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />
            <Container fluid className={styles.bookingpage}>
                <Row>
                <Col xs={12} lg={3} md={5}>
                      <div className={styles.write_review_box}>
                          <form>
                            <select>
                              <option>Choose your escort</option>
                              <option>Model 2</option>
                              <option>Model 3</option>
                              <option>Model 4</option>
                              <option>Model 5</option>
                            </select>
                          </form>
                          <div>
                            <Image src="/images/models_thumbnails/pic1.jpg" alt="Model name" width={540} height={760}></Image>
                          </div>
                      </div>
                  </Col>
                  <Col xs={12} lg={9} md={7}>
                      <div className={styles.c_form_box}>
                          <form>
                              <Row>
                                <Col xs={12} lg={6} md={6}>
                                  <input type="text" placeholder='Full name'></input>
                                </Col>
                                <Col xs={12} lg={6} md={6}>
                                  <input type="email" placeholder='Email address'></input>
                                </Col>
                              </Row>
                              <Row>
                                <Col xs={12} lg={6} md={6}> 
                                  <input type="text" placeholder='Contact number'></input>
                                </Col>
                                <Col xs={12} lg={6} md={6}>
                                  <input type="date" placeholder='Booking date'></input>
                                </Col>
                              </Row>
                              <Row>
                                <Col xs={12} lg={6} md={6}> 
                                  <select>
                                    <option>Type of Appointment</option>
                                    <option>Incall</option>
                                    <option>Outcall</option>
                                    <option>Overnight</option>
                                    <option>Dinner Date</option>
                                  </select>
                                </Col>
                                <Col xs={12} lg={6} md={6}>
                                  <select>
                                      <option>Select Duration </option>
                                      <option>1 Hrs</option>
                                      <option>2 Hrs</option>
                                      <option>3 Hrs</option>
                                      <option>4 Hrs</option>
                                      <option>5 Hrs</option>
                                      <option>6 Hrs</option>
                                      <option>7 Hrs</option>
                                      <option>8 Hrs</option>
                                      <option>9 Hrs</option>
                                      <option>10 Hrs</option>
                                      <option>11 Hrs</option>
                                      <option>12 Hrs</option>
                                    </select>
                                </Col>
                              </Row> 
                              <Row>
                                <Col xs={12} lg={6} md={6}> 
                                  <select>
                                    <option>Choose Looks</option>
                                    <option>10 Out of 10</option>
                                    <option>9 Out of 10</option>
                                    <option>8 Out of 10</option>
                                    <option>7 Out of 10</option>
                                    <option>6 Out of 10</option>
                                    <option>5 Out of 10</option>
                                    <option>4 Out of 10</option>
                                    <option>3 Out of 10</option>
                                    <option>2 Out of 10</option>
                                    <option>1 Out of 10</option>
                                  </select>
                                </Col>
                                <Col xs={12} lg={6} md={6}>
                                <select>
                                    <option>Choose Performance</option>
                                    <option>10 Out of 10</option>
                                    <option>9 Out of 10</option>
                                    <option>8 Out of 10</option>
                                    <option>7 Out of 10</option>
                                    <option>6 Out of 10</option>
                                    <option>5 Out of 10</option>
                                    <option>4 Out of 10</option>
                                    <option>3 Out of 10</option>
                                    <option>2 Out of 10</option>
                                    <option>1 Out of 10</option>
                                  </select>
                                </Col>
                              </Row> 
                              <Row>
                                <Col xs={12} lg={12} md={12}>  
                                <textarea placeholder='Message'></textarea>
                                </Col>
                              </Row>
                              <input type="submit" value='Submit your Review!'></input>
                              
                          </form>
                      </div>
                  </Col>
                </Row>
            </Container>    
        </div>  
    </>
  )
}

export default write_a_review