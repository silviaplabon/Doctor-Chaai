import React from 'react';
import './FAQ.scss'
const FAQ = () => {
  return (
    <div>
      <h5 className="text-center mb-1">FAQ</h5>
      <p className="text-center mb-2">Have Some Questions?</p>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button py-2 px-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What are Your Regular Office Hours ?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body p-2">
              <p> Life goes on when you're sick. But if you have cold symptoms, there are some things worth skipping, as well as "to dos" that can help you get better. Your body needs rest to recover. And while it's important to focus on your health, you should also be sure you're doing all you can to keep those around you from catching what you have.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed py-2 px-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              What to Do If You Are Sick ?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body py-2 px-2">
              <p> Life goes on when you're sick. But if you have cold symptoms, there are some things worth skipping, as well as "to dos" that can help you get better. Your body needs rest to recover. And while it's important to focus on your health, you should also be sure you're doing all you can to keep those around you from catching what you have.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed py-2 px-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              What is your Appointment Policy ?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body py-2 px-2">
              <p> Life goes on when you're sick. But if you have cold symptoms, there are some things worth skipping, as well as "to dos" that can help you get better. Your body needs rest to recover. And while it's important to focus on your health, you should also be sure you're doing all you can to keep those around you from catching what you have.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;