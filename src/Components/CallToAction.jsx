import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CallToAction.css';

const CallToAction = () => {
    const { t, i18n } = useTranslation();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            alert(i18n.language === 'si' ? 'වලංගු විද්‍යුත් ලිපිනයක් ඇතුළත් කරන්න' : 'Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:3001/api/send-welcome-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    language: i18n.language
                })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                alert(i18n.language === 'si'
                    ? 'ස්තූතියි! ඔබේ ඊ-තැපැල් වෙත පිළිගැනීමේ පණිවිඩයක් යවා ඇත.'
                    : 'Thank you! A welcome email has been sent to your inbox.');
                setEmail('');
            } else {
                throw new Error(data.message || 'Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert(i18n.language === 'si'
                ? 'ඊ-තැපෑල යැවීමට නොහැකි විය. කරුණාකර නැවත උත්සාහ කරන්න.'
                : 'Failed to send email. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="text-center py-5 px-3 mt-5" style={{ backgroundColor: 'transparent' }}>
            <div className="container max-width-lg">
                <h2 className="display-6 fw-bold text-white mb-3" data-aos="fade-up">{t('cta.title')}</h2>
                <p className="lead text-white mb-4" data-aos="fade-up" data-aos-delay="100">
                    {t('cta.description')}
                </p>

                <div className="d-flex justify-content-center flex-column align-items-center" data-aos="fade-up" data-aos-delay="200">
                    <form onSubmit={handleSubmit} className="d-flex align-items-center w-100 position-relative" style={{ maxWidth: '500px' }}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t('cta.emailPlaceholder')}
                            className="form-control email-input-placeholder"
                            disabled={isLoading}
                            style={{
                                backgroundColor: '#2E3829',
                                border: '1px solid #2E3829',
                                color: '#b8c7b8',
                                paddingRight: '130px',
                                borderRadius: '8px',
                                padding: '16px 20px',
                                fontSize: '1rem'
                            }}
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="btn fw-bold position-absolute"
                            style={{
                                backgroundColor: '#7CFC00',
                                color: '#000000',
                                right: '6px',
                                padding: '12px 28px',
                                borderRadius: '6px',
                                border: 'none',
                                fontSize: '1rem',
                                opacity: isLoading ? 0.7 : 1,
                                cursor: isLoading ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {isLoading ? (i18n.language === 'si' ? 'යවමින්...' : 'Sending...') : t('cta.button')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;