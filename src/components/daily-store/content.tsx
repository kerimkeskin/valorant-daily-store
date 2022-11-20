import { Grid } from '@mui/material';
import React, { useMemo } from 'react';
import { useGetDailyStoreQuery } from 'services/store-service';
import Card from './card';

const Content = () => {
  const { data } = useGetDailyStoreQuery({ language: 'tr-TR' });

  const renderSkins = useMemo(
    () => data?.find((item) => item.type === 'single')?.data.map((item) => <Card {...item} key={item.uuid} />),
    [data]
  );

  return (
    <Grid container justifyContent="center">
      {renderSkins}
    </Grid>
  );
};

export default Content;
