import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import testimonialsData from '../data/testimonials.json';
import AddTestimonialModal from './AddTestimonialModal';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
    const { i18n } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonials, setTestimonials] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const currentLang = i18n.language;
    const sectionRef = useRef(null);

    useEffect(() => {
        const approvedTestimonials = testimonialsData.filter(t => t.approved);
        setTestimonials(approvedTestimonials);
    }, []);

    const handleAddTestimonial = async (newTestimonial) => {
        try {
            const response = await fetch('/api/testimonials', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTestimonial)
            });

            if (response.ok) {
                if (newTestimonial.approved) {
                    setTestimonials(prev => [...prev, newTestimonial]);
                }
            } else {
                throw new Error('Backend not available');
            }
        } catch (error) {
            console.log('Backend API not available, using localStorage:', error.message);
            const storedTestimonials = JSON.parse(localStorage.getItem('userTestimonials') || '[]');
            storedTestimonials.push(newTestimonial);
            localStorage.setItem('userTestimonials', JSON.stringify(storedTestimonials));
        }

        setIsModalOpen(false);

        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [testimonials.length]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const handleMouseMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;

            section.style.setProperty('--mouse-x', `${x}px`);
            section.style.setProperty('--mouse-y', `${y}px`);
        };

        const handleMouseEnter = () => {
            section.style.setProperty('--gradient-opacity', '1');
        };

        const handleMouseLeave = () => {
            section.style.setProperty('--gradient-opacity', '0');
        };

        section.addEventListener('mousemove', handleMouseMove);
        section.addEventListener('mouseenter', handleMouseEnter);
        section.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            section.removeEventListener('mousemove', handleMouseMove);
            section.removeEventListener('mouseenter', handleMouseEnter);
            section.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const getVisibleTestimonials = () => {
        if (testimonials.length === 0) return [];

        const visible = [];
        const displayCount = Math.min(3, testimonials.length);
        for (let i = 0; i < displayCount; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push(testimonials[index]);
        }
        return visible;
    };

    const visibleTestimonials = getVisibleTestimonials();

    if (testimonials.length === 0) {
        return null;
    }

    return (
        <section className="testimonials-section" style={{ backgroundColor: 'transparent' }} ref={sectionRef}>
            <div className="testimonials-container">
                <div className="testimonials-header" data-aos="fade-up">
                    <div className="header-content">
                        <h2 className="testimonials-title">
                            {currentLang === 'si' ? 'අපේ ප්‍රජාව පවසන දේ' : 'What Our Community Says'}
                        </h2>
                        <p className="testimonials-subtitle">
                            {currentLang === 'si'
                                ? 'Aswenna සමඟ තම කෘෂිකාර්මික ගමන පරිවර්තනය කළ ගොවීන්, ඉඩම් හිමියන් සහ ආයෝජකයින්ගේ සැබෑ කථා'
                                : 'Real stories from farmers, landowners, and investors who transformed their agricultural journey with Aswenna'
                            }
                        </p>
                    </div>
                    <button
                        className="add-testimonial-btn"
                        onClick={() => setIsModalOpen(true)}
                        aria-label={currentLang === 'si' ? 'ඔබේ අත්දැකීම් එක් කරන්න' : 'Add Your Experience'}
                    >
                        <svg className="plus-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        <span>{currentLang === 'si' ? 'ඔබේ අත්දැකීම් එක් කරන්න' : 'Share Your Experience'}</span>
                    </button>
                </div>

                <div className="testimonials-carousel-wrapper" data-aos="fade-up" data-aos-delay="100">
                    <button className="carousel-nav carousel-prev" onClick={handlePrev} aria-label="Previous testimonials">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <div className="testimonials-grid">
                        {visibleTestimonials.map((testimonial, index) => (
                            <div key={`${testimonial.id}-${index}`} className="testimonial-card">
                                <div className="testimonial-content">
                                    <div className="quote-icon">"</div>
                                    <p className="testimonial-text">
                                        {typeof testimonial.text === 'object' ? testimonial.text[currentLang] : testimonial.text}
                                    </p>
                                    <div className="rating">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} className="star-icon" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>

                                <div className="testimonial-author">
                                    <img
                                        src={testimonial.image}
                                        alt={typeof testimonial.name === 'object' ? testimonial.name[currentLang] : testimonial.name}
                                        className="author-avatar"
                                    />
                                    <div className="author-info">
                                        <h4 className="author-name">
                                            {typeof testimonial.name === 'object' ? testimonial.name[currentLang] : testimonial.name}
                                        </h4>
                                        <p className="author-position">
                                            {typeof testimonial.position === 'object' ? testimonial.position[currentLang] : testimonial.position}
                                        </p>
                                        <p className="author-location">
                                            {typeof testimonial.location === 'object' ? testimonial.location[currentLang] : testimonial.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-nav carousel-next" onClick={handleNext} aria-label="Next testimonials">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>

                <div className="carousel-dots">
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={index === currentIndex ? 'testimonial-dot-active' : 'testimonial-dot-inactive'}
                            onClick={() => handleDotClick(index)}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => e.key === 'Enter' && handleDotClick(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <AddTestimonialModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddTestimonial}
            />

            {showSuccess && (
                <div className="success-notification">
                    <div className="success-content">
                        <svg className="success-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <p className="success-message">
                            {currentLang === 'si'
                                ? 'ස්තූතියි! ඔබේ සාක්ෂිය අනුමැතිය සඳහා ඉදිරිපත් කර ඇත.'
                                : 'Thank you! Your testimonial has been submitted for approval.'}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TestimonialsSection;
