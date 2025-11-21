
const SectionContainer = ({ children, className = '', hasBorder = true }) => {
    return (
        <div
            className={`section-container ${hasBorder ? '' : 'no-border'} ${className}`}
        >
            {children}
        </div>
    );
};

export default SectionContainer;