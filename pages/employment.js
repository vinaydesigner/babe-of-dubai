import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {Container, Row, Col, Form} from 'react-bootstrap';


const employment = () => {
  return (
    <>
        <div className={styles.h_textinfo}>
            <h1>Employment</h1>
            <p>If you would like to join us then youve come to the right place.</p>
            <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />
            <Container fluid className={styles.employmentpage}>
                <Row>
                    <Col xs={12} lg={12} md={12}>
                        <div className={styles.emp_form_box}>
                            <h4>Fill our recruitment form</h4>
                            <form>
                            <Row>
                            <Col xs={12} lg={6} md={6}>
                                <input type="text" placeholder='Full name'></input>
                            </Col>
                            <Col xs={12} lg={6} md={6}>    
                                <input type="email" placeholder='Email address'></input>
                            </Col>
                            <Col xs={12} lg={6} md={6}>    
                                <input type="number" placeholder='Contact number'></input>
                            </Col>
                            <Col xs={12} lg={6} md={6}>        
                                <input type="text" placeholder='Location'></input>
                            </Col>
                            <Col xs={12} lg={6} md={6}>    
                                <input type="text" placeholder='Age'></input>
                            </Col>
                            <Col xs={12} lg={6} md={6}>    
                                <input type="text" placeholder='Height'></input>
                            </Col>
                            <Col xs={12} lg={6} md={6}>    
                                <input type="text" placeholder='Statistics'></input>
                            </Col>
                            <Col xs={12} lg={6} md={6}>    
                                <input type="text" placeholder='Orientation'></input>
                            </Col>
                            <Col xs={12} lg={6} md={6}>    
                                <input type="text" placeholder='Nationality'></input>
                            </Col>
                            <Col xs={12} lg={6} md={6}>        
                                <input type="text" placeholder='Languages'></input>
                            </Col>
                            <Col xs={12} lg={6} md={6}>    
                                <input type="file" ></input>
                            </Col>
                            <Col xs={12} lg={6} md={6}>    
                                <input type="file" ></input>
                            </Col>
                            <Col xs={12} lg={6} md={6}>        
                                <input type="text" placeholder='Hourly Rate'></input>
                            </Col>
                            <Col xs={12} lg={6} md={6}>    
                                <input type="text" placeholder='Additional Hours'></input>
                            </Col>
                            <Col xs={12} lg={12} md={12}>    
                                <textarea placeholder='Experience'></textarea>
                            </Col>
                            <Col xs={12} lg={12} md={12}>    
                                <textarea placeholder='Addination info'></textarea>
                            </Col>
                            <Col xs={12} lg={12} md={12}>        
                                <input type="submit" value='Submit'></input>
                            </Col>
                            </Row>    
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>    
        </div>   
    </>
  )
}

export default employment