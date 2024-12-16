import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import OverviewPage from './dashboard/OverviewPage';
import SearchPage from './dashboard/SearchPage';
import ContactsPage from './dashboard/ContactsPage';
import SettingsPage from './dashboard/SettingsPage';
import ManageCreatorsPage from './dashboard/admin/ManageCreatorsPage';
import { useAuth } from '../contexts/AuthContext';

export default function DashboardPage() {
  const { user } = useAuth();
  const isAdmin = user?.email === 'admin@simplimail.xyz';

  return (
    <DashboardLayout>
      <Routes>
        <Route index element={<OverviewPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        {isAdmin && (
          <Route path="admin/creators" element={<ManageCreatorsPage />} />
        )}
      </Routes>
    </DashboardLayout>
  );
}