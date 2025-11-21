import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const BenefitsSection = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('farmers');

    const benefitsData = {
        farmers: [
            {
                titleKey: "benefits.increaseYield.title",
                descriptionKey: "benefits.increaseYield.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v6m0 0a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m10 0a5 5 0 0 1-5 5m5-5H7m5 5v8" />
                    </svg>
                )
            },
            {
                titleKey: "benefits.findLand.title",
                descriptionKey: "benefits.findLand.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                )
            },
            {
                titleKey: "benefits.secureFunding.title",
                descriptionKey: "benefits.secureFunding.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="7" width="18" height="13" rx="2" ry="2" />
                        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <path d="M12 12h.01" />
                    </svg>
                )
            },
        ],
        investors: [
            {
                titleKey: "benefits.increaseYield.title",
                descriptionKey: "benefits.increaseYield.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v6m0 0a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m10 0a5 5 0 0 1-5 5m5-5H7m5 5v8" />
                    </svg>
                )
            },
            {
                titleKey: "benefits.findLand.title",
                descriptionKey: "benefits.findLand.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                )
            },
            {
                titleKey: "benefits.secureFunding.title",
                descriptionKey: "benefits.secureFunding.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="7" width="18" height="13" rx="2" ry="2" />
                        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <path d="M12 12h.01" />
                    </svg>
                )
            },
        ],
        landowners: [
            {
                titleKey: "benefits.increaseYield.title",
                descriptionKey: "benefits.increaseYield.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v6m0 0a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m10 0a5 5 0 0 1-5 5m5-5H7m5 5v8" />
                    </svg>
                )
            },
            {
                titleKey: "benefits.findLand.title",
                descriptionKey: "benefits.findLand.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                )
            },
            {
                titleKey: "benefits.secureFunding.title",
                descriptionKey: "benefits.secureFunding.description",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="7" width="18" height="13" rx="2" ry="2" />
                        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <path d="M12 12h.01" />
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
        <div className="text-white pb-5 px-3" style={{ backgroundColor: '#000000' }}>
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
                            {t('benefits.farmers')}
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
                            {t('benefits.investors')}
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
                            {t('benefits.landowners')}
                        </button>
                    </li>
                </ul>                <div className="row g-4">
                    {currentBenefits.map((benefit, index) => (
                        <div key={index} className="col-md-4">
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