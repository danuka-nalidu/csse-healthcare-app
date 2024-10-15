import React from 'react'
import {doctors} from './../../assets/data/doctors';
import DoctorCard from './DocotrCard';

const DoctorList = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
        {doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor}/>)}
    </div>
  );
};

export default DoctorList