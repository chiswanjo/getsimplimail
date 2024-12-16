import React from 'react';
import { Wallet, Users, TrendingUp } from 'lucide-react';
import Container from '../../components/common/Container';
import SEO from '../../components/common/SEO';

const stats = [
  {
    icon: Wallet,
    label: 'Available Credits',
    value: '150',
    change: '+10 this month',
    changeType: 'positive'
  },
  {
    icon: Users,
    label: 'Unlocked Contacts',
    value: '24',
    change: '+3 this week',
    changeType: 'positive'
  },
  {
    icon: TrendingUp,
    label: 'Success Rate',
    value: '68%',
    change: '+5% vs last month',
    changeType: 'positive'
  }
];

export default function OverviewPage() {
  return (
    <>
      <SEO
        title="Dashboard Overview - SimpliMail"
        description="View your SimpliMail dashboard statistics and recent activity"
        keywords={['dashboard', 'overview', 'stats']}
      />
      <Container className="py-8">
        <h2 className="text-2xl font-bold mb-6">Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map(({ icon: Icon, label, value, change, changeType }) => (
            <div
              key={label}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-6 h-6 text-gray-600" />
                <span className="text-2xl font-bold">{value}</span>
              </div>
              <p className="text-gray-600 font-medium">{label}</p>
              <p className={`text-sm mt-2 ${
                changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {change}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {/* Activity items will be added later */}
              <p className="text-gray-600">No recent activity</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Recommended Creators</h3>
            <div className="space-y-4">
              {/* Creator recommendations will be added later */}
              <p className="text-gray-600">No recommendations available</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}