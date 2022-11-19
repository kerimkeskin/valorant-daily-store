import { Grid } from '@mui/material';
import React from 'react';
import CardImage from './card-image';
import CardTitle from './card-title';

interface IProps {
  name: string;
  image: string;
}

const Card: React.FC<IProps> = (props) => {
  const { name, image } = props;

  return (
    <Grid key={name} item md={2} xs={12} columns={10} className="mx-5 my-3">
      <CardTitle title={name} />
      <CardImage image={image} name={name} />
    </Grid>
  );
};

export default Card;
