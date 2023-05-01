import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/homeslider.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'


export default function HomeSlider() {

    const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    prevArrow : <PrevArrow />,
    nextArrow : <NextArrow />
    };

    const pictures = ["pic1.jpg", "pic2.jpg", "pic3.jpg"];

    return (
    <div>
        <Slider {...settings}>
            {
                pictures.map((pic, index)=>
                    <div key={index}>
                        <img src={require(`../img/${pic}`)} alt=""
                            width="100%" height="950px"
                        />
                    </div>
                )
            }
        </Slider>
    </div>
    );
}

function PrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className={className}
            style={{...style, display:'block', color:'red', width:"50px", height:"50px",
                    left:"5%", zIndex:"10"}}
            onClick={onClick}
        ></FontAwesomeIcon>
    )
}

function NextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <FontAwesomeIcon
            icon={faCircleChevronRight}
            className={className}
            style={{...style, display:'blcok', color:'red', width:"50px", height:"50px",
                    right:"5%", zIndex:"10"}}
            onClick={onClick}
        ></FontAwesomeIcon>
    )
}