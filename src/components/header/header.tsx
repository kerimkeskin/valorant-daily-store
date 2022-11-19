import React from 'react';
import { Logo } from 'assets/images';
import Button from '@mui/material/Button';
import Iconify from 'components/iconify/iconify';

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-between bg-[#101822] p-6 shadow-xl">
      <Logo className="h-[40px] w-[48px]" />
      <div className="flex justify-end space-x-2 md:space-x-[40px]">
        <Button
          endIcon={<Iconify icon="material-symbols:add-alert" />}
          variant="contained"
          onClick={() => {}}
          className="bg-[#ff4655] hover:bg-[#d43842]"
        >
          <span className="text-white">Alert</span>
        </Button>
        <Button
          endIcon={<Iconify icon="material-symbols:mark-email-unread" />}
          variant="contained"
          onClick={() => {}}
          className="bg-[#ff4655] hover:bg-[#d43842]"
        >
          <span className="text-white">Daily Email</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;