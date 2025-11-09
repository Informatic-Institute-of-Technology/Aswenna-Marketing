import { useTranslation } from 'react-i18next';
import { Plus, DollarSign, TrendingUp, Heart } from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { MainLayout } from '../../components/layout/MainLayout';

export function SponsorDashboard() {
  const { t } = useTranslation();

  const stats = [
    { label: t('sponsor.myPledges'), value: '7', icon: Heart, color: 'text-green' },
    { label: 'Total Funded', value: '$12,500', icon: DollarSign, color: 'text-blue-600' },
    { label: t('sponsor.impact'), value: '15', icon: TrendingUp, color: 'text-yellow-600' },
  ];

  const pledges = [
    { id: 1, project: 'Rice Farming Project', amount: '$3,000', status: 'Active', impact: '5 farmers' },
    { id: 2, project: 'Organic Vegetables', amount: '$2,500', status: 'Active', impact: '3 farmers' },
    { id: 3, project: 'Sustainable Irrigation', amount: '$5,000', status: 'Completed', impact: '7 farmers' },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {t('sponsor.dashboard')}
            </h1>
            <p className="text-gray-600 mt-1">{t('common.welcome')}</p>
          </div>
          <Button onClick={() => console.log('Create pledge')}>
            <Plus className="w-5 h-5 mr-2" />
            {t('sponsor.createPledge')}
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 bg-gray-100 rounded-lg ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
            </Card>
          ))}
        </div>

        {/* Pledges */}
        <Card title={t('sponsor.myPledges')}>
          <div className="space-y-4">
            {pledges.map((pledge) => (
              <div key={pledge.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{pledge.project}</h3>
                  <p className="text-sm text-gray-600">
                    {pledge.amount} • {pledge.impact}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    pledge.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {pledge.status}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
