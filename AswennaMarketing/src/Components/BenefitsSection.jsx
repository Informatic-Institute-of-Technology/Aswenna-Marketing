import { useState } from 'react';

const BenefitsSection = () => {
    const [activeTab, setActiveTab] = useState('farmers');

    const benefitsData = {
        farmers: [
            {
                title: "Increase Your Yield",
                description: "Utilize advanced analytics and recommendations to maximize your harvest and profits.",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v6m0 0a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m10 0a5 5 0 0 1-5 5m5-5H7m5 5v8" />
                    </svg>
                )
            },
            {
                title: "Find Suitable Land",
                description: "Discover and lease available land perfectly suited for your crop needs.",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                )
            },
            {
                title: "Access Secure Funding",
                description: "Connect with investors who are ready to fund your agricultural projects.",
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
                title: "Increase Your Yield",
                description: "Utilize advanced analytics and recommendations to maximize your harvest and profits.",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v6m0 0a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m10 0a5 5 0 0 1-5 5m5-5H7m5 5v8" />
                    </svg>
                )
            },
            {
                title: "Find Suitable Land",
                description: "Discover and lease available land perfectly suited for your crop needs.",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                )
            },
            {
                title: "Access Secure Funding",
                description: "Connect with investors who are ready to fund your agricultural projects.",
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
                title: "Increase Your Yield",
                description: "Utilize advanced analytics and recommendations to maximize your harvest and profits.",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v6m0 0a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m10 0a5 5 0 0 1-5 5m5-5H7m5 5v8" />
                    </svg>
                )
            },
            {
                title: "Find Suitable Land",
                description: "Discover and lease available land perfectly suited for your crop needs.",
                icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                )
            },
            {
                title: "Access Secure Funding",
                description: "Connect with investors who are ready to fund your agricultural projects.",
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
                <h4 className="text-secondary mb-2">Our Core Features</h4>
                <h2 className="display-5 fw-bold mb-3">Benefits for you</h2>
                <p className="lead mb-4 text-white">
                    Whether you are a farmer, landowner or investor, Aswenna provides tailored advantages to help you succeed
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
                            For Farmers
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
                            For Investors
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
                            For Landowners
                        </button>
                    </li>
                </ul>                <div className="row g-4">
                    {currentBenefits.map((benefit, index) => (
                        <div key={index} className="col-md-4">
                            <div className="p-4 rounded-3 h-100" style={{ backgroundColor: '#2d3e2d', border: '1px solid #3d4e3d' }}>
                                <div className="mb-3" style={{ color: '#C7DDC5' }}>
                                    {benefit.icon}
                                </div>
                                <h5 className="fw-semibold mb-3" style={{ color: '#ffffff' }}>{benefit.title}</h5>
                                <p className="mb-0" style={{ color: '#b8c7b8', fontSize: '0.95rem', lineHeight: '1.6' }}>{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BenefitsSection;