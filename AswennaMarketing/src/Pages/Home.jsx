import Hero from '../Components/Hero';
import MainLayout from '../Components/Layout/MainLayout';
import SectionContainer from '../Components/Layout/SectionContainer';

const Home = () => {
    return (
        <MainLayout>
            <SectionContainer>
                <Hero />
            </SectionContainer>
        </MainLayout>
    );
};

export default Home;