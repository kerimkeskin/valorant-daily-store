import React from 'react';
import { Logo } from 'assets/images';
import Button from '@mui/material/Button';
import Iconify from 'components/iconify/iconify';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header: React.FC = () => {
  const router = useRouter();

  const handleNavigate = (path: string) => () => {
    router.push(path);
  };

  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-between bg-[#101822] p-6 shadow-xl">
      <Link href="/">
        <Logo className="h-[40px] w-[48px]" />
      </Link>
      <div className="flex justify-end space-x-2 md:space-x-[40px]">
        <Button
          endIcon={<Iconify icon="material-symbols:add-alert" />}
          variant="contained"
          onClick={handleNavigate('/reminder')}
          className="bg-[#ff4655] hover:bg-[#d43842]"
        >
          <span className="text-white">Reminder</span>
        </Button>
        <Button
          endIcon={<Iconify icon="material-symbols:mark-email-unread" />}
          variant="contained"
          onClick={handleNavigate('/daily-email')}
          className="bg-[#ff4655] hover:bg-[#d43842]"
        >
          <span className="text-white">Daily Email</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
