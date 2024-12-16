import React from 'react';
import { Mail, TrendingUp, Calendar } from 'lucide-react';
import { useUnlockedContacts } from '../../../hooks/useUnlockedContacts';

export default function ContactStats() {
  const { contacts } = useUnlockedContacts();

  const stats = [
    {
      icon: Mail,
      label: 'Total Contacts',
      value: contacts?.length || 0
    },
    {
      icon: TrendingUp,
      label: 'Response Rate',
      value: '72%'
    },
    {
      icon: Calendar,
      label: 'Last 30 Days',
      value: contacts?.filter(c => 
        new Date(c.created_at) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      ).length || 0
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map(({ icon: Icon, label, value }) => (
        <div
          key={label}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between mb-4">
            <Icon className="w-6 h-6 text-gray-600" />
            <span className="text-2xl font-bold">{value}</span>
          </div>
          <p className="text-gray-600 font-medium">{label}</p>
        </div>
      ))}
    </div>
  );
}