import Image from 'next/image';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Selfislider from './common/selfislider';






const Pupupselfi = ({ data }) => {
  console.log(data);


  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);





  return (
    <>




      <div className='md_popup'>
        <Button onClick={() => setLgShow(true)} className='selfi_tag'>Video</Button>
        <Button onClick={() => setSmShow(true)} className='video_tag'>Selfie</Button>


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
            <Selfislider data={data}></Selfislider>
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



