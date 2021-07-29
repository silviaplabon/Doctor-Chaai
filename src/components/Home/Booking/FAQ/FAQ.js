import React from 'react';
import './FAQ.scss'
const FAQ = () => {
  return (
    <div className="container mb-5" style={{marginTop:'100px'}}>
      <div className="faqContainer m-auto">
        <div className="d-flex justify-content-center align-items-center">
          <hr className="hrStyle me-1" />
          <h5 className="text-center mb-1" style={{ color: '#1dc0bf' }}>FAQ</h5>
          <hr className="hrStyle ms-1" />
        </div>
        <h2 className="text-center mb-2" style={{ color: '#050546' }}>You Have Some Questions?</h2>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item bg-shadow mt-3">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed px-5 accordionButtonStyle " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                What are Your Regular Office Hours ?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse  collapseStyle" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body  p-0">
                <div className="accordionBodyStyle mx-5 p-3">
                  <p> Life goes on when you're sick. But if you have cold symptoms, there are some things worth skipping, as well as "to dos" that can help you get better. Your body needs rest to recover. And while it's important to focus on your health, you should also be sure you're doing all you can to keep those around you from catching what you have.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-shadow mt-3">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed px-5 accordionButtonStyle " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                What to Do If You Are Sick ?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body  p-0">
                <div className="accordionBodyStyle  mx-5 p-3">
                  <p> Life goes on when you're sick. But if you have cold symptoms, there are some things worth skipping, as well as "to dos" that can help you get better. Your body needs rest to recover. And while it's important to focus on your health, you should also be sure you're doing all you can to keep those around you from catching what you have.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="accordion-item bg-shadow mt-3">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed px-5 accordionButtonStyle " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                What is your Appointment Policy ?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body p-0 ">
                <div className="accordionBodyStyle  mx-5 p-3">
                  <p> Life goes on when you're sick. But if you have cold symptoms, there are some things worth skipping, as well as "to dos" that can help you get better. Your body needs rest to recover. And while it's important to focus on your health, you should also be sure you're doing all you can to keep those around you from catching what you have.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-shadow mt-3 mb-5">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed accordionButtonStyle px-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                What to Do If You Are Sick ?
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body p-0">
                <div className="accordionBodyStyle   mx-5 p-3">
                  <p className=""> Life goes on when you're sick. But if you have cold symptoms, there are some things worth skipping, as well as "to dos" that can help you get better. Your body needs rest to recover. And while it's important to focus on your health, you should also be sure you're doing all you can to keep those around you from catching what you have.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;