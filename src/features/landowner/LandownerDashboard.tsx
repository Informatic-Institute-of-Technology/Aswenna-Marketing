import { useTranslation } from 'react-i18next';
import { Plus, MapPin, Users, CheckCircle } from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { MainLayout } from '../../components/layout/MainLayout';

export function LandownerDashboard() {
  const { t } = useTranslation();

  const stats = [
    { label: t('landowner.myPlots'), value: '8', icon: MapPin, color: 'text-green' },
    { label: t('landowner.farmerRequests'), value: '4', icon: Users, color: 'text-blue-600' },
    { label: t('landowner.utilization'), value: '75%', icon: CheckCircle, color: 'text-yellow-600' },
  ];

  const plots = [
    { id: 1, name: 'Plot A1', area: '5 acres', farmer: 'John Doe', status: 'Active' },
    { id: 2, name: 'Plot B2', area: '3 acres', farmer: null, status: 'Available' },
    { id: 3, name: 'Plot C3', area: '2 acres', farmer: 'Jane Smith', status: 'Active' },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {t('landowner.dashboard')}
            </h1>
            <p className="text-gray-600 mt-1">{t('common.welcome')}</p>
          </div>
          <Button onClick={() => console.log('Add plot')}>
            <Plus className="w-5 h-5 mr-2" />
            {t('landowner.addPlot')}
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

        {/* Plots */}
        <Card title={t('landowner.myPlots')}>
          <div className="space-y-4">
            {plots.map((plot) => (
              <div key={plot.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{plot.name}</h3>
                  <p className="text-sm text-gray-600">
                    {plot.area} • {plot.farmer || 'No farmer assigned'}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    plot.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {plot.status}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
