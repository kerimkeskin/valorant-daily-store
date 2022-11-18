import { HomeBG, LoginBG } from 'assets/images';
import Image from 'next/image';
import React from 'react';

type TProps = {
  children: React.ReactNode;
  className?: string;
  isLogin?: boolean;
};

const MainLayout: React.FC<TProps> = ({ isLogin, children, ...other }) => {
  return (
    <div className="min-h-screen w-full" {...other}>
      <Image src={isLogin ? LoginBG : HomeBG} alt="bg" className="absolute -z-10 h-[100vh] object-cover" />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
