import React, { useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Iconify from 'components/iconify/iconify';
import { useLazyLoginQuery } from 'services/auth-service';
import MultifactorAuth from './multifactor-auth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { setCookie } from 'cookies-next';

const LoginCard = () => {
  const router = useRouter();

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [multifactor, setMultifactor] = useState<any>({
    isVisible: false,
    data: {},
  });

  const [loginRequest] = useLazyLoginQuery();

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSignIn = useCallback(() => {
    const { email, password } = state;

    if (!email || !password) return;

    const params = {
      username: email,
      password: password,
    };

    loginRequest(params)
      .unwrap()
      .then((res) => {
        if (res.type === 'multifactor') {
          return setMultifactor({ isVisible: true, data: res });
        }
        setCookie('user', res);
      })
      .then(() => {
        router.push('/daily-store');
      })
      .catch((err) => toast.error(err?.message));
  }, [loginRequest, state, router]);

  return (
    <div className="mx-3 flex w-full flex-col gap-6 rounded-xl bg-[#f9f9f9] p-8 md:w-[500px]">
      {multifactor.isVisible ? (
        <MultifactorAuth data={multifactor.data} />
      ) : (
        <>
          <span className="mb-5 text-center text-4xl font-medium">Sign In</span>
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
          <TextField
            size="medium"
            fullWidth
            label="Password"
            type="password"
            variant="filled"
            color="primary"
            name="password"
            value={state.password}
            onChange={onChangeInput}
          />
          <Button
            endIcon={<Iconify icon="material-symbols:arrow-right-alt" />}
            variant="contained"
            onClick={handleSignIn}
            className="mt-3 bg-[#ff4655] hover:bg-[#d43842]"
          >
            <span className="text-white">Sign In</span>
          </Button>
        </>
      )}
    </div>
  );
};

export default LoginCard;
