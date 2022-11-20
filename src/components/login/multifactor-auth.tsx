import React, { useCallback, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Iconify from 'components/iconify/iconify';
import { ICookiesWithTwoFactor } from 'interfaces/auth';

interface IProps {
  cookies: ICookiesWithTwoFactor;
}

const MultifactorAuth: React.FC<IProps> = (props) => {
  const { cookies } = props;
  const [code, setCode] = useState<string>('');

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setCode(e.target.value);
  }, []);

  const handleOTPVerify = useCallback(() => {}, []);

  return (
    <>
      <span className="mb-5 text-center text-4xl font-medium">Verify Code</span>
      <TextField
        size="medium"
        fullWidth
        label="Code"
        type="number"
        variant="filled"
        color="primary"
        value={code}
        onChange={onChangeInput}
      />
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
