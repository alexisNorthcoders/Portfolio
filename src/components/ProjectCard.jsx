import React, { useState } from 'react';
import { Col, Modal, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons'

function ProjectCard({ title, description, imgUrl, url, github,stack }) {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx" style={{ cursor: 'pointer' }} onClick={handleOpenModal}>
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered className="custom-modal"  >
        <Modal.Header closeButton >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div className="row modal-body" >
            <div className="col-md-6">
              <img src={imgUrl} alt={title} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <p>{description}</p>
              Stack:<ul>
              {stack && stack.map(((singleStack) => {
                return (<li>{singleStack}</li>)
              }))}</ul>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Row className='d-flex '>
          {url && (
      <Col>
        <FontAwesomeIcon onClick={() => handleLinkClick(url)} id="modal-btn" icon={faEye} />
      </Col>
    )}
    {github && (
      <Col>
        <FontAwesomeIcon id="modal-btn" onClick={() => handleLinkClick(github)} icon={faGithub} />
      </Col>
    )}
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCard;