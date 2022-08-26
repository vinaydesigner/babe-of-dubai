import Image from 'next/image';
import Link from 'next/link'
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../../styles/Home.module.css';




const index = ({data}) => {
  // console.log(data);
  return (
    <>
      <div className={styles.h_textinfo}>
      <h1>Blog</h1>
      <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />  


    <Container fluid className={styles.bloglistpage}>
    <Row>

      {data.blogs.map((curElem) => {
        return(
          <>
            <Col lg={4} md={4} sm={4} xs={12}>
            
              <div key={curElem.slug}>
                  <div className={styles.bloginnerbox}>
                    <div className={styles.blogpic}>
                      <Link href={`/blog/${curElem.slug}`}>
                        <img src={`https://dev.havingado.net/babesofdubai${curElem.thumbnail_img}`} width={380} height={200} layout='responsive' />   
                      </Link>      
                    </div>
                    <div className={styles.bloginfo}>
                      <span className={styles.byad}> {curElem.author} | {curElem.publish_date}</span>
                      <Link href={`/blog/${curElem.slug}`}><h5 className={styles.blog_title}>{curElem.title}</h5></Link>
                      <p>{curElem.blog_description}</p>
                    </div>
                  </div>
              </div> 

            </Col>
          </>
        );

      })}


    </Row>
  </Container>    
    </div>
    </>
  )
}

export default index


export const getServerSideProps = async () => {
  const res = await fetch ("https://dev.havingado.net/babesofdubai/api/v1/blog-listing");
  const data = await res.json();

  return{
    props:{data},
  };

};