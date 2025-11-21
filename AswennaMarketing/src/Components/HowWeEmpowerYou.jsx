import { useTranslation } from 'react-i18next';
import Growers from '../assets/HowWeEmpower/Growers 3.png';
import Opportunity from '../assets/HowWeEmpower/Oppotunity 2.png';
import Partnership from '../assets/HowWeEmpower/Partnership.png';

const HowWeEmpowerYou = () => {
    const { t } = useTranslation();

    const features = [
        {
            titleKey: "howWeEmpower.productivePartnerships.title",
            descriptionKey: "howWeEmpower.productivePartnerships.description",
            imagePath: Partnership,
        },
        {
            titleKey: "howWeEmpower.accessibleOpportunities.title",
            descriptionKey: "howWeEmpower.accessibleOpportunities.description",
            imagePath: Opportunity,
        },
        {
            titleKey: "howWeEmpower.empoweredGrowers.title",
            descriptionKey: "howWeEmpower.empoweredGrowers.description",
            imagePath: Growers,
        },
    ];

    return (
        <div className="text-white pt-5 pb-5 px-3">
            <div className="container">
                <h2 className="display-5 fw-bold mb-3">{t('howWeEmpower.title')}</h2>
                <p className="lead mb-5 text-light">
                    {t('howWeEmpower.description')}
                </p>

                <div className="row g-4">
                    {features.map((feature, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card text-white h-100 border-0" style={{ backgroundColor: '#000000' }}>
                                <div className="card-img-top" style={{ height: '200px', overflow: 'hidden' }}>
                                    <img
                                        src={feature.imagePath}
                                        alt={t(feature.titleKey)}
                                        className="w-100 h-100 object-fit-cover"
                                        style={{ backgroundColor: '#212529' }}
                                    />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title fw-bold" style={{ color: '#ffffffff' }}>{t(feature.titleKey)}</h5>
                                    <p className="card-text" style={{ color: '#A6BA9E' }}>{t(feature.descriptionKey)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};



export default HowWeEmpowerYou;