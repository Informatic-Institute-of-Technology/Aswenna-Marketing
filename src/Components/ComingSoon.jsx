import { useState } from 'react';
import farmingBg from '../assets/HowWeEmpower/CommingSoon.jpg';
import './ComingSoon.css';

const ComingSoon = () => {
    const [isRinging, setIsRinging] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleNotifyClick = () => {
        if (isRinging || isSubscribed) return;
        setIsRinging(true);
        setTimeout(() => {
            setIsRinging(false);
            setIsSubscribed(true);
        }, 2000);
    };

    return (
        <div className="text-white py-5 px-3" style={{ backgroundColor: 'transparent' }}>
            <div className="container">
                <div className="text-center mb-5" data-aos="fade-up">
                    <h4 className="text-secondary mb-2" style={{ fontSize: '0.95rem', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase' }}>
                        Experience Innovation
                    </h4>
                    <h2 className="display-4 fw-bold mb-3" style={{ color: '#ffffff' }}>
                        Transform Your Farming Journey Online
                    </h2>
                    <p className="lead mx-auto" style={{ maxWidth: '700px', color: '#b8c7b8' }}>
                        Get ready for a revolutionary Aswenna platform that brings the power of Aswenna to your fingertips
                    </p>
                </div>

                <div
                    className="p-5 rounded-4 text-center position-relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, rgba(92, 237, 18, 0.1) 0%, rgba(45, 62, 45, 0.3) 100%)',
                        border: '2px solid rgba(92, 237, 18, 0.2)',
                        backdropFilter: 'blur(20px)'
                    }}
                    data-aos="zoom-in"
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `url(${farmingBg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 0.65,
                            pointerEvents: 'none'
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(45, 62, 45, 0.7) 100%)',
                            pointerEvents: 'none'
                        }}
                    />

                    <div className="position-relative">
                        <div className="mb-4">
                            <span
                                className="badge px-4 py-2 rounded-pill"
                                style={{
                                    backgroundColor: '#5CED12',
                                    color: '#0a0a0a',
                                    fontSize: '0.85rem',
                                    fontWeight: '700',
                                    letterSpacing: '1px'
                                }}
                            >
                                COMING SOON
                            </span>
                        </div>

                        <h3 className="display-6 fw-bold mb-3">Aswenna Platform Launching Soon</h3>
                        <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px', color: '#C7DDC5' }}>
                            Access Aswenna from anywhere. Manage your farms, track investments, and connect with partners through our powerful platform.
                        </p>

                        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                            <div
                                className="px-4 py-3 rounded-3 d-flex align-items-center gap-3"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    minWidth: '180px',
                                    cursor: 'not-allowed',
                                    opacity: 0.7
                                }}
                            >
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#5CED12' }}>
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                <div className="text-start">
                                    <div style={{ fontSize: '0.7rem', color: '#b8c7b8' }}>Download on the</div>
                                    <div style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff' }}>App Store</div>
                                </div>
                            </div>

                            <div
                                className="px-4 py-3 rounded-3 d-flex align-items-center gap-3"
                                style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    minWidth: '180px',
                                    cursor: 'not-allowed',
                                    opacity: 0.7
                                }}
                            >
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#5CED12' }}>
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                </svg>
                                <div className="text-start">
                                    <div style={{ fontSize: '0.7rem', color: '#b8c7b8' }}>GET IT ON</div>
                                    <div style={{ fontSize: '1rem', fontWeight: '700', color: '#ffffff' }}>Google Play</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            {isRinging || isSubscribed ? (
                                <div className="d-flex flex-column align-items-center justify-content-center">
                                    <div
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            backgroundColor: '#FF1493',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 4px 15px rgba(255, 20, 147, 0.4)'
                                        }}
                                    >
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="white"
                                            className={isRinging ? "bell-ring" : ""}
                                        >
                                            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                                        </svg>
                                    </div>
                                    {isSubscribed && (
                                        <div
                                            className="mt-3"
                                            style={{
                                                fontFamily: 'Poppins, sans-serif',
                                                fontSize: '1rem',
                                                fontWeight: '600',
                                                color: '#FF1493'
                                            }}
                                        >
                                            Subscribed ✓
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button
                                    className="btn btn-lg px-5 py-3 rounded-pill fw-semibold d-flex align-items-center justify-content-center mx-auto"
                                    style={{
                                        backgroundColor: '#5CED12',
                                        color: '#0a0a0a',
                                        border: 'none',
                                        fontSize: '1rem',
                                        transition: 'all 0.3s ease',
                                        minWidth: '280px',
                                        gap: '0.5rem'
                                    }}
                                    onClick={handleNotifyClick}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#4dd010';
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#5CED12';
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                                    </svg>
                                    <span>Notify Me When Available</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
