import Navigation from '../Navigation';

const MainLayout = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'transparent',
            minHeight: '100vh',
            margin: 0,
            padding: 0,
            position: 'relative'
        }}>
            <Navigation />
            {children}
        </div>
    );
};

export default MainLayout;