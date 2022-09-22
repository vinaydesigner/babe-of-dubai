import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../styles/Home.module.css';







const details = ({ data }) => {
  // console.log("data", data);  

  return (
    <>
      <div className={styles.h_textinfo}>
        <h1>{data.blog_details[0].title}</h1>
        <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />

        <Container fluid className={styles.bloglistpage}>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <div key={data.slug} className={styles.bloginnerbox} >
                <div className={styles.blogpic}>
                  <img src={`https://dev.havingado.net/babesofdubai${data.blog_details[0].blog_image}`} />
                </div>
                <div className={styles.bloginfo}>
                  <span className={styles.byad}> {data.blog_details[0].author} {data.blog_details[0].publish_date} </span>
                  <h5 className={styles.blog_title}>{data.blog_details[0].title}</h5>
                  <div dangerouslySetInnerHTML={{ __html: data.blog_details[0].blog_description }}></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default details


export const getServerSideProps = async (context) => {
  const slug = context.query.slug;
  const res = await fetch(`https://dev.havingado.net/babesofdubai/api/v1/blog-detail/${slug}`);
  const data = await res.json();


  return {
    props: { data },
  };

};