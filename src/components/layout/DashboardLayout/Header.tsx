import React from 'react';
import { Bell, User } from 'lucide-react';
import { useAuth } from '../../../lib/supabase/hooks/useAuth';
import Button from '../../common/Button';

export default function Header() {
  const { signOut } = useAuth();

  return (
    <header className="h-16 bg-white border-b border-gray-200">
      <div className="h-full px-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-black rounded-full hover:bg-gray-100">
            <Bell className="w-5 h-5" />
          </button>
          
          <div className="relative group">
            <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
            </button>
            
            <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-md shadow-lg border border-gray-200 invisible group-hover:visible">
              <Button
                variant="secondary"
                className="w-full text-left px-4 py-2 text-sm"
                onClick={() => signOut()}
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}