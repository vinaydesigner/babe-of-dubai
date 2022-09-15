import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Container, Row, Col } from 'react-bootstrap';



const aboutus = ({ aboutdata }) => {

  return (
    <>

      {aboutdata.map((curElem) => {
        console.log(curElem);
        return (
          <div key={curElem}>

            <Head>
              <title>{curElem.meta_title}</title>
              <meta name="keyword" content={curElem.meta_keyword} />
              <meta name="description" content={curElem.meta_description} />
            </Head>

            <div className={styles.h_textinfo}>
              <h1>{curElem.page_name}</h1>
              <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />

              <Container fluid className={styles.aboutuspage}>
                <Row>
                  <Col xs={12} lg={5} md={5}>
                    <Image src="/images/about-img.png" width={528} height={538} alt="about model pic" />
                  </Col>
                  <Col xs={12} lg={7} md={7}>
                    <div dangerouslySetInnerHTML={{ __html: curElem.section1 }}></div>
                  </Col>
                  <Col xs={12} lg={12} md={12}>
                    <div dangerouslySetInnerHTML={{ __html: curElem.section2 }}></div>
                    <div dangerouslySetInnerHTML={{ __html: curElem.section3 }}></div>
                  </Col>
                </Row>
              </Container>
            </div>

          </div>
        )
      })}


    </>
  )
}


export default aboutus



export async function getServerSideProps() {
  const response = await fetch('https://dev.havingado.net/babesofdubai/api/v1/page-data/aboutus')
  const data = await response.json()

  return {
    props: {
      aboutdata: data.page,
    }
  }

}



{/* <h2>Luxury Escorts Services</h2>

                    <p>To meet hot blonde&apos; brunette&apos; busty and curvy companions as early as tonight from AED150/hour&apos; check out our full selection of London escorts. Browse our online gallery and find everything from European models&apos; exotic Brazilians&apos; Russian girls and British babes each with a comprehensive profile of photos (including selfies and videos)&apos; descriptions&apos; statistics&apos; services&apos; rates and verified reviews! To book incall or outcall escorts in Dubai&apos; call (+44) 07831 475881.</p>
                    <p>Dubai escorts are ladies who make clients feel the ultimate pleasure of unloading all of the tension and stress they feel from their day to day lives. These escorts know how to use their charm&apos; intelligence&apos; personality and certainly their appearance to treat clients to a no strings attached date with delves into the pleasure of human contact and companionship&apos; Escorts in Dubai are a shoulder to cry on&apos; someone to speak to about how your day has been&apos; company when you are feeling lonely and the perfect date for when you are feeling horny and up for some fun in the capital. These ladies are capable of everything and more&apos; going the extra mile to ensure every client they meet has an amazing time whether they are in London on business&apos; a holiday or living in one of the worlds most exciting cities.</p> */}

{/* <h3>How to book one of the sexiest escorts Dubai has to offer</h3>
<p>We know that dating an escort can be a spur of the moment thing and that is why we have an experienced team on hand to help you. That is why we have put together a simple step by step escort guide to booking a companion from our Dubai escort agency.</p>
<p><strong> Step 1 </strong> <br></br>
You will find all of the Dubai escorts you can book from our agency on our homepage. Here you can find girls available now, with a range of other filters so you can quickly find escorts that meet your demands. For example search via locations and categories such to find party girls now.
</p>
<p><span>Note -</span> Please remember that not all escort providers have all their escort girls on the homepage of their website.</p>
<p><strong> Step 2 </strong> <br></br>
You will find all of the Dubai escorts you can book from our agency on our homepage. Here you can find girls available now, with a range of other filters so you can quickly find escorts that meet your demands. For example search via locations and categories such to find party girls now.
</p>
<p><strong> Step 3 </strong> <br></br>
To book an escort, call (+971) 38595225. This will put you through to our receptionists who will talk you through the booking. Now is your chance to mention if you would like special requirements such as your escort wearing a uniform for example. If the booking is short notice this may be difficult but we will always try our best to leave you fully satisfied. You can also book an escort online using our booking form.</p> */}

