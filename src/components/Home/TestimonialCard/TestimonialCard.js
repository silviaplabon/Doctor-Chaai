import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './TestimonialCard.scss';

const TestimonialCard = ({data}) => {

    return (
        <div className="testimonialCard">
            <div>
                <div className="d-flex align-items-center mt-4 mb-3">
                    <div className="testimonialImg rounded-circle overflow-hidden me-3">
                        <img className="w-100" src={data.img} alt="profile"/>
                    </div>
                    <div>
                        <h4>{data.name}</h4>
                        <h6>{data.role}</h6>
                    </div>
                </div>
                <div className="testimonialStar mb-3">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <p>{data.message}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;