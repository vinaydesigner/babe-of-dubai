import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { employmentSchemas } from '../src/schemas/emplyschema';
import employmentForm from './api/empapi';



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


const employment = () => {

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
            data.append("file1", values.file1);
            data.append("file2", values.file2);
            const response = employmentForm(data)
            // console.log(response);

        }

    })
    // console.log(values);

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
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="full_name" autocomplete='off' value={values.full_name} onChange={handleChange} onBlur={handleBlur} placeholder='Full name'></input>
                                            {errors.full_name && touched.full_name ? (<p className="error">{errors.full_name}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="email" name="email" autocomplete='off' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='Email address'></input>
                                            {errors.email && touched.email ? (<p className="error">{errors.email}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="contact_no" autocomplete='off' value={values.contact_no} onChange={handleChange} onBlur={handleBlur} placeholder='Contact number'></input>
                                            {errors.contact_no && touched.contact_no ? (<p className="error">{errors.contact_no}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="location" autocomplete='off' value={values.location} onChange={handleChange} onBlur={handleBlur} placeholder='Location'></input>
                                            {errors.location && touched.location ? (<p className="error">{errors.location}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="age" autocomplete='off' value={values.age} onChange={handleChange} onBlur={handleBlur} placeholder='Age'></input>
                                            {errors.age && touched.age ? (<p className="error">{errors.age}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="height" autocomplete='off' value={values.height} onChange={handleChange} onBlur={handleBlur} placeholder='Height'></input>
                                            {errors.height && touched.height ? (<p className="error">{errors.height}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="statistics" autocomplete='off' value={values.statistics} onChange={handleChange} onBlur={handleBlur} placeholder='Statistics'></input>
                                            {errors.statistics && touched.statistics ? (<p className="error">{errors.statistics}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="orientation" autocomplete='off' value={values.orientation} onChange={handleChange} onBlur={handleBlur} placeholder='Orientation'></input>
                                            {errors.orientation && touched.orientation ? (<p className="error">{errors.orientation}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="nationality" autocomplete='off' value={values.nationality} onChange={handleChange} onBlur={handleBlur} placeholder='Nationality'></input>
                                            {errors.nationality && touched.nationality ? (<p className="error">{errors.nationality}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="languages" autocomplete='off' value={values.languages} onChange={handleChange} onBlur={handleBlur} placeholder='Languages'></input>
                                            {errors.languages && touched.languages ? (<p className="error">{errors.languages}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="file" name="file1" autocomplete='off' value={values.file1} onChange={handleChange} onBlur={handleBlur}  ></input>
                                            {errors.file1 && touched.file1 ? (<p className="error">{errors.file1}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="file" name="file2" autocomplete='off' value={values.file2} onChange={handleChange} onBlur={handleBlur}  ></input>
                                            {errors.file2 && touched.file2 ? (<p className="error">{errors.file2}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="hourly_rate" autocomplete='off' value={values.hourly_rate} onChange={handleChange} onBlur={handleBlur} placeholder='Hourly Rate'></input>
                                            {errors.hourly_rate && touched.hourly_rate ? (<p className="error">{errors.hourly_rate}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={6} md={6}>
                                            <input type="text" name="additional_hours" autocomplete='off' value={values.additional_hours} onChange={handleChange} onBlur={handleBlur} placeholder='Additional Hours'></input>
                                            {errors.additional_hours && touched.additional_hours ? (<p className="error">{errors.additional_hours}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={12} md={12}>
                                            <textarea type="text" name="experience" autocomplete='off' value={values.experience} onChange={handleChange} onBlur={handleBlur} placeholder='Experience'></textarea>
                                            {errors.experience && touched.experience ? (<p className="error">{errors.experience}</p>) : null}
                                        </Col>
                                        <Col xs={12} lg={12} md={12}>
                                            <textarea type="text" name="addination_info" autocomplete='off' value={values.addination_info} onChange={handleChange} onBlur={handleBlur} placeholder='Additional info'></textarea>
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