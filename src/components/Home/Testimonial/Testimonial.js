import React from "react";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper.scss";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import './Testimonial.scss';

SwiperCore.use([EffectCoverflow, Autoplay]);

const reviewData = [
  {
    name: "Saima Akter",
    message:
      "Easy–to–understand health information to help you be ready for your appointment.Learn what you need to know about symptoms, diagnosis, and treatment options to discuss with your doctor. From major surgery to routine procedures, find out what to expect and how to prepare for a successful outcome.",
    img: "https://i.ibb.co/LdwfqsL/potrait-Photo.jpg",
  },
  {
    name: "Md tauhid",
    message:
      "Easy–to–understand health information to help you be ready for your appointment.Learn what you need to know about symptoms, diagnosis, and treatment options to discuss with your doctor. From major surgery to routine procedures, find out what to expect and how to prepare for a successful outcome.",
    img: "https://i.ibb.co/d4RxzgD/isaac-ramirez-UNSj7-Bt-OK0-Q-unsplash.jpg",
  },
  {
    name: "Rahat",
    message:
      "Easy–to–understand health information to help you be ready for your appointment.Learn what you need to know about symptoms, diagnosis, and treatment options to discuss with your doctor. From major surgery to routine procedures, find out what to expect and how to prepare for a successful outcome.",
    img: "https://i.ibb.co/jZnydgt/foto-sushi-6anudmp-ILw4-unsplash.jpg",
  },
  {
    name: "Md faisal",
    message:
      "Easy–to–understand health information to help you be ready for your appointment.Learn what you need to know about symptoms, diagnosis, and treatment options to discuss with your doctor. From major surgery to routine procedures, find out what to expect and how to prepare for a successful outcome.",
    img: "https://i.ibb.co/Swq45gH/profile8-min.jpg",
  },
  {
    name: "Rick Dev",
    message:
      "Easy–to–understand health information to help you be ready for your appointment.Learn what you need to know about symptoms, diagnosis, and treatment options to discuss with your doctor. From major surgery to routine procedures, find out what to expect and how to prepare for a successful outcome.",
    img: "https://i.ibb.co/gM2fcpg/inhom020.jpg",
  },
  {
    name: "Apu Dey",
    message:
      "Easy–to–understand health information to help you be ready for your appointment.Learn what you need to know about symptoms, diagnosis, and treatment options to discuss with your doctor. From major surgery to routine procedures, find out what to expect and how to prepare for a successful outcome.",
    img: "https://i.ibb.co/d0gTWsB/profile7-min.jpg",
  },
  {
    name: "Md hridoy",
    message:
      "Easy–to–understand health information to help you be ready for your appointment.Learn what you need to know about symptoms, diagnosis, and treatment options to discuss with your doctor. From major surgery to routine procedures, find out what to expect and how to prepare for a successful outcome.",
    img: "https://i.ibb.co/gM2fcpg/inhom020.jpg",
  },
];

const Testimonial = () => {
    
  return (
    <div className="py-4 testimonialParent">
        <h3 className="testimonialTitle pt-4">Our Testimonial</h3>
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            autoplay={{
                delay: 2000,
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
