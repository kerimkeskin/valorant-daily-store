import React from 'react';

interface IProps {
  title: string;
}

const CardTitle: React.FC<IProps> = (props) => {
  const { title } = props;

  return (
    <div className="clip rounded-t-md bg-[#ff4655] p-3">
      <span className="ml-5 font-heavy text-[#101822]">{title}</span>
    </div>
  );
};

export default CardTitle;
