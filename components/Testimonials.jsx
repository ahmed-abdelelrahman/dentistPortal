import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <Image
            width={150}
            height={150}
            src='/assets/testimonials/profile.jpg'
            alt='profile'
          />

          <div className='myCarousel'>
            <h3>Shirley Fultz</h3>
            <h4>Dentist</h4>
            <p>
              I realy liked it! it is so easy to use and simple to manage your
              dental patient's record
            </p>
          </div>
        </div>

        <div>
          <Image
            width={150}
            height={150}
            src='/assets/testimonials/profile2.jpg'
            alt='profile'
          />
          <div className='myCarousel'>
            <h3>Daniel Keystone</h3>
            <h4>Dentist</h4>
            <p>
              A very useful app with a lot of functions and very simple too!
              thanks a lot for the manufactures of this app!
            </p>
          </div>
        </div>

        <div>
          <Image
            width={150}
            height={150}
            src='/assets/testimonials/profile3.png'
            alt='profile'
          />
          <div className='myCarousel'>
            <h3>Theo Sorel</h3>
            <h4>Dentist</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
