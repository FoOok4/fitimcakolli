// Smooth scroll reveal animation
document.addEventListener('DOMContentLoaded', function() {
    // Add reveal class to sections
    const sections = document.querySelectorAll('.invitation, .location, .program, .rsvp, .projects, .education');
    sections.forEach(section => {
        section.classList.add('reveal');
    });

    // Reveal on scroll
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load

    // Parallax effect on hero
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        
        if (scrolled < heroHeight) {
            const parallaxValue = scrolled * 0.4;
            heroContent.style.transform = `translateY(${parallaxValue}px)`;
            heroContent.style.opacity = 1 - (scrolled / heroHeight);
        }
    });

    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function animateTimeline() {
        timelineItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 100) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }

    // Initial state for timeline items
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateTimeline);
    animateTimeline(); // Check on load

    // Project card staggered reveal
    const projectCards = document.querySelectorAll('.project-card');
    
    function animateProjects() {
        projectCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }

    // Initial state for project cards
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateProjects);
    animateProjects(); // Check on load

    // Skill tags staggered reveal
    const skillTags = document.querySelectorAll('.skill-tags span');

    function animateSkills() {
        skillTags.forEach((tag, index) => {
            const tagTop = tag.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (tagTop < windowHeight - 50) {
                setTimeout(() => {
                    tag.style.opacity = '1';
                    tag.style.transform = 'scale(1)';
                }, index * 30);
            }
        });
    }

    // Initial state for skill tags
    skillTags.forEach(tag => {
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0.8)';
        tag.style.transition = 'all 0.4s ease';
    });

    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Check on load
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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
