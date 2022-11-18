import { BackgroundImage } from 'assets/images';
import Image from 'next/image';
import React from 'react';

type TProps = {
  children: React.ReactNode;
  className?: string;
};

const MainLayout: React.FC<TProps> = ({ children, ...other }) => {
  return (
    <div className="min-h-screen w-full" {...other}>
      <Image src={BackgroundImage} alt="bg" className="fixed -z-10 h-[100vh] object-cover opacity-80" />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
