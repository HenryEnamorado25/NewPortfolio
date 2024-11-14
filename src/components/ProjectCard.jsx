/* eslint-disable react/prop-types */
import { useState } from "react";
import { Col, Button, Modal } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  fullDescription,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={`${title} thumbnail`} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span className="text-small">{description}</span>
            <br />
            <Button
              variant="link"
              onClick={handleShow}
              className="view-more-btn text-white"
            >
              Details
            </Button>
          </div>
        </div>
      </Col>

      {/* Modal for More Info */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className="bg-dark">
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <img
            src={imgUrl}
            alt={`${title} full`}
            style={{ width: "100%", marginBottom: "1rem" }}
          />
          <p>{fullDescription}</p>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
