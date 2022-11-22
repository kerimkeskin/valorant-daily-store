import React, { useCallback, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Iconify from 'components/iconify/iconify';
import { toast } from 'react-toastify';
import CardLayout from 'components/layouts/card-layout';
import { useLazyDailyEmailQuery } from 'services/reminder.service';

const DailyEmailCard: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const [triggerDailyEmail] = useLazyDailyEmailQuery();

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    if (!email) return;

    const params = {
      email,
      language: 'tr-TR', // TODO - get language from user
    };

    triggerDailyEmail({ ...params })
      .unwrap()
      .then((res) => {
        toast.success(res.message);
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  }, [email, triggerDailyEmail]);

  return (
    <CardLayout
      title="DAILY EMAIL"
      subtitle="Get notifications about your daily store every day."
      icon={<Iconify className="text-3xl" icon="material-symbols:mark-email-unread" />}
    >
      <TextField
        size="medium"
        fullWidth
        label="Email"
        type="email"
        variant="filled"
        color="primary"
        name="email"
        value={email}
        onChange={onChangeInput}
      />

      <Button
        endIcon={<Iconify icon="material-symbols:mark-email-unread" />}
        variant="contained"
        onClick={onSubmit}
        className="bg-[#ff4655] hover:bg-[#d43842]"
      >
        <span className="text-white">Submit</span>
      </Button>
    </CardLayout>
  );
};

export default DailyEmailCard;
