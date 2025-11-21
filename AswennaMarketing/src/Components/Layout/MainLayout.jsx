import Navigation from '../Navigation';

const MainLayout = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
        </>
    );
};

export default MainLayout;