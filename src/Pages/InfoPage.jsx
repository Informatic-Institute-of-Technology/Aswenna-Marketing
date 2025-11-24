import logoImage from '../assets/Company/AswennaLogo.png';
import './InfoPage.css';

const InfoPage = ({ onContinue }) => {

    const benefits = [
        {
            title: "Aswenna ඔබට ලබාදෙන අවශ්‍ය සහය",
            description: "ගොවීන්, ඉඩම් හිමියන් සහ ආයෝජකයින් එකමුතුවකට සම්බන්ධ කරයි."
        },
        {
            title: "ඉඩම් / වගාවන් සඳහා විශ්වාස කළ හැකි තොරතුරු",
            description: "Aswenna ප්‍රවේශම් කළමනාකරණ දත්ත මත පදනම් වූ නිවැරදි තොරතුරු ලබාදෙයි."
        },
        {
            title: "ආයෝජන අවස්ථා පහසුවෙන් සොයාගන්න",
            description: "අවශ්‍යයාට වගා යෝජනා, ඉඩම් පැතිකඩ, ආයෝජක සම්බන්ධතා කිහිප ක්ලික් මඟින්."
        },
        {
            title: "ඵලදායී වගාවට මඟ පෙන්වන්න",
            description: "ඔබගේ අස්වැන්න වැඩි කරගැනීමට උසස් තාක්ෂණික උපදෙස් සහ සැලසුම්."
        }
    ];

    const handleContinue = () => {
        if (onContinue) {
            onContinue();
        }
    };

    return (
        <div className="info-page">
            <div className="info-header"></div>

            <div className="logo-wrapper">
                <img src={logoImage} alt="Aswenna Logo" className="info-logo" />
            </div>

            <div className="info-curved-section">
                <svg className="info-curve-shape" viewBox="0 0 1440 600" preserveAspectRatio="none">
                    <path fill="#000000" d="M0,600 Q720,0 1440,600 L1440,600 L0,600 Z"></path>
                </svg>
            </div>

            <div className="black-extension"></div>

            <div className="info-content-wrapper">
                <div className="info-content">
                    <div className="info-title-section">
                        <h1 className="info-main-title">
                            ඔබේ ගොවිතැන / ඉඩම් / ආයෝජන අවස්ථා
                        </h1>
                        <h2 className="info-sub-title">
                            (Aswenna සමඟ සාර්ථක ගමනක්)
                        </h2>
                        <p className="info-description">
                            - Aswenna ඔබට ලබාදෙන ප්‍රමුඛ ප්‍රයෝජන -
                        </p>
                    </div>

                    <div className="benefits-card">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-item">
                                <div className="check-icon">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2" />
                                        <path d="M8 12l3 3 5-5" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="benefit-text">
                                    <h3 className="benefit-title fw-bold" style={{ fontWeight: '800' }}>{benefit.title}</h3>
                                    <p className="benefit-description">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="continue-button" onClick={handleContinue}>
                        ඉදිරියට යන්න
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoPage;
