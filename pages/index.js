import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Fillter from '../src/component/Fillter';
import Modelsthums from "../src/component/modelsthums";
import React, { useState } from 'react';






export default function Home({ homedata }) {
  const [isHidden1, setIsHidden1] = useState(true);


  return (
    <>


      {homedata.map((curElem) => {
        return (
          <>

            <div key={curElem}>

              <Head>
                <title>{curElem.meta_title}</title>
                <meta name="keyword" content={curElem.meta_keyword} />
                <meta name="description" content={curElem.meta_description} />
                <link rel="icon" href="favicon.ico" />
              </Head>

              <div className={styles.h_textinfo}>
                <h1>Dubai Escorts</h1>
                <p> {curElem.section1} <span className={isHidden1 ? 'redemore-hide' : null}> {curElem.section2}</span>
                  <button className='read_more' onClick={() => setIsHidden1(!isHidden1)}> {isHidden1 ? "+ Read More" : "- Read Less"} </button>
                </p>

                <Image src="/images/hori_golden_line.svg" alt="line" layout="responsive" width={1366} height={5} />

                <Container fluid className={styles.h_thumnanils}>
                  <Row>
                    <div className={styles.heading_shorby}>Shor by</div>
                    <Col xs={{ span: 12, order: 2 }} lg={{ span: 10, order: 1 }} md={{ span: 9, order: 1 }}>
                      <Modelsthums></Modelsthums>
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} lg={{ span: 2, order: 2 }} md={{ span: 3, order: 2 }}>
                      <Fillter></Fillter>
                    </Col>
                  </Row>
                </Container>






                <div>
                  {/* {curElem.section3} */}

                  <h2>About Dubai Escorts</h2>
                  <p>Dubai escorts are call girls who sell their time and companionship to gentlemen seeking the services of hot escort girls.</p>
                  <p>Dubai escorts are ladies who make clients feel the ultimate pleasure of unloading all of the tension and stress they feel from their day to day lives. These escorts know how to use their charm&apos; intelligence&apos; personality and certainly their appearance to treat clients to a no strings attached date with delves into the pleasure of human contact and companionship&apos; Escorts in Dubai are a shoulder to cry on&apos; someone to speak to about how your day has been&apos; company when you are feeling lonely and the perfect date for when you are feeling horny and up for some fun in the capital. These ladies are capable of everything and more&apos; going the extra mile to ensure every client they meet has an amazing time whether they are in London on business&apos; a holiday or living in one of the worlds most exciting cities.</p>
                  <p>To learn more about the best escorts Dubai has available to gentlemen, be sure to continue reading what are Dubai escort agency has to say about the local call girls in the city.</p>
                </div>

                <div>
                  <h3>Choose from hundred of escorts in Dubai you can meet today</h3>

                  <ul>
                    <li>Our Dubai escort agency is delighted to be able to introduce to you a gallery of over 100 of the best escorts Dubai has to offer.</li>
                    <li>The ladies that you see in our gallery are all genuine female escorts in Dubai as we operate a 100% no false pictures policy.</li>
                    <li>These ladies come from alll over the world, from local British girls to Eastern European models from countries such as Romania.</li>
                    <li>With different colour hair, body types, breast size and personalities, everyone here at Rachaels Dubai escorts is sure you will find the companion you are searching for.</li>
                    <li>All you need to do nowis click on the girls profile picture and enjoy your browsing experience.</li>
                  </ul>
                </div>

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
              </div>

            </div>
          </>
        )
      })
      }



      {/* <div className={styles.h_textinfo}>
        <h1>Dubai Escorts</h1>
        <p>To meet hot blonde, brunette, busty and curvy companions as early as tonight from AED150/hour, check out our full selection of London escorts. Browse our online gallery and 
        <span className={isHidden1 ? 'redemore-hide' : null}> find everything from European models, exotic Brazilians, Russian girls and British babes; each with a comprehensive profile of photos (including selfies and videos), descriptions, statistics, services, rates and verified reviews! To book incall or outcall escorts in Dubai, call (+44) 07831 475881.</span>
        <button className='read_more' onClick={() => setIsHidden1(!isHidden1)}> {isHidden1 ? "+ Read More" : "- Read Less"} </button>
        </p>
        <Image src="/images/hori_golden_line.svg" alt="line" layout="responsive" width={1366} height={5} />
      
        <Container fluid className={styles.h_thumnanils}>
          <Row>
            <div className={styles.heading_shorby}>Shor by</div>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 10, order: 1}} md={{ span: 9, order: 1 }}>
            <Modelsthums></Modelsthums>
            </Col>
            <Col xs={{ span: 12, order: 1 }} lg={{ span: 2, order: 2 }} md={{ span: 3, order: 2 }}>
              <Fillter></Fillter>
            </Col>
          </Row>
        </Container>

        <h2>About Dubai Escorts</h2>
        <p>Dubai escorts are call girls who sell their time and companionship to gentlemen seeking the services of hot escort girls.</p>
        <p>Dubai escorts are ladies who make clients feel the ultimate pleasure of unloading all of the tension and stress they feel from their day to day lives. These escorts know how to use their charm&apos; intelligence&apos; personality and certainly their appearance to treat clients to a no strings attached date with delves into the pleasure of human contact and companionship&apos; Escorts in Dubai are a shoulder to cry on&apos; someone to speak to about how your day has been&apos; company when you are feeling lonely and the perfect date for when you are feeling horny and up for some fun in the capital. These ladies are capable of everything and more&apos; going the extra mile to ensure every client they meet has an amazing time whether they are in London on business&apos; a holiday or living in one of the worlds most exciting cities.</p>
        <p>To learn more about the best escorts Dubai has available to gentlemen, be sure to continue reading what are Dubai escort agency has to say about the local call girls in the city.</p>
      
        <h3>Choose from hundred of escorts in Dubai you can meet today</h3>
        <ul>
          <li>Our Dubai escort agency is delighted to be able to introduce to you a gallery of over 100 of the best escorts Dubai has to offer.</li>
          <li>The ladies that you see in our gallery are all genuine female escorts in Dubai as we operate a 100% no false pictures policy.</li>
          <li>These ladies come from alll over the world, from local British girls to Eastern European models from countries such as Romania.</li>
          <li>With different colour hair, body types, breast size and personalities, everyone here at Rachaels Dubai escorts is sure you will find the companion you are searching for.</li>
          <li>All you need to do nowis click on the girls profile picture and enjoy your browsing experience.</li>
        </ul>

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
      </div> */}

    </>
  )
}


export async function getServerSideProps() {
  const response = await fetch('https://dev.havingado.net/babesofdubai/api/v1/page-data/home')
  const data = await response.json()

  return {
    props: {
      homedata: data.page
    }
  }

}


