import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; // Correct way to import Pagination in Swiper 7+
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Mugibar Rahuman
                </h4>
            <div className="flex items-center gap-[2px]">
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
            </div>
          </div>
          </div>
          <p className=' text-[16px] leading-7 mt-4 text-textColor font-[400]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis harum doloremque saepe amet ea, dignissimos quod quidem sit. Amet at quibusdam soluta libero, veritatis consequatur quam id voluptatem nemo dolorum?
          </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Mugibar Rahuman
                </h4>
            <div className="flex items-center gap-[2px]">
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
            </div>
          </div>
          </div>
          <p className=' text-[16px] leading-7 mt-4 text-textColor font-[400]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis harum doloremque saepe amet ea, dignissimos quod quidem sit. Amet at quibusdam soluta libero, veritatis consequatur quam id voluptatem nemo dolorum?
          </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Mugibar Rahuman
                </h4>
            <div className="flex items-center gap-[2px]">
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
            </div>
          </div>
          </div>
          <p className=' text-[16px] leading-7 mt-4 text-textColor font-[400]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis harum doloremque saepe amet ea, dignissimos quod quidem sit. Amet at quibusdam soluta libero, veritatis consequatur quam id voluptatem nemo dolorum?
          </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Mugibar Rahuman
                </h4>
            <div className="flex items-center gap-[2px]">
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
            </div>
          </div>
          </div>
          <p className=' text-[16px] leading-7 mt-4 text-textColor font-[400]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis harum doloremque saepe amet ea, dignissimos quod quidem sit. Amet at quibusdam soluta libero, veritatis consequatur quam id voluptatem nemo dolorum?
          </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Mugibar Rahuman
                </h4>
            <div className="flex items-center gap-[2px]">
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
              <HiStar className="text-yellowColor w-[18px] h-5" />
            </div>
          </div>
          </div>
          <p className=' text-[16px] leading-7 mt-4 text-textColor font-[400]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis harum doloremque saepe amet ea, dignissimos quod quidem sit. Amet at quibusdam soluta libero, veritatis consequatur quam id voluptatem nemo dolorum?
          </p>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Testimonial;