import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Users, Settings } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';

const navItems = [
  { icon: Home, label: 'Overview', path: '/dashboard' },
  { icon: Search, label: 'Search Creators', path: '/dashboard/search' },
  { icon: Users, label: 'My Contacts', path: '/dashboard/contacts' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' }
];

const adminNavItems = [
  { icon: Users, label: 'Manage Creators', path: '/dashboard/admin/creators' }
];

export default function Sidebar() {
  const { user } = useAuth();
  const isAdmin = user?.email === 'admin@simplimail.xyz'; // Simple admin check

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="p-4 space-y-1">
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/dashboard'}
            className={({ isActive }) =>
              `flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors
              ${isActive
                ? 'bg-gray-50 text-black'
                : 'text-gray-600 hover:text-black hover:bg-gray-50'
              }`
            }
          >
            <Icon className="w-5 h-5 mr-3" />
            {label}
          </NavLink>
        ))}

        {isAdmin && (
          <>
            <div className="border-t border-gray-200 my-4 pt-4">
              <p className="px-4 text-xs font-semibold text-gray-400 uppercase mb-2">
                Admin
              </p>
              {adminNavItems.map(({ icon: Icon, label, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors
                    ${isActive
                      ? 'bg-gray-50 text-black'
                      : 'text-gray-600 hover:text-black hover:bg-gray-50'
                    }`
                  }
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {label}
                </NavLink>
              ))}
            </div>
          </>
        )}
      </nav>
    </aside>
  );
}