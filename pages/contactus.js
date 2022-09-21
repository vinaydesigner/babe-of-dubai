import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { contacSchemas } from '../src/schemas/contschema';
import { contactForm, ContactusText } from '../src/api/api';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';





// this function for contact us page data put in API start here //
const initialValues = {
    first_name: "",
    email: "",
    contact_no: "",
    message: "",
}
// close here //


const Contactus = () => {

    // Thank you page call of on click submit buttton //
    const router = useRouter();
    // thank you page fn close here //



    const [contacttext, setContacttext] = useState([]);
    const fechcontactData = async () => {
        var contactdata = await ContactusText();
        setContacttext(contactdata.page);
    };
    useEffect(() => {
        fechcontactData();
    }, []);



    // this function for contact us page data put in API start here some part on line no 10 //
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: contacSchemas,
        onSubmit: (values) => {
            var data = new FormData();
            data.append("first_name", values.first_name);
            data.append("email", values.email);
            data.append("contact_no", values.contact_no);
            data.append("message", values.message);
            const response = contactForm(data);
            router.push("/thankyoucontactus");
            console.log(response);

        }

    })
    console.log(values);
    // close here //


    return (
        <>
            <div className={styles.h_textinfo}>
                {contacttext.map((curElem) => {
                    // console.log(curElem);
                    return (
                        <div key={curElem.id}>
                            <Head>
                                <title>{curElem.meta_title}</title>
                                <meta name="keyword" content={curElem.meta_keyword} />
                                <meta name="description" content={curElem.meta_description} />
                                <link rel="icon" href="favicon.ico" />
                            </Head>

                            <div dangerouslySetInnerHTML={{ __html: curElem.section1 }}></div>
                        </div>
                    )
                })}

                <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />
                <Container fluid className={styles.contactuspage}>
                    <Row>

                        <Col xs={12} lg={8} md={8}>
                            <div className={styles.c_form_box}>
                                <h4>Want us to contact you</h4>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input type="text" name="first_name" placeholder='Full name' value={values.first_name} onChange={handleChange} onBlur={handleBlur} ></input>
                                        {errors.first_name && touched.first_name ? (<p className="error">{errors.first_name}</p>) : null}
                                    </div>
                                    <div>
                                        <input type="email" name="email" placeholder='Email address' value={values.email} onChange={handleChange} onBlur={handleBlur} ></input>
                                        {errors.email && touched.email ? (<p className="error">{errors.email}</p>) : null}
                                    </div>
                                    <div>
                                        <input type="text" name="contact_no" placeholder='Contact number' value={values.contact_no} onChange={handleChange} onBlur={handleBlur}></input>
                                        {errors.contact_no && touched.contact_no ? (<p className="error">{errors.contact_no}</p>) : null}
                                    </div>
                                    <div>
                                        <textarea name="message" placeholder='Message' value={values.message} onChange={handleChange} onBlur={handleBlur}></textarea>
                                    </div>
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

                {contacttext.map((curElem) => {
                    // console.log(curElem);
                    return (
                        <div key={curElem.id}>
                            <div dangerouslySetInnerHTML={{ __html: curElem.section2 }}></div>
                            <div dangerouslySetInnerHTML={{ __html: curElem.section3 }}></div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Contactus