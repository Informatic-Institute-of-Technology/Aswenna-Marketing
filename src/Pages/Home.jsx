import Hero from '../Components/Hero';
import MainLayout from '../Components/Layout/MainLayout';
import SectionContainer from '../Components/Layout/SectionContainer';
import BenefitsSection from '../Components/BenefitsSection';
import CallToAction from '../Components/CallToAction';
import Footer from '../Components/Footer';
import HowWeEmpowerYou from '../Components/HowWeEmpowerYou';



const Home = () => {
    return (
        <MainLayout>
            <Hero />
            <SectionContainer hasBorder={false} className="py-5">
                <HowWeEmpowerYou />
            </SectionContainer>

            <SectionContainer hasBorder={false} className="py-5">
                <BenefitsSection />
            </SectionContainer>

            <CallToAction />
            <Footer />
        </MainLayout>
    );
};

export default Home;