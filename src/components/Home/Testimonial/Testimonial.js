import React from "react";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper.scss";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import './Testimonial.scss';

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

const reviewData = [
  {
    name: "Saima Akter",
    message:
      "Easy–to–understand health information to help you be ready for your appointment.Learn what you need to know about symptoms, diagnosis, and treatment options to discuss with your doctor. From major surgery to routine procedures, find out what to expect and how to prepare for a successful outcome.",
    img: "https://i.ibb.co/LdwfqsL/potrait-Photo.jpg",
    role:"CEO, Softech IT"
  },
  {
    name: "Md tauhid",
    message:
      "Easy–to–understand health information to help you be ready for your appointment.Learn what you need to know about symptoms, diagnosis, and treatment options to discuss with your doctor. From major surgery to routine procedures, find out what to expect and how to prepare for a successful outcome.",
    img: "https://i.ibb.co/d4RxzgD/isaac-ramirez-UNSj7-Bt-OK0-Q-unsplash.jpg",
    role:"Designer, IBOS Ltd"
  },
  {
    name: "Rahat",
    message:
      "Easy–to–understand health information to help you be ready for your appointment.Learn what you need to know about symptoms, diagnosis, and treatment options to discuss with your doctor. From major surgery to routine procedures, find out what to expect and how to prepare for a successful outcome.",
    img: "https://i.ibb.co/jZnydgt/foto-sushi-6anudmp-ILw4-unsplash.jpg",
    role:"Developer, Akij Group"
  },
  {
    name: "Md faisal",
    message:
      "Easy–to–understand health information to help you be ready for your appointment.Learn what you need to know about symptoms, diagnosis, and treatment options to discuss with your doctor. From major surgery to routine procedures, find out what to expect and how to prepare for a successful outcome.",
    img: "https://i.ibb.co/Swq45gH/profile8-min.jpg",
    role:"CTO, IBOS LTD"
  },
  {
    name: "Rick Dev",
    message:
      "Easy–to–understand health information to help you be ready for your appointment.Learn what you need to know about symptoms, diagnosis, and treatment options to discuss with your doctor. From major surgery to routine procedures, find out what to expect and how to prepare for a successful outcome.",
    img: "https://i.ibb.co/gM2fcpg/inhom020.jpg",
    role:"Product Manager"
  },
  {
    name: "Apu Dey",
    message:
      "Easy–to–understand  health information to help you be ready for your appointment.Learn what you need to know about symptoms, diagnosis, and treatment options to discuss with your doctor. From major surgery to routine procedures, find out what to expect and how to prepare for a successful outcome.",
    img: "https://i.ibb.co/d0gTWsB/profile7-min.jpg",
    role:"Reasearcher"
  },
  {
    name: "Md hridoy",
    message:
      "Easy–to–understand health information to help you be ready for your appointment.Learn what you need to know about symptoms, diagnosis, and treatment options to discuss with your doctor. From major surgery to routine procedures, find out what to expect and how to prepare for a successful outcome.",
    img: "https://i.ibb.co/gM2fcpg/inhom020.jpg",
    role:"PhotoGrapher"
  },
];

const Testimonial = () => {
  
  return (
    <div className="testimonialParent">
        <h2 className="testimonialTitle pt-4 mb-2">Who Are Our Happy Patients?</h2>
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            pagination={{
              "dynamicBullets": true,
              "clickable":true
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
            }}
        >
        {
            reviewData.map((data,index)=>(
                <SwiperSlide key={index} >
                    <TestimonialCard data={data}/>
                </SwiperSlide>
            ))
        }
        </Swiper>
    </div>
  );
};

export default Testimonial;
