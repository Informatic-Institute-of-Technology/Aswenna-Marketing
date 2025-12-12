import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './VideoSection.css';

const VideoSection = () => {
    const { t, i18n } = useTranslation();
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hasAnimated, setHasAnimated] = useState(false);

    const fullText = t('videoSection.description');

    useEffect(() => {
        // Only reset if not yet animated
        if (!hasAnimated) {
            setDisplayedText('');
            setCurrentIndex(0);
        } else {
            // Immediately show full text when language changes after first animation
            setDisplayedText(fullText);
        }
    }, [fullText, hasAnimated]);

    useEffect(() => {
        if (!hasAnimated && currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 30);

            return () => clearTimeout(timeout);
        } else if (!hasAnimated && currentIndex >= fullText.length && fullText.length > 0) {
            // Mark as animated once the first animation completes
            setHasAnimated(true);
        }
    }, [currentIndex, fullText, hasAnimated]);

    const getFormattedText = () => {
        if (!displayedText) return null;

        // Handle Sinhala Unicode properly - get the first grapheme cluster
        const segmenter = new Intl.Segmenter('si', { granularity: 'grapheme' });
        const segments = Array.from(segmenter.segment(displayedText));

        if (segments.length === 0) return displayedText;

        const firstLetter = segments[0].segment;
        const restOfText = displayedText.slice(firstLetter.length);

        return (
            <>
                <span className="drop-cap-letter">{firstLetter}</span>
                {restOfText}
            </>
        );
    }; const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <section
            className="video-section"
            id="video"
            style={{ backgroundColor: 'transparent' }}
            onMouseMove={handleMouseMove}
        >
            <div
                className="mouse-gradient"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124, 252, 0, 0.15), transparent 40%)`
                }}
            />
            <div className="container">
                <div className="video-content">
                    <div className="video-header text-center mb-5" data-aos="fade-up">
                        <h2 className="section-title mb-3">
                            {t('videoSection.title') || 'Transforming Agriculture Through Innovation'}
                        </h2>
                        <p className="section-subtitle">
                            {t('videoSection.subtitle') || 'Discover how we\'re building the future of farming'}
                        </p>
                    </div>

                    <div className="content-wrapper" data-aos="fade-up" data-aos-delay="200">
                        <div className="video-float-container">
                            <div className="video-wrapper">
                                <div className="video-container">
                                    <iframe
                                        className="responsive-iframe"
                                        src="https://www.youtube.com/embed/7ltm2O8UdGs"
                                        title="Sri Lankan Agriculture and Farming"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                        </div>
                        <div className="flowing-text" lang={i18n.language}>
                            {getFormattedText()}
                            <span className="typing-cursor">|</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
