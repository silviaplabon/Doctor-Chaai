import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './TestimonialCard.scss';

const TestimonialCard = ({data}) => {

    return (
        <div className="testimonialCard">
            <div className="">
                <FontAwesomeIcon className="quote" icon={faQuoteRight} />
                <p>{data.message}</p>
                <div className="d-flex align-items-center mt-4">
                    <div className="testimonialImg rounded-circle overflow-hidden ms-2 me-3">
                        <img className="w-100" src={data.img} alt="profile"/>
                    </div>
                    <h4>{data.name}</h4>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;