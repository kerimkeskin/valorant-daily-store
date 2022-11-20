import { Grid } from '@mui/material';
import React from 'react';
import CardImage from './card-image';
import CardTitle from './card-title';

interface IProps {
  assetPath?: string;
  displayIcon: string;
  displayName: string;
  levelItem?: string | null;
  streamedVideo?: string | null;
  uuid: string;
}

const Card: React.FC<IProps> = (props) => {
  const { displayIcon, displayName, uuid } = props;

  return (
    <Grid key={uuid} item md={2} xs={12} columns={10} className="mx-5 my-3">
      <CardTitle title={displayName} />
      <CardImage image={displayIcon} name={displayName} />
    </Grid>
  );
};

export default Card;
