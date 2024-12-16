import React from 'react';
import { Outlet } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';

interface AppLayoutProps {
  children?: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <AppNavbar />
      <main className="flex-grow">
        {children || <Outlet />}
      </main>
      <AppFooter />
    </div>
  );
}