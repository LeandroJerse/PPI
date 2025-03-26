document.addEventListener('DOMContentLoaded', function() {
    // Current year for footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Typing effect
    const typingText = document.getElementById('typing-text');
    if (typingText) {
        const texts = ["Olá visitante!!", "Sou o Leandro Marques", "Bem-vindo ao meu portfólio"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 1500; // Pause at end of text
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500; // Pause before typing next text
            }
            
            setTimeout(type, typingSpeed);
        }
        
        setTimeout(type, 1000);
    }
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (hamburger && hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            }
        });
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('form-message');
            formMessage.style.display = 'none';
            
            // Simulate form submission
            setTimeout(() => {
                formMessage.textContent = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
                formMessage.className = 'success';
                formMessage.style.display = 'block';
                contactForm.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }, 1000);
        });
    }
    
    // Email reveal button
    const emailButton = document.getElementById('email-button');
    if (emailButton) {
        emailButton.addEventListener('click', function() {
            const emailDisplay = document.getElementById('email-display');
            if (emailDisplay.classList.contains('hidden')) {
                // You should replace this with your actual email
                emailDisplay.textContent = 'leandro.marques@example.com';
                emailDisplay.classList.remove('hidden');
                this.textContent = 'Ocultar Email';
            } else {
                emailDisplay.textContent = '';
                emailDisplay.classList.add('hidden');
                this.textContent = 'Mostrar Email';
            }
        });
    }
    
    // Animate project cards on scroll
    const animateOnScroll = () => {
        const projectCards = document.querySelectorAll('.project-card');
        const windowHeight = window.innerHeight;
        
        projectCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const animationPoint = windowHeight - 100;
            
            if (cardPosition < animationPoint) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialize project card animations
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length > 0) {
        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        });
        
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Run once on page load
    }
});