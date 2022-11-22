import React from 'react';

interface IProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  icon: React.ReactElement;
}

const CardLayout: React.FC<IProps> = (props) => {
  const { children, title, subtitle, icon, ...other } = props;

  return (
    <div className="mt-10 flex justify-center p-3" {...other}>
      <div className="flex w-full flex-col gap-6 rounded-xl bg-[#f9f9f9] p-8 md:w-[500px]">
        <div className="flex items-center gap-4 text-[#ff4655]">
          <span className="text-3xl font-bold">{title}</span>
          {icon}
        </div>
        <span className="font-bold text-gray-500">{subtitle}</span>
        {children}
      </div>
    </div>
  );
};

export default CardLayout;
