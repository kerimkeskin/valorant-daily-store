import Image from 'next/image';
import React from 'react';

interface IProps {
  image: string;
  name: string;
}

const CardImage: React.FC<IProps> = (props) => {
  const { image, name } = props;

  return (
    <div className="rounded-b-md bg-[#101822] p-5">
      <div className="relative h-16">
        <Image src={image} alt={name} fill className="object-contain" />
      </div>
    </div>
  );
};

export default CardImage;
