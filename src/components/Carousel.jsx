"use client"

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import circus from '@/assets/circusdnd.jpg'
import teamwork from '@/assets/dnd-party-teamwork-help.jpg'
import combat from '@/assets/dungeons-dragons-dnd-party-combat.jpg'

const Carousel = () => {
  const images = [circus, teamwork, combat]

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  }

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-[400px]">
            <Image
              src={src}
              alt={`Slide ${index}`}
              fill
              className="object-cover rounded-xl"
              placeholder="blur"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
