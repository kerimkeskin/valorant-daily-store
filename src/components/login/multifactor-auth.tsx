import React, { useCallback, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Iconify from 'components/iconify/iconify';
import { ILoginTwoFactorRes } from 'interfaces/auth';
import { toast } from 'react-toastify';
import { useLazyLoginWithTwoFactorQuery } from 'services/auth-service';
import { useRouter } from 'next/router';

interface IProps {
  data: ILoginTwoFactorRes;
}

const MultifactorAuth: React.FC<IProps> = (props) => {
  const { data } = props;
  const router = useRouter();

  const [code, setCode] = useState<string>('');

  const [otpVerify] = useLazyLoginWithTwoFactorQuery();

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setCode(e.target.value);
  }, []);

  const handleOTPVerify = useCallback(() => {
    if (!code) return;

    const params = {
      code,
      cookies: data.cookies,
    };
    otpVerify(params)
      .unwrap()
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res));
        router.push('/daily-store');
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  }, [code, data.cookies, otpVerify, router]);

  return (
    <>
      <span className="mb-5 text-center text-4xl font-medium">Verify Code</span>

      <span className="text-center text-gray-500">
        For added security, enter the code we have emailed to <span className="font-bold">{data.email}</span>
      </span>
      <TextField size="medium" fullWidth label="Code" variant="filled" color="primary" value={code} onChange={onChangeInput} />
      <Button
        endIcon={<Iconify icon="material-symbols:arrow-right-alt" />}
        variant="contained"
        onClick={handleOTPVerify}
        className="mt-3 bg-[#ff4655] hover:bg-[#d43842]"
      >
        <span className="text-white">Verify Code</span>
      </Button>
    </>
  );
};

export default MultifactorAuth;
