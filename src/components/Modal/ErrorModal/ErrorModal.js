import React from 'react';
import { default as ReactModal } from 'react-modal';
import cancel from '../../../images/cancel.svg';

const ErrorModal = ({modalContent}) => {
    const [modalCondition,setModalCondition,message] = modalContent;

    return (
        <ReactModal isOpen={modalCondition} style={{
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
              width:'375px',
              height:'250px',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              outline: 'none',
              padding: '20px',
              borderRadius: '16px',
              textAlign: 'center',
              paddingTop: '35px',
              boxShadow: '0px 0px 25px #cdcdcd',
              border: '0'
            }
          }}>
                <img src={cancel} alt='tick-icon'/>
                <h2 className="mt-2">{message}</h2>
                <button className="btn btn-danger mt-3" onClick={()=> setModalCondition(!modalCondition)}>Close</button>
        </ReactModal>
    );
};

export default ErrorModal;