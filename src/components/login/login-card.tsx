import React, { useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Iconify from 'components/iconify/iconify';

const LoginCard = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSignIn = useCallback(() => {}, []);

  return (
    <div className="mx-3 flex w-full flex-col gap-6 rounded-xl bg-[#f9f9f9] p-8 md:w-[500px]">
      <span className="mb-5 text-center text-4xl font-medium">Sign In</span>
      <TextField
        size="medium"
        fullWidth
        label="Email"
        type="email"
        variant="filled"
        color="primary"
        name="email"
        onChange={onChangeInput}
      />
      <TextField
        size="medium"
        fullWidth
        label="Password"
        type="password"
        variant="filled"
        color="primary"
        name="password"
        onChange={onChangeInput}
      />
      <Button
        endIcon={<Iconify icon="material-symbols:arrow-right-alt" />}
        variant="contained"
        onClick={handleSignIn}
        className="mt-3 bg-[#fc4753] hover:bg-[#d43842]"
      >
        <span className="text-white">Sign In</span>
      </Button>
    </div>
  );
};

export default LoginCard;
