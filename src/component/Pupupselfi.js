import Image from 'next/image';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
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

      </Carousel.Item>

    </Carousel>
  );
}





const Pupupselfi = ({ data }) => {
  console.log(data);


  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);





  return (
    <>




      <div className='md_popup'>
        <Button onClick={() => setLgShow(true)} className='selfi_tag'>Video</Button>
        <Button onClick={() => setSmShow(true)} className='video_tag'>Selfi</Button>


        {/* {data.selfie_gallery.map((Item) => {
          return (
            <>
              <div key={Item.data}>

              </div>
            </>
          )
        })} */}

        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Selfie
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlledCarousel />
            {/* <Carousel>
              {data.selfie_gallery.map((Item) => {
                console.log(Item)
                return (
                  <>
                    <div key={Item}>

                      <Carousel.Item>
                        <img
                          src={`https://dev.havingado.net/babesofdubai/${Item.selfie_img}`}
                        />
                      </Carousel.Item>
                    </div>
                  </>
                )
              })}
            </Carousel> */}
          </Modal.Body>
        </Modal>


        {data.video_gallery.map((Item) => {
          return (
            <>
              <div key={Item.data}>
                <Modal
                  size="lg"
                  show={lgShow}
                  onHide={() => setLgShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                      Video
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <video autoPlay controls>
                      <source src={`https://dev.havingado.net/babesofdubai/${Item.video_url}`} type="video/mp4" />
                    </video>
                  </Modal.Body>
                </Modal>
              </div>
            </>
          )
        })
        }



      </div >

    </>
  )
}

export default Pupupselfi



