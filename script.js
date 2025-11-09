// Multi-language Support
const languageSelector = document.getElementById('languageSelector');
let currentLanguage = 'en';

// Language switching function
function switchLanguage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-en]');
    
    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            // Check if it's a button or has a value attribute
            if (element.tagName === 'BUTTON' || element.tagName === 'INPUT') {
                element.textContent = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Event listener for language selector
languageSelector.addEventListener('change', (e) => {
    switchLanguage(e.target.value);
});

// Load preferred language on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        languageSelector.value = savedLanguage;
        switchLanguage(savedLanguage);
    }
});

// Sign In Function
function signIn(userType) {
    const messages = {
        en: {
            farmer: 'Welcome, Farmer! You will be redirected to the farmer dashboard.',
            landowner: 'Welcome, Landowner! You will be redirected to the landowner dashboard.',
            sponsor: 'Welcome, Sponsor! You will be redirected to the sponsor dashboard.'
        },
        si: {
            farmer: 'සාදරයෙන් පිළිගනිමු, ගොවියා! ඔබව ගොවි උපකරණ පුවරුව වෙත හරවා යවනු ලැබේ.',
            landowner: 'සාදරයෙන් පිළිගනිමු, ඉඩම් හිමියා! ඔබව ඉඩම් හිමියන්ගේ උපකරණ පුවරුව වෙත හරවා යවනු ලැබේ.',
            sponsor: 'සාදරයෙන් පිළිගනිමු, අනුග්‍රාහකයා! ඔබව අනුග්‍රාහක උපකරණ පුවරුව වෙත හරවා යවනු ලැබේ.'
        },
        ta: {
            farmer: 'வரவேற்கிறோம், விவசாயி! நீங்கள் விவசாயி டாஷ்போர்டுக்கு திருப்பிவிடப்படுவீர்கள்.',
            landowner: 'வரவேற்கிறோம், நில உரிமையாளர்! நீங்கள் நில உரிமையாளர் டாஷ்போர்டுக்கு திருப்பிவிடப்படுவீர்கள்.',
            sponsor: 'வரவேற்கிறோம், நிதியுதவியாளர்! நீங்கள் நிதியுதவியாளர் டாஷ்போர்டுக்கு திருப்பிவிடப்படுவீர்கள்.'
        }
    };
    
    const message = messages[currentLanguage][userType];
    alert(message);
    
    // In a real application, this would redirect to the appropriate dashboard
    console.log(`User type: ${userType}`);
    console.log(`Redirecting to ${userType} dashboard...`);
    
    // Simulate redirect (in production, this would be actual navigation)
    setTimeout(() => {
        window.location.href = `${userType}-dashboard.html`;
    }, 2000);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Video play tracking
const introVideo = document.getElementById('introVideo');
if (introVideo) {
    introVideo.addEventListener('play', () => {
        console.log('Introduction video started playing');
    });
    
    introVideo.addEventListener('ended', () => {
        console.log('Introduction video finished');
    });
}

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
document.querySelectorAll('.feature-card, .signin-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add active class to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
