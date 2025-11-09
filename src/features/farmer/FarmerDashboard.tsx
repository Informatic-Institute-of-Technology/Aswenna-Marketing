import { useTranslation } from 'react-i18next';
import { Plus, Sprout, TrendingUp, MapPin } from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { MainLayout } from '../../components/layout/MainLayout';

export function FarmerDashboard() {
  const { t } = useTranslation();

  const stats = [
    { label: t('farmer.myCrops'), value: '12', icon: Sprout, color: 'text-green' },
    { label: t('farmer.myLand'), value: '3', icon: MapPin, color: 'text-blue-600' },
    { label: t('farmer.sponsorOffers'), value: '5', icon: TrendingUp, color: 'text-yellow-600' },
  ];

  const recentCrops = [
    { id: 1, name: 'Rice', area: '2 acres', status: 'Growing', progress: 60 },
    { id: 2, name: 'Vegetables', area: '0.5 acres', status: 'Harvesting', progress: 90 },
    { id: 3, name: 'Corn', area: '1 acre', status: 'Planted', progress: 30 },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {t('farmer.dashboard')}
            </h1>
            <p className="text-gray-600 mt-1">{t('common.welcome')}</p>
          </div>
          <Button onClick={() => console.log('Add crop')}>
            <Plus className="w-5 h-5 mr-2" />
            {t('farmer.addCrop')}
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

        {/* Recent Crops */}
        <Card title={t('farmer.myCrops')}>
          <div className="space-y-4">
            {recentCrops.map((crop) => (
              <div key={crop.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-medium text-gray-900">{crop.name}</h3>
                    <p className="text-sm text-gray-600">{crop.area} • {crop.status}</p>
                  </div>
                  <span className="text-sm font-medium text-green">{crop.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green h-2 rounded-full transition-all"
                    style={{ width: `${crop.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
