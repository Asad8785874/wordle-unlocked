
// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWordleGrid();
    addSmoothScrolling();
    animateOnScroll();
});

// Initialize the demo Wordle grid
function initializeWordleGrid() {
    const grid = document.getElementById('wordleGrid');
    if (!grid) return;
    
    // Demo word: WORLD
    const demoData = [
        ['W', 'O', 'R', 'L', 'D'],
        ['S', 'T', 'A', 'R', 'E'],
        ['P', 'L', 'A', 'N', 'T'],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ];
    
    const states = [
        ['correct', 'present', 'absent', 'correct', 'absent'],
        ['absent', 'absent', 'absent', 'correct', 'absent'],
        ['absent', 'correct', 'absent', 'absent', 'absent'],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ];
    
    // Create grid cells
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 5; col++) {
            const cell = document.createElement('div');
            cell.className = `wordle-cell ${states[row][col]}`;
            cell.textContent = demoData[row][col];
            
            // Add animation delay for demo effect
            if (demoData[row][col]) {
                cell.style.animationDelay = `${(row * 5 + col) * 0.1}s`;
                cell.style.animation = 'flipIn 0.6s ease-in-out forwards';
            }
            
            grid.appendChild(cell);
        }
    }
}

// Add CSS animation for grid cells
const style = document.createElement('style');
style.textContent = `
    @keyframes flipIn {
        0% {
            transform: rotateY(-90deg);
            opacity: 0;
        }
        50% {
            transform: rotateY(0deg);
            opacity: 0.7;
        }
        100% {
            transform: rotateY(0deg);
            opacity: 1;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .animate-on-scroll.animated {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Smooth scrolling for navigation links
function addSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = 80;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.content-card, .tip-card, .games-section, .tips-section');
    
    elements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => {
        observer.observe(el);
    });
}

// Game play function for table buttons
function playGame(word) {
    // Create a simple alert for demo purposes
    alert(`🎮 Starting Wordle with word: ${word}\n\nIn a real implementation, this would launch the game interface!`);
    
    // Animate the clicked button
    event.target.style.transform = 'scale(0.95)';
    setTimeout(() => {
        event.target.style.transform = 'scale(1)';
    }, 150);
    
    // You could redirect to the actual game here
    // window.open('https://wordleunlimitedunblocked.com/', '_blank');
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to table rows
    const tableRows = document.querySelectorAll('.games-table tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add click tracking for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // In a real application, you might want to track this click
            console.log('CTA button clicked: wordle unlimited unblocked');
        });
    });
});

// Add typing effect for hero text
function typeWriterEffect() {
    const text = "Welcome to the Ultimate Wordle Experience";
    const heroTitle = document.querySelector('.hero-content h2');
    
    if (heroTitle) {
        heroTitle.innerHTML = '🔤 ';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
}

// Initialize typing effect after page load
window.addEventListener('load', function() {
    setTimeout(typeWriterEffect, 500);
});

// Add dynamic statistics updates
function updateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const isPercentage = finalValue.includes('%');
        const isDecimal = finalValue.includes('.');
        const isComma = finalValue.includes(',');
        
        let numericValue = parseFloat(finalValue.replace(/[^\d.]/g, ''));
        
        if (isNaN(numericValue)) return;
        
        stat.textContent = '0';
        
        const increment = numericValue / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }
            
            let displayValue = Math.floor(current);
            
            if (isDecimal && current >= numericValue) {
                displayValue = numericValue;
            }
            
            if (isComma && displayValue >= 1000) {
                displayValue = displayValue.toLocaleString();
            }
            
            if (isPercentage) {
                displayValue += '%';
            }
            
            if (isDecimal && !isPercentage) {
                displayValue = current.toFixed(1);
            }
            
            stat.textContent = displayValue;
        }, 30);
    });
}

// Trigger stats animation when section comes into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            updateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const challengeStats = document.querySelector('.challenge-stats');
    if (challengeStats) {
        statsObserver.observe(challengeStats);
    }
});
