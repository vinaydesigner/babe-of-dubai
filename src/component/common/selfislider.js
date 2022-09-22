import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';






function ControlledCarousel({ data }) {
    console.log(data)
    const [index, setIndex] = useState([]);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>

            {data?.selfie_gallery?.map((Item) => {
                console.log(Item)
                return (
                    <>
                        <div key={Item}>
                            <Carousel.Item className={index === 0 ? "" : "active"}>
                                <img src={`https://dev.havingado.net/babesofdubai/${Item?.selfie_img}`}
                                />
                            </Carousel.Item>
                        </div>
                    </>
                )
            })}

            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://dev.havingado.net/babesofdubai/uploads/escorts_gallery/1663330915_gallery_0.jpg"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://dev.havingado.net/babesofdubai/uploads/escorts_gallery/1663330915_gallery_1.jpg"
                    alt="First slide"
                />

            </Carousel.Item> */}

        </Carousel>
    );
}




const Selfislider = ({ data }) => {
    return (
        <ControlledCarousel data={data} />
    )
}
export default Selfislider