import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {Container, Row, Col, Form} from 'react-bootstrap';
import { useState } from 'react';

const contactus = () => {
    const [username, setUsername]=useState("");
    const [email, setEmail]=useState("");
    const [pass, setPass]=useState("");
    const [nameErr, setNameErr]=useState("");
    const [emailErr, setEmailErr]=useState("");
    const [passErr, setPassErr]=useState("");

    function contactHandle(e)
    {
        e.preventDefault()
    }

    function usernameHandle(e)
    {
        let item=e.target.value;
        if(item.length<3)
        {
            setNameErr(true)
        }
        else
        {
            setNameErr(false)
        }
    } 

    function emailHandle(e)
    {
        let item=e.target.value;
        if(item.length<5)
        {
            setEmailErr(true)
        }
        else
        {
            setEmailErr(false)
        }
    }


    function passHandle(e)
    {
        let item=e.target.value;
        if(item.length<10)
        {
            setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
    }
    

  return (
    <>
        <div className={styles.h_textinfo}>
            <h1>Contact Us</h1>
            <p>To meet hot blonde, brunette, busty and curvy companions as early as tonight from AED150/hour, check out our full selection of London escorts.</p>
            <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />
            <Container fluid className={styles.contactuspage}>
                <Row>
                    
                        <Col xs={12} lg={8} md={8}>
                            <div className={styles.c_form_box}>
                                <h4>Want us to contact you</h4>
                                <form onSubmit={contactHandle}>
                                    <input type="text" placeholder='Full name' onChange={usernameHandle}></input> {nameErr?<span>Number should be at least 3 digits long.</span>:""}
                                    <input type="email" placeholder='Email address' onChange={emailHandle}></input> {emailErr?<span>Should be used "@ and .com".</span>:""}
                                    <input type="password" placeholder='Password' onChange={passHandle}></input> {passErr?<span>Password minimum 10 digits.</span>:""}
                                    <textarea placeholder='Message'></textarea>
                                    <input type="submit" value='Submit'></input>
                                </form>
                            </div>
                        </Col>
                        <Col xs={12} lg={4} md={4}>
                            <div className={styles.c_info_box}>
                                <h4>Quick contact info</h4>
                                <div className={styles.c_call}><a href='tel:+447831475881'>(+44) 07831 475881</a></div>
                                <div className={styles.c_mail}><a href='mailto:babesofdubai.info@gmail.com'>babesofdubai.info@gmail.com </a></div>
                            </div>
                        </Col>
                    
                </Row>
            </Container>    
        </div>    
    </>
  )
}

export default contactus