import Image from 'next/image';
import HeroBg from '../../public/crow-hero.png';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="h-full w-full bg-black">
      <Image
        src={HeroBg}
        alt="Crowhub Background"
        className="min-h-full w-full pt-50"
      />
    </div>
  );
};

export default HeroSection;
