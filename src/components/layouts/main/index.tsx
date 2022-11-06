import { BackgroundImage } from 'components/images';
import Image from 'next/image';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children, ...other }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#FF4359] to-[#000]" {...other}>
      <Image src={BackgroundImage} alt="bg" className="absolute h-[100vh] object-cover opacity-10" />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
