import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import translate from 'translate';
import './AddTestimonialModal.css';

translate.engine = 'google';

const isSinhalaText = (text) => {
    const sinhalaRegex = /[\u0D80-\u0DFF]/;
    return sinhalaRegex.test(text);
};

const AddTestimonialModal = ({ isOpen, onClose, onSubmit }) => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        location: '',
        text: '',
        image: '',
        rating: 5
    });

    const [translatedData, setTranslatedData] = useState({
        nameSi: '',
        nameEn: '',
        positionSi: '',
        positionEn: '',
        locationSi: '',
        locationEn: '',
        textSi: '',
        textEn: ''
    });

    const [errors, setErrors] = useState({});
    const [translating, setTranslating] = useState(false);

    if (!isOpen) return null;

    const autoTranslate = async (text, fieldName) => {
        if (!text.trim()) {
            setTranslatedData(prev => ({
                ...prev,
                [`${fieldName}Si`]: '',
                [`${fieldName}En`]: ''
            }));
            return;
        }

        setTranslating(true);

        try {
            const isSinhala = isSinhalaText(text);
            const sourceLang = isSinhala ? 'si' : 'en';
            const targetLang = isSinhala ? 'en' : 'si';

            const translatedText = await translate(text, { from: sourceLang, to: targetLang });

            const newTranslations = {
                [`${fieldName}Si`]: isSinhala ? text : translatedText,
                [`${fieldName}En`]: isSinhala ? translatedText : text
            };

            setTranslatedData(prev => ({
                ...prev,
                ...newTranslations
            }));

            console.log(`Translation complete for ${fieldName}:`, newTranslations);
        } catch (error) {
            console.error('Translation error:', error);
            setTranslatedData(prev => ({
                ...prev,
                [`${fieldName}Si`]: text,
                [`${fieldName}En`]: text
            }));
        } finally {
            setTranslating(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleBlur = async (e) => {
        const { name, value } = e.target;
        if (value.trim() && ['name', 'position', 'location', 'text'].includes(name)) {
            await autoTranslate(value, name);
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = currentLang === 'si' ? 'නම අවශ්‍යයි' : 'Name is required';
        }
        if (!formData.position.trim()) {
            newErrors.position = currentLang === 'si' ? 'පදවිය අවශ්‍යයි' : 'Position is required';
        }
        if (!formData.location.trim()) {
            newErrors.location = currentLang === 'si' ? 'ස්ථානය අවශ්‍යයි' : 'Location is required';
        }
        if (!formData.text.trim()) {
            newErrors.text = currentLang === 'si' ? 'අත්දැකීම අවශ්‍යයි' : 'Testimonial is required';
        }
        if (!formData.image.trim()) {
            newErrors.image = currentLang === 'si' ? 'පින්තූර URL අවශ්‍යයි' : 'Image URL is required';
        }

        if (formData.name.trim() && (!translatedData.nameSi || !translatedData.nameEn)) {
            newErrors.name = currentLang === 'si' ? 'පරිවර්තනය සඳහා රැඳී සිටින්න' : 'Please wait for translation to complete';
        }
        if (formData.position.trim() && (!translatedData.positionSi || !translatedData.positionEn)) {
            newErrors.position = currentLang === 'si' ? 'පරිවර්තනය සඳහා රැඳී සිටින්න' : 'Please wait for translation to complete';
        }
        if (formData.location.trim() && (!translatedData.locationSi || !translatedData.locationEn)) {
            newErrors.location = currentLang === 'si' ? 'පරිවර්තනය සඳහා රැඳී සිටින්න' : 'Please wait for translation to complete';
        }
        if (formData.text.trim() && (!translatedData.textSi || !translatedData.textEn)) {
            newErrors.text = currentLang === 'si' ? 'පරිවර්තනය සඳහා රැඳී සිටින්න' : 'Please wait for translation to complete';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const testimonial = {
            id: Date.now(),
            name: {
                si: translatedData.nameSi,
                en: translatedData.nameEn
            },
            position: {
                si: translatedData.positionSi,
                en: translatedData.positionEn
            },
            location: {
                si: translatedData.locationSi,
                en: translatedData.locationEn
            },
            image: formData.image,
            text: {
                si: translatedData.textSi,
                en: translatedData.textEn
            },
            rating: parseInt(formData.rating),
            approved: false
        };

        onSubmit(testimonial);

        setFormData({
            name: '',
            position: '',
            location: '',
            text: '',
            image: '',
            rating: 5
        });
        setTranslatedData({
            nameSi: '',
            nameEn: '',
            positionSi: '',
            positionEn: '',
            locationSi: '',
            locationEn: '',
            textSi: '',
            textEn: ''
        });
        setErrors({});
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">
                        {currentLang === 'si' ? 'ඔබේ අත්දැකීම එකතු කරන්න' : 'Add Your Testimonial'}
                    </h2>
                    <button className="modal-close" onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div className="auto-translate-info">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    <span>
                        {currentLang === 'si'
                            ? 'ස්වයංක්‍රීය පරිවර්තනය සක්‍රීයයි - එක් භාෂාවකින් ටයිප් කරන්න, අනෙක ස්වයංක්‍රීයව පුරවනු ලබයි'
                            : 'Auto-translation enabled - Type in one language, the other fills automatically'}
                    </span>
                </div>

                <form className="modal-form" onSubmit={handleSubmit} style={{ position: 'relative' }}>
                    {translating && (
                        <div className="translating-overlay">
                            <div className="spinner"></div>
                            <span>{currentLang === 'si' ? 'පරිවර්තනය වෙමින්...' : 'Translating...'}</span>
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="name">
                            {currentLang === 'si' ? 'නම' : 'Name'}
                            <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={currentLang === 'si' ? 'ඔබේ නම ඇතුළත් කරන්න (ඕනෑම භාෂාවකින්)' : 'Enter your name (any language)'}
                            className={errors.name ? 'error' : ''}
                            disabled={translating}
                        />
                        {errors.name && <span className="error-text">{errors.name}</span>}
                        {(translatedData.nameSi || translatedData.nameEn) && (
                            <div className="translation-preview" key={`name-${translatedData.nameSi}-${translatedData.nameEn}`}>
                                <small>සිංහල: {translatedData.nameSi} | English: {translatedData.nameEn}</small>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="position">
                            {currentLang === 'si' ? 'පදවිය' : 'Position'}
                            <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={currentLang === 'si' ? 'උදා: ගොවියා / Farmer' : 'e.g., Farmer / ගොවියා'}
                            className={errors.position ? 'error' : ''}
                            disabled={translating}
                        />
                        {errors.position && <span className="error-text">{errors.position}</span>}
                        {(translatedData.positionSi || translatedData.positionEn) && (
                            <div className="translation-preview" key={`position-${translatedData.positionSi}-${translatedData.positionEn}`}>
                                <small>සිංහල: {translatedData.positionSi} | English: {translatedData.positionEn}</small>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">
                            {currentLang === 'si' ? 'ස්ථානය' : 'Location'}
                            <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder={currentLang === 'si' ? 'උදා: කොළඹ / Colombo' : 'e.g., Colombo / කොළඹ'}
                            className={errors.location ? 'error' : ''}
                            disabled={translating}
                        />
                        {errors.location && <span className="error-text">{errors.location}</span>}
                        {(translatedData.locationSi || translatedData.locationEn) && (
                            <div className="translation-preview" key={`location-${translatedData.locationSi}-${translatedData.locationEn}`}>
                                <small>සිංහල: {translatedData.locationSi} | English: {translatedData.locationEn}</small>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">
                            {currentLang === 'si' ? 'පින්තූර URL' : 'Image URL'}
                            <span className="required">*</span>
                        </label>
                        <input
                            type="url"
                            id="image"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="https://example.com/your-photo.jpg"
                            className={errors.image ? 'error' : ''}
                        />
                        {errors.image && <span className="error-text">{errors.image}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="text">
                            {currentLang === 'si' ? 'ඔබේ අත්දැකීම' : 'Your Experience'}
                            <span className="required">*</span>
                        </label>
                        <textarea
                            id="text"
                            name="text"
                            value={formData.text}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            rows="4"
                            placeholder={currentLang === 'si' ? 'Aswenna සමඟ ඔබේ අත්දැකීම විස්තර කරන්න (ඕනෑම භාෂාවකින්)...' : 'Describe your experience with Aswenna (any language)...'}
                            className={errors.text ? 'error' : ''}
                            disabled={translating}
                        />
                        {errors.text && <span className="error-text">{errors.text}</span>}
                        {(translatedData.textSi || translatedData.textEn) && (
                            <div className="translation-preview" key={`text-${translatedData.textSi}-${translatedData.textEn}`}>
                                <small>සිංහල: {translatedData.textSi.substring(0, 50)}... | English: {translatedData.textEn.substring(0, 50)}...</small>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="rating">
                            {currentLang === 'si' ? 'ඇගයීම' : 'Rating'}
                        </label>
                        <select
                            id="rating"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            disabled={translating}
                        >
                            <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                            <option value="4">⭐⭐⭐⭐ (4)</option>
                            <option value="3">⭐⭐⭐ (3)</option>
                            <option value="2">⭐⭐ (2)</option>
                            <option value="1">⭐ (1)</option>
                        </select>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn-cancel" onClick={onClose} disabled={translating}>
                            {currentLang === 'si' ? 'අවලංගු කරන්න' : 'Cancel'}
                        </button>
                        <button type="submit" className="btn-submit" disabled={translating}>
                            {currentLang === 'si' ? 'ඉදිරිපත් කරන්න' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTestimonialModal;
