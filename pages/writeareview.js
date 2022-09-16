import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { wreviewschema } from "../src/schemas/wreviewschema";
import { wreviewapi } from "../src/api/wreviewapi";
import { BookingSelect } from "../src/api/bookingapi";
import { useEffect, useState } from "react";

const initialValues = {
  escort_id: "",
  reviewer_name: "",
  email: "",
  contact_no: "",
  date_of_visit: "",
  type_of_visit: "",
  duration: "",
  looks: "",
  performance: "",
  comment: "",
  status: "1",
};

const Writeareview = () => {
  const [selectDetail, setSelectDetails] = useState([]);
  const [attributeList, setAttributeList] = useState({});
  const [id, setId] = useState();

  const fetchData = async () => {
    var data = await BookingSelect();
    setSelectDetails(data.escorts);
    setAttributeList(data.escorts[0].thumbnail);
    setId(data.escorts[0].id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // for review modal images select option
  // const reviewimage = reviewimageapi();
  // console.log(reviewimage)

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: wreviewschema,
      onSubmit: (values) => {
        var data = new FormData();
        data.append("escort_id", id);
        data.append("reviewer_name", values.reviewer_name);
        data.append("email", values.email);
        data.append("contact_no", values.contact_no);
        data.append("date_of_visit", values.date_of_visit);
        data.append("type_of_visit", values.type_of_visit);
        data.append("duration", values.duration);
        data.append("looks", values.looks);
        data.append("performance", values.performance);
        data.append("comment", values.comment);
        data.append("status", values.status);
        const response = wreviewapi(data);
        console.log(response);
      },
    });
  console.log(values);

  const handleAttributeChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    const data = JSON.parse(value);
    console.log(data.thumbnail);
    setId(data.id);
    setAttributeList(data.thumbnail);
  };

  return (
    <>
      <div className={styles.h_textinfo}>
        <h1>Write A Review</h1>
        {/* <p>
          To meet hot blonde, brunette, busty and curvy companions as early as
          tonight from AED150/hour, check out our full selection of London
          escorts.
        </p> */}
        <Image
          src="/images/hori_golden_line.svg"
          alt="line"
          layout="responsive"
          width={1366}
          height={5}
        />
        <Container fluid className={styles.bookingpage}>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col xs={12} lg={3} md={5}>
                <div className={styles.write_review_box}>
                  <select
                    name="escort_id"
                    // value={selectDetail}
                    onChange={(e) => handleAttributeChange(e)}
                    onBlur={handleBlur}
                  >
                    <option value="1" disabled>
                      Choose your escort
                    </option>
                    {selectDetail.map((item) => {
                      return (
                        <option key={item.id} value={JSON.stringify(item)}>
                          {item.escort_name}
                        </option>
                      );
                    })}
                  </select>
                  <div>
                    <img
                      src={`https://dev.havingado.net/babesofdubai${attributeList}`}
                      alt="Model name"
                      width={225}
                    />
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={9} md={7}>
                <div className={styles.c_form_box}>
                  <Row>
                    <Col xs={12} lg={6} md={6}>
                      <input
                        type="text"
                        name="reviewer_name"
                        value={values.reviewer_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="off"
                        placeholder="Full name"
                      ></input>
                      {errors.reviewer_name && touched.reviewer_name ? (
                        <p className="error">{errors.reviewer_name}</p>
                      ) : null}
                    </Col>
                    <Col xs={12} lg={6} md={6}>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="off"
                        placeholder="Email address"
                      ></input>
                      {errors.email && touched.email ? (
                        <p className="error">{errors.email}</p>
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} lg={6} md={6}>
                      <input
                        type="text"
                        name="contact_no"
                        value={values.contact_no}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="off"
                        placeholder="Contact number"
                      ></input>
                      {errors.contact_no && touched.contact_no ? (
                        <p className="error">{errors.contact_no}</p>
                      ) : null}
                    </Col>
                    <Col xs={12} lg={6} md={6}>
                      <input
                        type="date"
                        name="date_of_visit"
                        value={values.date_of_visit}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="off"
                        className="dateicon"
                        placeholder="YYYY-MM-DD"
                      ></input>
                      {errors.date_of_visit && touched.date_of_visit ? (
                        <p className="error">{errors.date_of_visit}</p>
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} lg={6} md={6}>
                      <select
                        name="type_of_visit"
                        value={values.type_of_visit}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option>Type of Appointment</option>
                        <option>Incall</option>
                        <option>Outcall</option>
                        <option>Overnight</option>
                        <option>Dinner Date</option>
                      </select>
                      {errors.type_of_visit && touched.type_of_visit ? (
                        <p className="error">{errors.type_of_visit}</p>
                      ) : null}
                    </Col>
                    <Col xs={12} lg={6} md={6}>
                      <select
                        name="duration"
                        value={values.duration}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option>Select Duration </option>
                        <option value="1 Hrs">1 Hrs</option>
                        <option value="2 Hrs">2 Hrs</option>
                        <option value="3 Hrs">3 Hrs</option>
                        <option value="4 Hrs">4 Hrs</option>
                        <option value="5 Hrs">5 Hrs</option>
                        <option value="6 Hrs">6 Hrs</option>
                        <option value="7 Hrs">7 Hrs</option>
                        <option value="8 Hrs">8 Hrs</option>
                        <option value="9 Hrs">9 Hrs</option>
                        <option value="10 Hrs">10 Hrs</option>
                        <option value="11 Hrs">11 Hrs</option>
                        <option value="12 Hrs">12 Hrs</option>
                      </select>
                      {errors.duration && touched.duration ? (
                        <p className="error">{errors.duration}</p>
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} lg={6} md={6}>
                      <select
                        name="looks"
                        value={values.looks}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option>Choose Looks</option>
                        <option value="5">5 Out of 5</option>
                        <option value="4">4 Out of 5</option>
                        <option value="3">3 Out of 5</option>
                        <option value="2">2 Out of 5</option>
                        <option value="1">1 Out of 5</option>
                      </select>
                      {errors.looks && touched.looks ? (
                        <p className="error">{errors.looks}</p>
                      ) : null}
                    </Col>
                    <Col xs={12} lg={6} md={6}>
                      <select
                        name="performance"
                        value={values.performance}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option>Choose Performance</option>
                        <option value="5">5 Out of 5</option>
                        <option value="4">4 Out of 5</option>
                        <option value="3">3 Out of 5</option>
                        <option value="2">2 Out of 5</option>
                        <option value="1">1 Out of 5</option>
                      </select>
                      {errors.performance && touched.performance ? (
                        <p className="error">{errors.performance}</p>
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} lg={12} md={12}>
                      <textarea
                        name="comment"
                        value={values.comment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Message"
                      ></textarea>
                      {errors.comment && touched.comment ? (
                        <p className="error">{errors.comment}</p>
                      ) : null}
                    </Col>
                  </Row>
                  <input type="submit" value="Submit your Review!"></input>
                </div>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    </>
  );
};

export default Writeareview;