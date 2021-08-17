import React from 'react';
import { default as ReactModal } from 'react-modal';
import cancel from '../../../images/cancel.svg';

const ErrorModal = ({ modalContent }) => {
  const [modalCondition, setModalCondition, message] = modalContent;

  return (
    <ReactModal
      isOpen={modalCondition}
      onRequestClose={() => setModalCondition(false)}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          position: 'unset',
          width: '440px',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          outline: 'none',
          padding: '40px 30px',
          borderRadius: '16px',
          textAlign: 'center',
          paddingTop: '35px',
          boxShadow: '0px 0px 25px #cdcdcd',
          border: '0',
        },
      }}
    >
      <img src={cancel} alt="tick-icon" />
      <h2 className="mt-2">{message}</h2>
    </ReactModal>
  );
};

export default ErrorModal;
