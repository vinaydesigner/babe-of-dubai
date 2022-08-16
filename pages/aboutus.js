import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {Container, Row, Col} from 'react-bootstrap';


const aboutus = () => {
  
  return (
    <>
    <div className={styles.h_textinfo}>
        <h1>About Us</h1>
        <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />
        
        <Container fluid className={styles.aboutuspage}>
          <Row>
          <Col xs={12} lg={5} md={5}>
              <Image src="/images/about-img.png" width={528} height={538} />
            </Col>
            <Col xs={12} lg={7} md={7}>
              <h2>Luxury Escorts Services</h2>
              <p>To meet hot blonde, brunette, busty and curvy companions as early as tonight from AED150/hour, check out our full selection of London escorts. Browse our online gallery and find everything from European models, exotic Brazilians, Russian girls and British babes; each with a comprehensive profile of photos (including selfies and videos), descriptions, statistics, services, rates and verified reviews! To book incall or outcall escorts in Dubai, call (+44) 07831 475881.</p>
              <p>Dubai escorts are ladies who make clients feel the ultimate pleasure of unloading all of the tension and stress they feel from their day to day lives. These escorts know how to use their charm, intelligence, personality and certainly their appearance to treat clients to a no strings attached date with delves into the pleasure of human contact and companionship, Escorts in Dubai are a shoulder to cry on, someone to speak to about how your day has been, company when you are feeling lonely and the perfect date for when you are feeling horny and up for some fun in the capital. These ladies are capable of everything and more, going the extra mile to ensure every client they meet has an amazing time whether they are in London on business, a holiday or living in one of the world's most exciting cities.</p>
            </Col>
            <Col xs={12} lg={12} md={12}>
              <h3>How to book one of the sexiest escorts Dubai has to offer</h3>
              <p>We know that dating an escort can be a spur of the moment thing and that is why we have an experienced team on hand to help you. That is why we have put together a simple step by step escort guide to booking a companion from our Dubai escort agency.</p>
              <p><strong> Step 1 </strong> <br></br>
              You will find all of the Dubai escorts you can book from our agency on our homepage. Here you can find girls available now, with a range of other filters so you can quickly find escorts that meet your demands. For example search via locations and categories such to find party girls now.
              </p>
              <p><span>Note -</span> Please remember that not all escort providers have all their escort girls on the homepage of their website.</p>
              <p><strong> Step 2 </strong> <br></br>
              You will find all of the Dubai escorts you can book from our agency on our homepage. Here you can find girls available now, with a range of other filters so you can quickly find escorts that meet your demands. For example search via locations and categories such to find party girls now.
              </p>
              <p><strong> Step 3 </strong> <br></br>
                To book an escort, call (+971) 38595225. This will put you through to our receptionists who will talk you through the booking. Now is your chance to mention if you would like special requirements such as your escort wearing a uniform for example. If the booking is short notice this may be difficult but we will always try our best to leave you fully satisfied. You can also book an escort online using our booking form.</p>
            </Col>
          </Row>
        </Container>
    </div>
    </>
  )
}


export default aboutus