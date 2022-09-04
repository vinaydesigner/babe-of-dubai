import Styles from '../../styles/Home.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Image from "next/image";
import React from "react";


const Fillter = () => {
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
                            <Accordion.Header>By Price</Accordion.Header>
                            <Accordion.Body>
                                <label>
                                    <input type="radio" /> Under AED200
                                </label>
                                <label>
                                    <input type="radio" /> AED200-300
                                </label>
                                <label>
                                    <input type="radio" /> AED300+
                                </label>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Hair Color</Accordion.Header>
                            <Accordion.Body>
                                <label>
                                    <input type="radio" /> Black
                                </label>
                                <label>
                                    <input type="radio" /> Blonde
                                </label>
                                <label>
                                    <input type="radio" /> Blonde & Blands
                                </label>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Nationality</Accordion.Header>
                            <Accordion.Body>
                                <label>
                                    <input type="radio" /> Eastern European
                                </label>
                                <label>
                                    <input type="radio" /> Eastern
                                </label>
                                <label>
                                    <input type="radio" /> Austrian
                                </label>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default Fillter