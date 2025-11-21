import heroImage from '../assets/Hero/main.png';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-section position-relative overflow-hidden" style={{ minHeight: '100vh' }}>
            <img
                src={heroImage}
                alt="Farming - Sustainable Agriculture"
                className="hero-image position-absolute top-0 start-0 w-100 h-100"
                style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 1 }}
            />

            <div
                className="hero-overlay position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 2 }}
            ></div>

            <div className="container position-relative" style={{ zIndex: 3 }}>
                <div className="row min-vh-100 justify-content-center align-items-end py-5">
                    <div className="col-12 col-lg-10 col-xl-8 text-center hero-content" style={{ paddingBottom: '5rem' }}>
                        <h1 className="hero-title mb-4">
                            Cultivating a Sustainable Future with Aswenna
                        </h1>
                        <p className="hero-subtitle">
                            Join our collaborative farming ecosystem to enhance productivity,
                            sustainability, and community engagement in Sri Lankan agriculture.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
