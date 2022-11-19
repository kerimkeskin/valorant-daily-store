import React from 'react';
import MainLayout from 'components/layouts/main/main-layout';
import DailyStore from 'components/daily-store/daily-store';

const StorePage: React.FC = () => {
  return (
    <MainLayout>
      <DailyStore />
    </MainLayout>
  );
};

export default StorePage;
