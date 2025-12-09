import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import testimonialsData from '../data/testimonials.json';
import './Testimonials.css';

const Testimonials = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [randomSide, setRandomSide] = useState('left');

    const approvedTestimonials = testimonialsData.filter(t => t.approved);

    const testimonials = approvedTestimonials.map(t => ({
        id: t.id,
        name: currentLang === 'si' ? t.name.si : t.name.en,
        testimonialText: currentLang === 'si' ? t.text.si : t.text.en,
        position: currentLang === 'si' ? t.position.si : t.position.en,
        location: currentLang === 'si' ? t.location.si : t.location.en,
        image: t.image
    }));

    const validTestimonials = testimonials.filter(t => t.name && t.testimonialText);

    useEffect(() => {
        if (isPaused || validTestimonials.length === 0) return;

        const timer = setInterval(() => {
            setIsVisible(false);

            setTimeout(() => {
                setCurrentTestimonial((prev) => (prev + 1) % validTestimonials.length);
                setRandomSide(Math.random() > 0.5 ? 'right' : 'left');
                setIsVisible(true);
            }, 500);
        }, 6500);

        return () => clearInterval(timer);
    }, [isPaused, validTestimonials.length, currentLang]);

    const handleDotClick = (index) => {
        setIsPaused(true);
        setCurrentTestimonial(index);
        setTimeout(() => setIsPaused(false), 10000);
    };

    if (validTestimonials.length === 0) {
        return null;
    }

    const currentData = validTestimonials[currentTestimonial];

    console.log('Testimonials rendering:', validTestimonials.length, 'testimonials');
    console.log('Current testimonial:', currentData);

    return (
        <div className={`testimonials-popup-container ${randomSide} ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="testimonial-content-wrapper">
                {currentData.image && (
                    <div className={`testimonial-avatar-circle ${randomSide}`}>
                        <img src={currentData.image} alt={currentData.name} className="avatar-image" />
                    </div>
                )}

                <div
                    className={`testimonial-bubble-compact ${randomSide}`}
                    key={currentTestimonial}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    <span className="quote-symbol">"</span>

                    <p className="testimonial-text-compact">
                        {currentData.testimonialText}
                    </p>

                    <div className="testimonial-author-compact">
                        <p className="author-name-italic">— {currentData.name}</p>
                        {currentData.position && (
                            <p className="author-position-text">{currentData.position}</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="testimonial-dots-subtle">
                {validTestimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`dot-small ${index === currentTestimonial ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`View testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
