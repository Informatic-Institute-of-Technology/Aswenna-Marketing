import Navigation from '../Navigation';

const MainLayout = ({ children }) => {
    return (
        <div style={{ backgroundColor: 'transparent', minHeight: '100vh' }}>
            <Navigation />
            {children}
        </div>
    );
};

export default MainLayout;