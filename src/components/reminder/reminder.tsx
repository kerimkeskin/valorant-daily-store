import Header from 'components/header/header';
import React from 'react';
import ReminderCard from './reminder-card';

const Reminder: React.FC = () => {
  return (
    <>
      <Header />
      <ReminderCard />
    </>
  );
};

export default Reminder;
