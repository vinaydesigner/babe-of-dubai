import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import Link from 'next/link';
import Pupupselfi from '../../src/component/Pupupselfi'


const Modelsdetails = ({ data }) => {
    console.log(data);

    return (
        <>
            <div className={styles.h_textinfo}>
                <h1>Models Detils</h1>
                <Image src="/images/hori_golden_line.svg" alt="line" layout='responsive' width={1366} height={5} />

                <Container fluid className={styles.modelsdetailspage}>
                    <Row>
                        <Col xs={12} lg={4} md={4}>
                            <div className='md_linksof_video_selfi'>
                                <Pupupselfi data={data} />
                            </div>
                            <div className='md_title mobile'>
                                {data.escorts[0].escort_name}
                                <span>AED {data.rates[0].halfHrInCallRate} / {data.rates[0].halfHrOutCallRate}
                                </span>
                            </div>
                            <div className='modelsprofilepic'>
                                {data.main_gallery.map((Item) => {
                                    return (
                                        <>
                                            <img src={`https://dev.havingado.net/babesofdubai${Item.galllery_img}`} />
                                        </>
                                    )

                                })}
                            </div>
                            {/* <img src={`https://dev.havingado.net/babesofdubai${data.main_gallery[0].galllery_img}`} /> */}
                        </Col>
                        <Col xs={12} lg={8} md={8}>
                            <div className='modelsdetails_innerbox'>
                                <div className='md_title'>{data.escorts[0].escort_name}   <span>AED {data.rates[0].halfHrInCallRate} / {data.rates[0].halfHrOutCallRate}</span></div>
                                <Accordion defaultActiveKey={['0']} >
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header> Stats </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='md_stats'>
                                                <ul>
                                                    {/* {data.escorts.map((Item) => {
                                                        return (
                                                            <>
                                                                <li><strong> {Item.age} </strong> Age </li>
                                                            </>
                                                        )
                                                    })} */}

                                                    <li><strong> {data.escorts[0].height} </strong> Height</li>
                                                    <li><strong> {data.escorts[0].weight}</strong> Weight</li>
                                                    <li><strong> {data.escorts[0].hair_lenght}</strong> Hair Lenght</li>
                                                    <li><strong> {data.escorts[0].hair_color}</strong> Hair Colour</li>
                                                    <li><strong> {data.escorts[0].bust_size}</strong> Bust Size</li>
                                                    <li><strong> {data.escorts[0].cup_size}</strong> Cup Size</li>
                                                    <li><strong> {data.escorts[0].eyes}</strong> Eye Colour</li>
                                                    <li><strong> {data.escorts[0].dress_size}</strong> Dress Size</li>
                                                    <li><strong> {data.escorts[0].shoe_size}</strong> Shoe Size</li>
                                                    <li><strong> {data.escorts[0].body_type}</strong> Body Type</li>
                                                    <li><strong> {data.escorts[0].smoker}</strong> Smoking</li>
                                                </ul>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header> About Me </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='md_aboutme'>
                                                {data.escorts[0].about}
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header> Rates </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='md_rates'>
                                                {/* <ul>
                                                    <li>
                                                        <span></span>
                                                        <span>Incall</span>
                                                        <span>Outcall</span>
                                                    </li>
                                                    <li>
                                                        {data.rates.map((Item) => {
                                                            return (
                                                                <>
                                                                    <span></span>
                                                                    <span>
                                                                        {Item.halfHrInCallRate}
                                                                    </span>
                                                                    <span>
                                                                        {Item.halfHrOutCallRate}
                                                                    </span>
                                                                </>
                                                            )
                                                        })}
                                                    </li>
                                                </ul> */}
                                                <ul>
                                                    <li>
                                                        <span></span>
                                                        <span>Incall</span>
                                                        <span>Outcall</span>
                                                    </li>
                                                    <li>
                                                        <span>30 Mins</span>
                                                        <span>{data.rates[0].halfHrInCallRate}</span>
                                                        <span>{data.rates[0].halfHrOutCallRate}</span>
                                                    </li>
                                                    <li>
                                                        <span>1 Hour</span>
                                                        <span>{data.rates[0].oneHrInCallRate}</span>
                                                        <span>{data.rates[0].oneHrOutCallRate}</span>
                                                    </li>
                                                    <li>
                                                        <span>2 Hour</span>
                                                        <span>{data.rates[0].twoHrInCallRate}</span>
                                                        <span>{data.rates[0].twoHrOutCallRate}</span>
                                                    </li>
                                                    <li>
                                                        <span>3 Hour</span>
                                                        <span>{data.rates[0].threeHrInCallRate}</span>
                                                        <span>{data.rates[0].threeHrOutCallRate}</span>
                                                    </li>
                                                    <li>
                                                        <span>4 Hour</span>
                                                        <span>{data.rates[0].fourHrInCallRate}</span>
                                                        <span>{data.rates[0].fourHrOutCallRate}</span>
                                                    </li>
                                                    <li>
                                                        <span>Over Night</span>
                                                        <span>{data.rates[0].overNightInCallRate}</span>
                                                        <span>{data.rates[0].overNightOutCallRate}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header> Location </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='md_location'>
                                                {data.locations.map((Item) => {
                                                    return (
                                                        <>
                                                            <span> {Item.location_name} </span>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header> What I Like </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='md_whatlike'>
                                                {data.services.map((Item) => {
                                                    return (
                                                        <>
                                                            <span>{Item.service_name}</span>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header> Review </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='md_review'>
                                                <Link href="/writeareview">Write a Review</Link>
                                                {data.reivews.map((Item) => {
                                                    return (
                                                        <>
                                                            <ul>
                                                                <li>
                                                                    <span>{Item.rating}</span>
                                                                    {Item.review_date}
                                                                    <p>{Item.comment}</p>
                                                                </li>
                                                            </ul>


                                                        </>
                                                    )
                                                })}
                                                {/* <ul>
                                                    <li>
                                                        <div>
                                                            <span>
                                                                <img src='/images/star_fill.png' />
                                                                <img src='/images/star_fill.png' />
                                                                <img src='/images/star_fill.png' />
                                                                <img src='/images/star_fill.png' />
                                                                <img src='/images/star_blank.png' />
                                                            </span>
                                                            <span>{data.reivews[0].rating}</span>
                                                            <span>{data.reivews[0].review_date}</span>
                                                        </div>
                                                        <p>{data.reivews[0].comment}</p>

                                                    </li>
                                                </ul> */}
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header> Book me now </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='md_booknow'>
                                                {/* <Link href="#"><a href={data.escorts[0].phon_no}>{data.escorts[0].phon_no}</a></Link> */}
                                                <Link href="/booking">Book Me!</Link>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Modelsdetails


export const getServerSideProps = async (context) => {
    const slug = context.query.slug;
    const res = await fetch(`https://dev.havingado.net/babesofdubai/api/v1/escort-detail/${slug}`);
    const data = await res.json();
    console.log(data)


    return {
        props: { data },
    }
};



