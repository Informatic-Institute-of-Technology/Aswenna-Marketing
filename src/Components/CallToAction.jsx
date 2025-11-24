import { useTranslation } from 'react-i18next';
import './CallToAction.css';

const CallToAction = () => {
    const { t } = useTranslation();

    return (
        <section className="text-center py-5 px-3 mt-5" style={{ backgroundColor: 'transparent' }}>
            <div className="container max-width-lg">
                <h2 className="display-6 fw-bold text-white mb-3" data-aos="fade-up">{t('cta.title')}</h2>
                <p className="lead text-white mb-4" data-aos="fade-up" data-aos-delay="100">
                    {t('cta.description')}
                </p>

                <div className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <form className="d-flex align-items-center w-100 position-relative" style={{ maxWidth: '500px' }}>
                        <input
                            type="email"
                            placeholder={t('cta.emailPlaceholder')}
                            className="form-control email-input-placeholder"
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
                            className="btn fw-bold position-absolute"
                            style={{
                                backgroundColor: '#7CFC00',
                                color: '#000000',
                                right: '6px',
                                padding: '12px 28px',
                                borderRadius: '6px',
                                border: 'none',
                                fontSize: '1rem'
                            }}
                        >
                            {t('cta.button')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;