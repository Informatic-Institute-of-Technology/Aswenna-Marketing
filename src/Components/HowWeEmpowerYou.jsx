
import Growers from '../assets/HowWeEmpower/Growers 3.png';
import Opportunity from '../assets/HowWeEmpower/Oppotunity 2.png';
import Partnership from '../assets/HowWeEmpower/Partnership.png';

const HowWeEmpowerYou = () => {
    const features = [
        {
            title: "Productive Partnerships",
            description: "Landowners can easily list their lands and connect with suitable farmers or investors for mutual growth.",
            imagePath: Partnership,
        },
        {
            title: "Accessible Opportunities",
            description: "Our platform opens access to a curated list of verified projects with predicted yields.",
            imagePath: Opportunity,
        },
        {
            title: "Empowered Growers",
            description: "Access to secure funding and modern tools and recommendations to maximize your harvest.",
            imagePath: Growers,
        },
    ];

    return (
        <div className="text-white pt-5 pb-5 px-3">
            <div className="container">
                <h2 className="display-5 fw-bold mb-3">How We Empower You</h2>
                <p className="lead mb-5 text-light">
                    we are transforming traditional challenges into modern opportunities through technology and  colloaboration, creating a seamless ecosystem for growth
                </p>

                <div className="row g-4">
                    {features.map((feature, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card text-white h-100 border-0" style={{ backgroundColor: '#000000' }}>
                                <div className="card-img-top" style={{ height: '200px', overflow: 'hidden' }}>
                                    <img
                                        src={feature.imagePath}
                                        alt={feature.title}
                                        className="w-100 h-100 object-fit-cover"
                                        style={{ backgroundColor: '#212529' }}
                                    />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title fw-bold" style={{ color: '#ffffffff' }}>{feature.title}</h5>
                                    <p className="card-text" style={{ color: '#A6BA9E' }}>{feature.description}</p>
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