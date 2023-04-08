import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Eagles from "../../assets/images/Eagles.PNG"

export default function Projects() {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item" data-value="1">1</div>,
        <div className="item" data-value="2">2</div>,
        <div className="item" data-value="3">3</div>,
        <div className="item" data-value="4">4</div>,
        <div className="item" data-value="5">5</div>,
    ];

    const Carousel = () => (
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
        />
    );

    return (
        <div className='flex-col flex items-center justify-center'>
            <p>Front End Projects</p>
        </div>
        
    );
}