import React from 'react';
import { dumsalons } from '../constants/dumySalons';
import { useParams } from 'react-router-dom';
import ServicesSection from '../ui/sections/ServicesSection/ServicesSection';

interface SalonDetailPageProps {}

const SalonDetailPage: React.FC<SalonDetailPageProps> = () => {
    let { id } = useParams()
    const salon = dumsalons.find(salon=>salon.salonId==Number(id))

  return (
    <div
    className='py-8 px-[5%]'>
        <p
        className="font-bold text-primary text-lg font-lexend desktop:text-2xl">
            {salon?.salonName}
        </p>
        <div
        className='grid grid-cols-1 gap-7 my-4 tablet:my-9 tablet:grid-cols-2'>
            <img src={salon?.image} alt="salon.png" 
            className='w-40 mx-auto tablet:w-56 desktop:w-72'/>
            <p>
                {salon?.description}
                <br />
                <span
                className="text-xs tablet:text:sm">
                    {salon?.location}
                </span>
            </p>
        </div>
        
        <p
        className="font-semibold text-md font-lexend desktop:text-xl">
            Available Services
        </p>
        <ServicesSection />
    </div>
  );
};

export default SalonDetailPage;
