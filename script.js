document.addEventListener('DOMContentLoaded', function() {
    
    // ---------- MOBILE HAMBURGER MENU ----------
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('open');
        });
    }
    
    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });
    
    // ---------- HEADER SCROLL EFFECT ----------
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ---------- MENU PAGE - TAB FILTERING ----------
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    if (menuTabs.length > 0) {
        menuTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                menuTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Hide all categories and show the selected one
                const target = this.dataset.target;
                menuCategories.forEach(category => {
                    category.classList.remove('active');
                    if (category.id === target) {
                        category.classList.add('active');
                    }
                });
            });
        });
    }
    
    // ---------- NEWSLETTER FORM ----------
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input[type="email"]');
            const email = input.value.trim();
            
            if (email && email.includes('@')) {
                alert('Thank you for subscribing! Check your email for your 10% off voucher.');
                input.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // ---------- CONTACT FORM ----------
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.querySelector('#fullName').value.trim();
            const email = document.querySelector('#email').value.trim();
            const message = document.querySelector('#message').value.trim();
            
            if (name && email && message) {
                alert('Thank you for your message! We\'ll get back to you within 24 hours.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // ---------- SMOOTH SCROLL FOR ANCHOR LINKS ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ---------- ORDER BUTTONS ----------
    document.querySelectorAll('.btn-order').forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.closest('.menu-card-content').querySelector('h4').textContent;
            alert(`Added "${itemName}" to your cart!`);
        });
    });
    
    // ---------- BOOK TABLE BUTTON ----------
    const bookTableBtn = document.querySelector('.btn-book-table');
    if (bookTableBtn) {
        bookTableBtn.addEventListener('click', function() {
            window.location.href = 'contact.html';
        });
    }
    
    // ---------- EVENT ENQUIRY BUTTON ----------
    const eventEnquiryBtn = document.querySelector('#eventEnquiryBtn');
    if (eventEnquiryBtn) {
        eventEnquiryBtn.addEventListener('click', function() {
            document.querySelector('#subject').value = 'Event Enquiry';
            window.scrollTo({
                top: document.querySelector('#contactForm').offsetTop - 100,
                behavior: 'smooth'
            });
        });
    }
    
    // ---------- CURRENT YEAR IN FOOTER ----------
    const yearSpan = document.querySelector('#currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    console.log('🍵 The Lapa Coffee & Kitchen - Website Loaded!');
});