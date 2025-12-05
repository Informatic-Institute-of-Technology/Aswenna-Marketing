import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const BenefitsSection = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('farmers');

    const benefitsData = {
        farmers: [
            {
                titleKey: "benefits.farmers.smartFarming.title",
                descriptionKey: "benefits.farmers.smartFarming.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v6m0 0a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m10 0a5 5 0 0 1-5 5m5-5H7m5 5v8" />
                    </svg>
                )
            },
            {
                titleKey: "benefits.farmers.accessLand.title",
                descriptionKey: "benefits.farmers.accessLand.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                )
            },
            {
                titleKey: "benefits.farmers.getFunding.title",
                descriptionKey: "benefits.farmers.getFunding.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                        <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                )
            },
        ],
        investors: [
            {
                titleKey: "benefits.investors.diversifyPortfolio.title",
                descriptionKey: "benefits.investors.diversifyPortfolio.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                )
            },
            {
                titleKey: "benefits.investors.trackReturns.title",
                descriptionKey: "benefits.investors.trackReturns.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                )
            },
            {
                titleKey: "benefits.investors.connectFarmers.title",
                descriptionKey: "benefits.investors.connectFarmers.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                )
            },
        ],
        landowners: [
            {
                titleKey: "benefits.landowners.maximizeValue.title",
                descriptionKey: "benefits.landowners.maximizeValue.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                    </svg>
                )
            },
            {
                titleKey: "benefits.landowners.findTenants.title",
                descriptionKey: "benefits.landowners.findTenants.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                )
            },
            {
                titleKey: "benefits.landowners.secureLeases.title",
                descriptionKey: "benefits.landowners.secureLeases.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                )
            },
        ],
    };

    const currentBenefits = benefitsData[activeTab];

    const tabStyle = (tabName) => (
        `nav-link ${activeTab === tabName ? 'active fw-bold' : ''}`
    );

    return (
        <div className="text-white pb-5 px-3" style={{ backgroundColor: 'transparent' }}>
            <div className="container">
                <h4 className="text-secondary mb-2">{t('benefits.subtitle')}</h4>
                <h2 className="display-5 fw-bold mb-3">{t('benefits.title')}</h2>
                <p className="lead mb-4 text-white">
                    {t('benefits.description')}
                </p>

                <ul className="nav nav-pills mb-4 mt-5" style={{ borderBottom: '1px solid #444' }}>
                    <li className="nav-item">
                        <button
                            className={tabStyle('farmers')}
                            style={{
                                color: activeTab === 'farmers' ? '#5CED12' : '#ffffff',
                                paddingBottom: '0.75rem',
                                background: 'transparent',
                                border: 'none',
                                borderBottom: activeTab === 'farmers' ? '3px solid #5CED12' : '3px solid transparent'
                            }}
                            onClick={() => setActiveTab('farmers')}
                        >
                            {t('benefits.farmersTab')}
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={tabStyle('investors')}
                            style={{
                                color: activeTab === 'investors' ? '#5CED12' : '#ffffff',
                                paddingBottom: '0.75rem',
                                background: 'transparent',
                                border: 'none',
                                borderBottom: activeTab === 'investors' ? '3px solid #5CED12' : '3px solid transparent'
                            }}
                            onClick={() => setActiveTab('investors')}
                        >
                            {t('benefits.investorsTab')}
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={tabStyle('landowners')}
                            style={{
                                color: activeTab === 'landowners' ? '#5CED12' : '#ffffff',
                                paddingBottom: '0.75rem',
                                background: 'transparent',
                                border: 'none',
                                borderBottom: activeTab === 'landowners' ? '3px solid #5CED12' : '3px solid transparent'
                            }}
                            onClick={() => setActiveTab('landowners')}
                        >
                            {t('benefits.landownersTab')}
                        </button>
                    </li>
                </ul>                <div className="row g-4">
                    {currentBenefits.map((benefit, index) => (
                        <div key={index} className="col-md-4" data-aos="fade-up" data-aos-delay={300 + (index * 100)}>
                            <div className="p-4 rounded-3 h-100" style={{ backgroundColor: '#2d3e2d', border: '1px solid #3d4e3d' }}>
                                <div className="mb-3" style={{ color: '#C7DDC5' }}>
                                    {benefit.icon}
                                </div>
                                <h5 className="fw-semibold mb-3" style={{ color: '#ffffff' }}>{t(benefit.titleKey)}</h5>
                                <p className="mb-0" style={{ color: '#b8c7b8', fontSize: '0.95rem', lineHeight: '1.6' }}>{t(benefit.descriptionKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BenefitsSection;