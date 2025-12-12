import BenefitsSection from '../Components/BenefitsSection';
import CallToAction from '../Components/CallToAction';
import ComingSoon from '../Components/ComingSoon';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import HowWeEmpowerYou from '../Components/HowWeEmpowerYou';
import MainLayout from '../Components/Layout/MainLayout';
import SectionContainer from '../Components/Layout/SectionContainer';
import TestimonialsSection from '../Components/TestimonialsSection';
import VideoSection from '../Components/VideoSection';



const Home = () => {
    return (
        <MainLayout>
            <Hero />
            <SectionContainer hasBorder={false} className="py-5">
                <HowWeEmpowerYou />
            </SectionContainer>

            <VideoSection />

            <SectionContainer hasBorder={false} className="py-5">
                <BenefitsSection />
            </SectionContainer>

            <SectionContainer hasBorder={false} className="py-4">
                <ComingSoon />
            </SectionContainer>

            <TestimonialsSection />
            <CallToAction />
            <Footer />
        </MainLayout>
    );
};

export default Home;