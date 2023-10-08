import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1 (2).jpg'
import AVTR2 from '../../assets/pp2.jpg'
import AVTR3 from '../../assets/pp4.jpg'
import AVTR4 from '../../assets/pp3.png'


// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const data = [
  {
    avatar: AVTR1,
    name: "Akhil Pundir",
    review :  "I had the pleasure of working with Abhishek on a recent project, and I couldn't be happier with the results. He is an incredibly talented web developer who brings not only technical expertise but also a keen eye for design and user experience. He took our vague ideas and turned them into a stunning website that exceeded our expectations. His attention to detail, responsiveness, and ability to meet deadlines made the entire process smooth and stress-free. I highly recommend  Abhishek to anyone looking for a web developer who can turn their vision into a reality."
  },
  {
    avatar: AVTR2,
    name: 'Aman Kumar',
    review: "Abhishek is a true professional in every sense. He recently helped us revamp our outdated website, and the results were nothing short of remarkable. Histechnical skills are top-notch, and he has a deep understanding of the latest web development trends and technologies. What sets Abhishek apart, though, is Hiscommitment to delivering a website that not only functions flawlessly but also looks stunning and user-friendly. He communicates effectively, listens to feedback, and goes above and beyond to ensure client satisfaction. We couldn't be happier with our new website, and we owe it all to Abhishek."
  },
  {
    avatar: AVTR3,
    name: 'Rehan',
    review: "As a small business owner, I was looking for a web developer who could create a website that represented my brand and helped me connect with my target audience. Abhishek came highly recommended, and I'm so glad I chose to work with him. He not only built a website that perfectly encapsulated my vision but also provided valuable insights and suggestions to enhance its functionality and performance. Abhishek is not just a developer; he is a creative problem solver who genuinely cares about the success of his clients. If you're looking for a web developer who can transform your online presence, I wholeheartedly endorse Abhishek."
  },
  {
    avatar: AVTR4,
    name: 'Abhishek Bhatt',
    review: "I've had the privilege of collaborating with Abhishek on multiple web development projects, and each time, he has exceeded my expectations. His technical skills are unmatched, and he has an innate ability to turn complex ideas into beautifully executed websites. Abhishek is a true team player who brings a positive attitude and a solutions-oriented approach to every project. He is also incredibly reliable and consistently delivers projects on time and within budget. I have no hesitation in recommending Abhishek to anyone seeking a web developer who can deliver outstanding results."
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >

        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt="avatar" />            
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }        

      </Swiper>
    </section>
  )
}

export default Testimonials