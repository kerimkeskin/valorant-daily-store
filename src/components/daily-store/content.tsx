import { Grid } from '@mui/material';
import React, { useMemo, useState } from 'react';
import Card from './card';

const Content = () => {
  const [skins] = useState([
    {
      name: 'Item 1',
      image: 'https://media.valorant-api.com/bundles/35a66d96-4c72-ea81-f09e-43a967b64c66/displayicon.png',
    },
    {
      name: 'Item 2',
      image: 'https://media.valorant-api.com/weaponskinlevels/155ba654-4afa-1029-9e71-e0b6962d5410/displayicon.png',
    },
    {
      name: 'Item 3',
      image: 'https://media.valorant-api.com/weaponskinlevels/5a773352-456e-ef0b-35ab-c99ead159264/displayicon.png',
    },
    {
      name: 'Item 4',
      image: 'https://media.valorant-api.com/weaponskinlevels/4e4ebb8d-41d0-c326-595a-1f9b257e91fa/displayicon.png',
    },
    {
      name: 'Item 5',
      image: 'https://media.valorant-api.com/weaponskinlevels/c6c7ffc4-4892-6393-38b3-1b92837a8038/displayicon.png',
    },
  ]);

  const renderSkins = useMemo(() => skins.map((item) => <Card {...item} key={item.name} />), [skins]);

  return (
    <Grid container justifyContent="center">
      {renderSkins}
    </Grid>
  );
};

export default Content;
