import Image from 'next/image';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
    <div className='md_popup'>
    <Button onClick={() => setLgShow(true)} className='selfi_tag'>Video</Button>
    <Button onClick={() => setSmShow(true)} className='video_tag'>Selfi</Button>
      
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Selfi
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Image src="/images/models_thumbnails/pic1.jpg" width={320} height={500} layout='responsive'></Image>
        </Modal.Body>
      </Modal>
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
            <iframe width="100%" height="430" src="https://www.youtube.com/embed/gFY4vRNmMeA" alt="video" title="YouTube video player"></iframe>
        </Modal.Body>
      </Modal>
      </div>
    </>
  );
}

export default Example;