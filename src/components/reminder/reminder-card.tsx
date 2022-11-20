import React, { useCallback, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SkinDropdown from './skin-dropdown';
import Iconify from 'components/iconify/iconify';

type IState = {
  email: string;
  displayName: IDisplayName;
};

interface IDisplayName {
  uuid?: string;
  displayName?: string;
  levelItem?: string;
  displayIcon?: string;
  streamedVideo?: string;
  assetPath?: string;
}

const ReminderCard: React.FC = () => {
  const [state, setState] = useState<IState>({
    email: '',
    displayName: {},
  });

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const onChangeDropdown = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, value: any) => {
    setState((prev) => ({ ...prev, displayName: value }));
  }, []);

  const onSubmit = useCallback(() => {}, []);

  return (
    <div className="mt-10 flex justify-center p-3">
      <div className="flex w-full flex-col gap-6 rounded-xl bg-[#f9f9f9] p-8 md:w-[500px]">
        <div className="flex items-center gap-4 text-[#ff4655]">
          <span className="text-3xl font-bold">REMINDER</span>
          <Iconify className="text-3xl" icon="material-symbols:notification-add" />
        </div>
        <TextField
          size="medium"
          fullWidth
          label="Email"
          type="email"
          variant="filled"
          color="primary"
          name="email"
          value={state.email}
          onChange={onChangeInput}
        />
        <SkinDropdown onChange={onChangeDropdown} value={state.displayName} placeholder="Select Skin" />
        <Button
          endIcon={<Iconify icon="fluent-mdl2:mail-reminder" />}
          variant="contained"
          onClick={onSubmit}
          className="bg-[#ff4655] hover:bg-[#d43842]"
        >
          <span className="text-white">Remind</span>
        </Button>
      </div>
    </div>
  );
};

export default ReminderCard;
