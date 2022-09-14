import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { bookingForm, BookingSelect } from "../src/api/bookingapi";
// import { bookingForm } from '../src/api/api';
import { bookingSchemas } from "../src/schemas/bookingschema";
import { useState } from "react";
import { useEffect } from "react";

const initialValues = {
  escort_id: "",
  full_name: "",
  email: "",
  contact_no: "",
  message: "",
  booking_date: "",
  booking_time: "",
  booking_duration: "",
};

const Booking = () => {
  const [selectDetail, setSelectDetails] = useState([]);
  const [attributeList, setAttributeList] = useState({});

  const fetchData = async () => {
    var data = await BookingSelect();
    setSelectDetails(data.escorts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("data is", selectDetail);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: bookingSchemas,
      onSubmit: (values) => {
        var data = new FormData();
        data.append("escort_id", values.escort_id);
        data.append("full_name", values.full_name);
        data.append("email", values.email);
        data.append("contact_no", values.contact_no);
        data.append("message", values.message);
        data.append("booking_date", values.booking_date);
        data.append("booking_time", values.booking_time);
        data.append("booking_duration", values.booking_duration);
        const response = bookingForm(data);
        console.log(response);
      },
    });
  console.log("values", values);
  // console.log("handle", handleChange);

  const handleAttributeChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    const data = JSON.parse(value);
    console.log(data.thumbnail);
    setAttributeList(data.thumbnail);
    // const list = { ...attributeList };
    // list[name] = value;
    // setAttributeList(list);
  };

  return (
    <>
      <div className={styles.h_textinfo}>
        <h1>Bookings</h1>
        <p>
          To meet hot blonde, brunette, busty and curvy companions as early as
          tonight from AED150/hour, check out our full selection of London
          escorts.
        </p>
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
              <Col xs={12} lg={5} md={5}>
                <div className={styles.booking_mobels_box}>
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
                      width={540}
                      height={760}
                    />
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={7} md={7}>
                <div className={styles.c_form_box}>
                  <h4>Personal Details</h4>
                  <Col xs={12} lg={12} md={12}>
                    <input
                      type="text"
                      name="full_name"
                      value={values.full_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Full name"
                    ></input>
                    {errors.full_name && touched.full_name ? (
                      <p className="error">{errors.full_name}</p>
                    ) : null}
                  </Col>

                  <Col xs={12} lg={12} md={12}>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Email address"
                    ></input>
                    {errors.email && touched.email ? (
                      <p className="error">{errors.email}</p>
                    ) : null}
                  </Col>

                  <Col xs={12} lg={12} md={12}>
                    <input
                      type="text"
                      name="contact_no"
                      value={values.contact_no}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Contact number"
                    ></input>
                    {errors.contact_no && touched.contact_no ? (
                      <p className="error">{errors.contact_no}</p>
                    ) : null}
                  </Col>

                  <h4>Personal Details</h4>
                  <Col xs={12} lg={12} md={12}>
                    <input
                      className="dateicon"
                      type="date"
                      name="booking_date"
                      value={values.booking_date}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Booking date"
                    ></input>
                  </Col>

                  <Col xs={12} lg={12} md={12}>
                    <input
                      className="timeicon"
                      type="time"
                      name="booking_time"
                      value={values.booking_time}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Booking time"
                    ></input>
                  </Col>

                  <Col xs={12} lg={12} md={12}>
                    <input
                      type="text"
                      name="booking_duration"
                      value={values.booking_duration}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Booking duration"
                    ></input>
                  </Col>

                  <Col xs={12} lg={12} md={12}>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Message"
                    ></textarea>
                  </Col>
                  <input type="submit" value="Book Now!"></input>
                </div>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    </>
  );
};

export default Booking;
