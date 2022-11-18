import MainLayout from 'components/layouts/main/main-layout';
import LoginCard from 'components/login/login-card';
import React from 'react';

export default function Login() {
  return (
    <MainLayout isLogin>
      <div className="flex h-screen items-center justify-center">
        <LoginCard />
      </div>
    </MainLayout>
  );
}
