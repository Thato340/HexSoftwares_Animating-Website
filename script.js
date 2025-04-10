document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');
    const title = document.getElementById('main-title');
    const subtitle = document.getElementById('subtitle');
    const logo = document.getElementById('logo');
    
    
    logo.addEventListener('mouseover', function() {
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFBE0B', '#FB5607', '#8338EC'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.style.color = randomColor;
    });
    
    logo.addEventListener('mouseout', function() {
        this.style.color = 'white';
    });
    
    
    ctaButton.addEventListener('click', function() {
        
        for (let i = 0; i < 50; i++) {
            createConfetti();
        }
        
        
        title.textContent = "Let's Have Some Fun!";
        subtitle.textContent = "You clicked the magic button!";
        
        
        document.querySelector('.animated-header').style.background = 
            `linear-gradient(135deg, ${getRandomColor()} 0%, ${getRandomColor()} 100%)`;
    });
    
    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFBE0B'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.style.backgroundColor = randomColor;
        });
        
        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        });
    });
    
    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.position = 'absolute';
        confetti.style.borderRadius = '50%';
        
        document.querySelector('.animated-header').appendChild(confetti);
        
        
        let position = 0;
        let rotation = 0;
        const fallInterval = setInterval(() => {
            position += 5;
            rotation += 5;
            confetti.style.top = position + 'px';
            confetti.style.transform = `rotate(${rotation}deg)`;
            
            if (position > window.innerHeight) {
                clearInterval(fallInterval);
                confetti.remove();
            }
        }, 20);
    }
});