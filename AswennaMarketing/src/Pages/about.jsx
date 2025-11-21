import MainLayout from '../Components/Layout/MainLayout';
import SectionContainer from '../Components/Layout/SectionContainer';

const About = () => {
    return (
        <MainLayout>
            <SectionContainer>
                <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h1>About Page Content Here</h1>
                </div>
            </SectionContainer>
        </MainLayout>
    );
};

export default About;