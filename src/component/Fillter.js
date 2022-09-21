import Accordion from 'react-bootstrap/Accordion';
import Image from "next/image";
import React from "react";
import Locationcheck from './common/locationcheckbox';
import Servicescheckbox from './common/servicescheckbox';
import Haircolorcheckbox from './common/haircolorcheckbox';
import Ratescheckbox from './common/ratescheckbox';




const Fillter = ({ fillter }) => {
    console.log(fillter);

    const [status, setStatus] = React.useState(false)



    return (
        <>

            <div className='fillterbox'>
                <button className="fillter" onClick={() => setStatus(!status)}>
                    <Image src="/images/filter_icon.png" alt="filter" width={16} height={16} /> Fillter
                </button>

                <div className={`fillterinner ${status ? 'active' : ''}`}>
                    <Accordion defaultActiveKey={['0']} >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Services</Accordion.Header>
                            <Accordion.Body>
                                <Servicescheckbox fillter={fillter}></Servicescheckbox>
                                {/* {fillter.hair_color.map((curElem) => {
                                    return (
                                        <>
                                            <div key={curElem}>
                                                <Checkbox>
                                                    {curElem.Black}
                                                </Checkbox>
                                            </div>
                                        </>
                                    )
                                })} */}

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Hair Color</Accordion.Header>
                            <Accordion.Body>
                                <Haircolorcheckbox fillter={fillter}></Haircolorcheckbox>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Location</Accordion.Header>
                            <Accordion.Body>
                                <Locationcheck fillter={fillter}></Locationcheck>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Rates</Accordion.Header>
                            <Accordion.Body>
                                <Ratescheckbox fillter={fillter}></Ratescheckbox>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default Fillter