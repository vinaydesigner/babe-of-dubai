import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {Container, Row, Col, Form} from 'react-bootstrap';


const booking = () => {
  return (
    <>
      <div className={styles.h_textinfo}>
            <h1>Bookings</h1>
            <p>To meet hot blonde, brunette, busty and curvy companions as early as tonight from AED150/hour, check out our full selection of London escorts.</p>
            <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />
            <Container fluid className={styles.bookingpage}>
                <Row>
                <Col xs={12} lg={5} md={5}>
                      <div className={styles.booking_mobels_box}>
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
                  <Col xs={12} lg={7} md={7}>
                      <div className={styles.c_form_box}>
                          <form>
                              <h4>Personal Details</h4>
                              <input type="text" placeholder='Full name'></input>
                              <input type="email" placeholder='Email address'></input> 
                              <input type="text" placeholder='Contact number'></input> 

                              <h4>Personal Details</h4>
                              <input type="date" placeholder='Booking date'></input>
                              <input type="time" placeholder='Booking time'></input> 
                              <input type="text" placeholder='Booking duration'></input> 
                              <textarea placeholder='Message'></textarea>
                              <input type="submit" value='Book Now!'></input>
                          </form>
                      </div>
                  </Col>
                </Row>
            </Container>    
        </div>  
    </>
  )
}

export default booking