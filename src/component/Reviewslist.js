import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { Container, Row, Col } from 'react-bootstrap';


const Reviewslist = () => {
    const Redata = [
        {
            r_pic: "/images/models_thumbnails/pic1.jpg",
            rm_name: "Lora",
            rs_name: "Steve",
            rv_date: "Jan 2022",
            rt_visit: "Incall",
            r_duration: "3 hrs",
            r_look: "10 out of 10",
            r_performance: "10 out of 8",
            r_comment: "It was my first time after my gf... but trust me she can make anyone in love ..... fun..outstanding, pleasure... outstanding... experience.. outstanding",

        },

        {
            r_pic: "/images/models_thumbnails/pic2.jpg",
            rm_name: "Sona",
            rs_name: "Mark",
            rv_date: "March 2022",
            rt_visit: "Outcall",
            r_duration: "30 Mints",
            r_look: "10 out of 8",
            r_performance: "10 out of 10",
            r_comment: "comment here",

        },

        {
            r_pic: "/images/models_thumbnails/pic3.jpg",
            rm_name: "Sunny",
            rs_name: "Jone",
            rv_date: "July 2022",
            rt_visit: "Overnight",
            r_duration: "2 hrs",
            r_look: "10 out of 5",
            r_performance: "10 out of 2",
            r_comment: "comment here",

        },
    ]

    return (
        <>
            {Redata.map((item, i) => (
                <div className={styles.reviewlisting} key={i}>
                    <Row>
                        <Col xs={6} sm={2} md={2}>
                            <div>
                                <Image src={item.r_pic}
                                    width={120}
                                    height={170} >
                                </Image>
                            </div>
                            <span className={styles.reviewlink}>
                                <Link href="/write-a-review">Write a Review</Link>
                            </span>
                        </Col>
                        <Col xs={6} sm={4} md={4}>
                            <p><strong>Reviewer Name :</strong> {item.rs_name}</p>
                            <p><strong>Date of Visit :</strong> {item.rv_date}</p>
                            <p><strong>Type of Visit :</strong> {item.rt_visit}</p>
                            <p><strong>Duration :</strong> {item.r_duration}</p>
                            <p><strong>Looks :</strong> {item.r_look}</p>
                            <p><strong>Performance :</strong> {item.r_performance}</p>
                        </Col>
                        <Col xs={12} sm={6} md={6}>
                            <p>{item.r_comment}</p>
                        </Col>
                    </Row>
                </div>
            ))}
        </>
    )
}

export default Reviewslist