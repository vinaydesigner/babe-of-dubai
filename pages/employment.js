import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { employmentSchemas } from '../src/schemas/emplyschema';
import { employmentForm, EmploymentText } from '../src/api/empapi';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';




const initialValues = {
    full_name: "",
    email: "",
    contact_no: "",
    location: "",
    age: "",
    height: "",
    statistics: "",
    orientation: "",
    nationality: "",
    languages: "",
    hourly_rate: "",
    additional_hours: "",
    experience: "",
    addination_info: "",
    file1: "",
    file2: "",
}


const Employment = () => {

    // Thank you page call of on click submit buttton //
    const router = useRouter();
    // thank you page fn close here //

    const [employtext, setEmploytext] = useState([]);
    const fechemployData = async () => {
        var employdata = await EmploymentText();
        setEmploytext(employdata.page);
    };
    useEffect(() => {
        fechemployData();
    }, []);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: employmentSchemas,
        onSubmit: (values) => {
            var data = new FormData();
            data.append("full_name", values.full_name);
            data.append("email", values.email);
            data.append("contact_no", values.contact_no);
            data.append("location", values.location);
            data.append("age", values.age);
            data.append("height", values.height);
            data.append("statistics", values.statistics);
            data.append("orientation", values.orientation);
            data.append("nationality", values.nationality);
            data.append("languages", values.languages);
            data.append("hourly_rate", values.hourly_rate);
            data.append("additional_hours", values.additional_hours);
            data.append("experience", values.experience);
            data.append("addination_info", values.addination_info);
            data.append('file1', document.querySelector('#file1').files[0]);
            data.append("file2", document.querySelector('#file2').files[0]);
            const response = employmentForm(data);
            router.push("/thankyouemployment");
            console.log(response);

        }

    })
    console.log(values);

    return (
        <>
            <div className={styles.h_textinfo}>
                {employtext.map((curElem) => {
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
                <Container fluid className={styles.employmentpage}>
                    <Row>
                        <Col xs={12} lg={12} md={12}>
                            <div className={styles.emp_form_box}>
                                <h4>Fill our recruitment form</h4>
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="full_name" value={values.full_name} onChange={handleChange} onBlur={handleBlur} placeholder='Full name'></input>
                                            {errors.full_name && touched.full_name ? (<p className="error">{errors.full_name}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='Email address'></input>
                                            {errors.email && touched.email ? (<p className="error">{errors.email}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="contact_no" value={values.contact_no} onChange={handleChange} onBlur={handleBlur} placeholder='Contact number'></input>
                                            {errors.contact_no && touched.contact_no ? (<p className="error">{errors.contact_no}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="location" value={values.location} onChange={handleChange} onBlur={handleBlur} placeholder='Location'></input>
                                            {errors.location && touched.location ? (<p className="error">{errors.location}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="age" value={values.age} onChange={handleChange} onBlur={handleBlur} placeholder='Age'></input>
                                            {errors.age && touched.age ? (<p className="error">{errors.age}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="height" value={values.height} onChange={handleChange} onBlur={handleBlur} placeholder='Height'></input>
                                            {errors.height && touched.height ? (<p className="error">{errors.height}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="statistics" value={values.statistics} onChange={handleChange} onBlur={handleBlur} placeholder='Statistics'></input>
                                            {errors.statistics && touched.statistics ? (<p className="error">{errors.statistics}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="orientation" value={values.orientation} onChange={handleChange} onBlur={handleBlur} placeholder='Orientation'></input>
                                            {errors.orientation && touched.orientation ? (<p className="error">{errors.orientation}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="nationality" value={values.nationality} onChange={handleChange} onBlur={handleBlur} placeholder='Nationality'></input>
                                            {errors.nationality && touched.nationality ? (<p className="error">{errors.nationality}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="languages" value={values.languages} onChange={handleChange} onBlur={handleBlur} placeholder='Languages'></input>
                                            {errors.languages && touched.languages ? (<p className="error">{errors.languages}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="file" id="file1" name="file1" value={values.file1} onChange={handleChange} onBlur={handleBlur}  ></input>
                                            {errors.file1 && touched.file1 ? (<p className="error">{errors.file1}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="file" id="file2" name="file2" value={values.file2} onChange={handleChange} onBlur={handleBlur}  ></input>
                                            {errors.file2 && touched.file2 ? (<p className="error">{errors.file2}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="hourly_rate" value={values.hourly_rate} onChange={handleChange} onBlur={handleBlur} placeholder='Hourly Rate'></input>
                                            {errors.hourly_rate && touched.hourly_rate ? (<p className="error">{errors.hourly_rate}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="additional_hours" value={values.additional_hours} onChange={handleChange} onBlur={handleBlur} placeholder='Additional Hours'></input>
                                            {errors.additional_hours && touched.additional_hours ? (<p className="error">{errors.additional_hours}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={12} md={12}>
                                            <textarea type="text" name="experience" value={values.experience} onChange={handleChange} onBlur={handleBlur} placeholder='Experience'></textarea>
                                            {errors.experience && touched.experience ? (<p className="error">{errors.experience}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={12} md={12}>
                                            <textarea type="text" name="addination_info" value={values.addination_info} onChange={handleChange} onBlur={handleBlur} placeholder='Additional info'></textarea>
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
                {employtext.map((curElem) => {
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

export default Employment