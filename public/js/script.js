/**
 * Personal Portfolio Website - Custom JavaScript
 * Handles navigation, animations, form validation, and interactive features
 */

// ===== GLOBAL VARIABLES =====
let isScrolling = false;

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// ===== INITIALIZE WEBSITE =====
function initializeWebsite() {
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initSkillBars();
    initProjectFilters();
    initContactForm();
    initAnimations();
    
    // Show page content after initialization
    document.body.style.opacity = '1';
    
    console.log('Portfolio website initialized successfully!');
}

// ===== NAVIGATION FUNCTIONS =====
function initNavigation() {
    const navbar = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Handle navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Handle smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(targetId);
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    navbarToggler.click();
                }
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', throttle(updateActiveNavOnScroll, 100));
}

function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            updateActiveNavLink(`#${sectionId}`);
        }
    });
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should fade in
    const fadeElements = document.querySelectorAll('.about-content, .skill-item, .project-card, .contact-item');
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// ===== SKILL BARS ANIMATION =====
function initSkillBars() {
    const skillBars = document.querySelectorAll('.progress-bar');
    let skillsAnimated = false;
    
    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                animateSkillBars();
                skillsAnimated = true;
            }
        });
    }, {
        threshold: 0.3
    });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.progress-bar');
    
    skillBars.forEach((bar, index) => {
        const percentage = bar.getAttribute('data-percentage');
        
        setTimeout(() => {
            bar.style.width = percentage + '%';
        }, index * 200); // Stagger the animations
    });
}

// ===== PROJECT FILTERS =====
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            filterProjects(filter, projectItems);
        });
    });
}

function filterProjects(filter, items) {
    items.forEach(item => {
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        if (filter === '*' || item.classList.contains(filter.substring(1))) {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
            item.style.display = 'block';
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                if (item.style.opacity === '0') {
                    item.style.display = 'none';
                }
            }, 300);
        }
    });
    
    // Re-show filtered items with animation
    setTimeout(() => {
        items.forEach(item => {
            if (item.style.display !== 'none') {
                item.style.display = 'block';
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }
        });
    }, 50);
}

// ===== CONTACT FORM =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
        
        // Add real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearValidationErrors);
        });
    }
}

function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const formObject = {};
    
    // Convert FormData to object
    formData.forEach((value, key) => {
        formObject[key] = value.trim();
    });
    
    // Validate form
    if (!validateForm(formObject, form)) {
        return;
    }
    
    // Show loading state
    showLoadingState(form);
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        hideLoadingState(form);
        showFormMessage('success', 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.');
        form.reset();
        clearAllValidationErrors(form);
    }, 2000);
}

function validateForm(data, form) {
    let isValid = true;
    const fields = ['name', 'email', 'subject', 'message'];
    
    fields.forEach(field => {
        const input = form.querySelector(`[name="${field}"]`);
        if (!validateField({ target: input })) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldName = field.getAttribute('name');
    let isValid = true;
    let errorMessage = '';
    
    // Clear previous validation
    clearFieldValidation(field);
    
    // Required field validation
    if (!value) {
        errorMessage = `${capitalize(fieldName)} is required.`;
        isValid = false;
    } else {
        // Specific field validations
        switch (fieldName) {
            case 'name':
                if (value.length < 2) {
                    errorMessage = 'Name must be at least 2 characters long.';
                    isValid = false;
                }
                break;
            case 'email':
                if (!isValidEmail(value)) {
                    errorMessage = 'Please enter a valid email address.';
                    isValid = false;
                }
                break;
            case 'subject':
                if (value.length < 5) {
                    errorMessage = 'Subject must be at least 5 characters long.';
                    isValid = false;
                }
                break;
            case 'message':
                if (value.length < 10) {
                    errorMessage = 'Message must be at least 10 characters long.';
                    isValid = false;
                }
                break;
        }
    }
    
    // Apply validation styles
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        showFieldSuccess(field);
    }
    
    return isValid;
}

function clearValidationErrors(e) {
    const field = e.target;
    if (field.classList.contains('is-invalid')) {
        clearFieldValidation(field);
    }
}

function clearFieldValidation(field) {
    field.classList.remove('is-invalid', 'is-valid');
    const feedback = field.parentNode.querySelector('.invalid-feedback');
    if (feedback) {
        feedback.textContent = '';
    }
}

function clearAllValidationErrors(form) {
    const fields = form.querySelectorAll('.form-control');
    fields.forEach(field => {
        clearFieldValidation(field);
    });
}

function showFieldError(field, message) {
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');
    const feedback = field.parentNode.querySelector('.invalid-feedback');
    if (feedback) {
        feedback.textContent = message;
    }
}

function showFieldSuccess(field) {
    field.classList.add('is-valid');
    field.classList.remove('is-invalid');
    const feedback = field.parentNode.querySelector('.invalid-feedback');
    if (feedback) {
        feedback.textContent = '';
    }
}

function showLoadingState(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    submitBtn.disabled = true;
    submitBtn.classList.add('btn-loading');
    btnText.classList.add('d-none');
    btnLoading.classList.remove('d-none');
}

function hideLoadingState(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    submitBtn.disabled = false;
    submitBtn.classList.remove('btn-loading');
    btnText.classList.remove('d-none');
    btnLoading.classList.add('d-none');
}

function showFormMessage(type, message) {
    const messagesContainer = document.getElementById('form-messages');
    const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';
    
    messagesContainer.innerHTML = `
        <div class="alert ${alertClass}" role="alert">
            ${message}
        </div>
    `;
    
    // Auto-hide message after 5 seconds
    setTimeout(() => {
        messagesContainer.innerHTML = '';
    }, 5000);
    
    // Scroll to message
    messagesContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ===== ANIMATIONS =====
function initAnimations() {
    // Add entrance animations to hero elements
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-buttons');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
    
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ===== UTILITY FUNCTIONS =====
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Lazy loading for images (if needed)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You can add error reporting here
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', function(e) {
    // ESC key closes any open modals or menus
    if (e.key === 'Escape') {
        const openCollapse = document.querySelector('.navbar-collapse.show');
        if (openCollapse) {
            const toggler = document.querySelector('.navbar-toggler');
            if (toggler) {
                toggler.click();
            }
        }
    }
});

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Skip link functionality
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
    skipLink.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.focus();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Focus management for better keyboard navigation
const focusableElements = 'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select';

function trapFocus(container) {
    const focusableEls = container.querySelectorAll(focusableElements);
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    
    container.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableEl) {
                    firstFocusableEl.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// ===== CONSOLE WELCOME MESSAGE =====
console.log(`
🎉 Welcome to John Doe's Portfolio Website!
📧 Interested in working together? Contact: john.doe@example.com
🔗 GitHub: https://github.com/johndoe
💼 LinkedIn: https://linkedin.com/in/johndoe

Built with HTML5, CSS3, Bootstrap 5, and Vanilla JavaScript
`);

// ===== EXPORT FOR TESTING (if in Node.js environment) =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateField,
        isValidEmail,
        throttle,
        debounce,
        capitalize
    };
}