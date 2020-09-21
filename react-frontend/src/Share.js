import React from 'react';
import { MdShare } from 'react-icons/md';
import Modal from 'react-bootstrap/Modal';
import { EmailShareButton, FacebookShareButton, TwitterShareButton, EmailIcon, FacebookIcon, TwitterIcon } from 'react-share';

import './css/Share.css';

function Share(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <MdShare onClick={(e) => {
        e.preventDefault();
        handleShow();
      }} />
      <Modal show={show} onClick={(e) => e.preventDefault()} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="shareBody">
          <h4>Share via</h4>
          <br />
          <div>
            <FacebookShareButton url={props.url} hashtag="#CSCI_571_NewsApp" target="_blank">
              <FacebookIcon round />
            </FacebookShareButton>
            <TwitterShareButton className="shareButton2" url={props.url} hashtags={["CSCI_571_NewsApp"]}>
              <TwitterIcon round />
            </TwitterShareButton>
            <EmailShareButton url={props.url} subject="#CSCI_571_NewsApp">
              <EmailIcon round />
            </EmailShareButton>
          </div>

        </Modal.Body>
      </Modal>
    </>
  );
}


export default Share;