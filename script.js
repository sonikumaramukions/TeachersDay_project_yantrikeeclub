// Ultra-Modern Cyber Engineering Teachers' Day Website JavaScript 2025
class TeachersDayWebsite {
    constructor() {
        this.init();
        this.setupEventListeners();
        this.startAnimations();
        this.setupPuzzleSystem();
    }

    init() {
        this.setupConfetti();
        this.setupParticleSystem();
        this.setupMouseEffects();
        this.setupTypingAnimation();
        this.setupScrollEffects();
        this.setupThankYouAnimations();
    }

    // Advanced Confetti System with Cyber Colors
    setupConfetti() {
        this.confettiCanvas = document.getElementById('confettiCanvas');
        this.confettiCtx = this.confettiCanvas.getContext('2d');
        this.confetti = [];
        this.confettiColors = ['#00ffff', '#0080ff', '#8000ff', '#ff0080', '#00ff80', '#ff8000'];
        
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        
        // Auto-confetti every 15 seconds (reduced frequency)
        setInterval(() => this.createConfetti(), 15000);
    }

    resizeCanvas() {
        this.confettiCanvas.width = window.innerWidth;
        this.confettiCanvas.height = window.innerHeight;
    }

    createConfetti() {
        for (let i = 0; i < 80; i++) {
            this.confetti.push({
                x: Math.random() * this.confettiCanvas.width,
                y: -10,
                vx: (Math.random() - 0.5) * 10,
                vy: Math.random() * 4 + 3,
                size: Math.random() * 10 + 5,
                color: this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)],
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 15,
                shape: Math.random() > 0.5 ? 'square' : 'circle',
                opacity: Math.random() * 0.8 + 0.2
            });
        }
        this.animateConfetti();
    }

    animateConfetti() {
        this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
        
        for (let i = this.confetti.length - 1; i >= 0; i--) {
            const confetti = this.confetti[i];
            
            confetti.x += confetti.vx;
            confetti.y += confetti.vy;
            confetti.rotation += confetti.rotationSpeed;
            confetti.vy += 0.1; // Gravity
            
            this.confettiCtx.save();
            this.confettiCtx.translate(confetti.x, confetti.y);
            this.confettiCtx.rotate(confetti.rotation * Math.PI / 180);
            this.confettiCtx.globalAlpha = confetti.opacity;
            this.confettiCtx.fillStyle = confetti.color;
            
            if (confetti.shape === 'square') {
                this.confettiCtx.fillRect(-confetti.size/2, -confetti.size/2, confetti.size, confetti.size);
            } else {
                this.confettiCtx.beginPath();
                this.confettiCtx.arc(0, 0, confetti.size/2, 0, Math.PI * 2);
                this.confettiCtx.fill();
            }
            
            this.confettiCtx.restore();
            
            if (confetti.y > this.confettiCanvas.height) {
                this.confetti.splice(i, 1);
            }
        }
        
        if (this.confetti.length > 0) {
            requestAnimationFrame(() => this.animateConfetti());
        }
    }

    // Enhanced Particle System
    setupParticleSystem() {
        this.particleCanvas = document.createElement('canvas');
        this.particleCtx = this.particleCanvas.getContext('2d');
        this.particles = [];
        
        this.particleCanvas.style.position = 'fixed';
        this.particleCanvas.style.top = '0';
        this.particleCanvas.style.left = '0';
        this.particleCanvas.style.width = '100%';
        this.particleCanvas.style.height = '100%';
        this.particleCanvas.style.pointerEvents = 'none';
        this.particleCanvas.style.zIndex = '0';
        
        document.body.appendChild(this.particleCanvas);
        
        this.resizeParticleCanvas();
        window.addEventListener('resize', () => this.resizeParticleCanvas());
        
        this.createParticles();
        this.animateParticles();
    }

    resizeParticleCanvas() {
        this.particleCanvas.width = window.innerWidth;
        this.particleCanvas.height = window.innerHeight;
    }

    createParticles() {
        for (let i = 0; i < 60; i++) {
            this.particles.push({
                x: Math.random() * this.particleCanvas.width,
                y: Math.random() * this.particleCanvas.height,
                vx: (Math.random() - 0.5) * 1.2,
                vy: (Math.random() - 0.5) * 1.2,
                size: Math.random() * 3 + 1.5,
                opacity: Math.random() * 0.6 + 0.3,
                color: `hsl(${Math.random() * 60 + 180}, 85%, 75%)`,
                pulse: Math.random() * Math.PI * 2,
                life: Math.random() * 150 + 100,
                type: Math.random() > 0.7 ? 'star' : 'circle',
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 2
            });
        }
    }

    animateParticles() {
        this.particleCtx.clearRect(0, 0, this.particleCanvas.width, this.particleCanvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.pulse += 0.08;
            particle.life--;
            particle.rotation += particle.rotationSpeed;
            
            if (particle.x < 0 || particle.x > this.particleCanvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.particleCanvas.height) particle.vy *= -1;
            
            const pulseOpacity = particle.opacity + Math.sin(particle.pulse) * 0.4;
            
            this.particleCtx.save();
            this.particleCtx.translate(particle.x, particle.y);
            this.particleCtx.rotate(particle.rotation * Math.PI / 180);
            this.particleCtx.globalAlpha = pulseOpacity;
            this.particleCtx.fillStyle = particle.color;
            
            if (particle.type === 'star') {
                this.drawStar(particle.size);
            } else {
                this.particleCtx.beginPath();
                this.particleCtx.arc(0, 0, particle.size, 0, Math.PI * 2);
                this.particleCtx.fill();
            }
            
            this.particleCtx.restore();
            
            // Reset particle if life is over
            if (particle.life <= 0) {
                particle.x = Math.random() * this.particleCanvas.width;
                particle.y = Math.random() * this.particleCanvas.height;
                particle.life = Math.random() * 150 + 100;
                particle.type = Math.random() > 0.7 ? 'star' : 'circle';
            }
        });
        
        requestAnimationFrame(() => this.animateParticles());
    }

    drawStar(size) {
        const spikes = 5;
        const outerRadius = size;
        const innerRadius = size * 0.4;
        
        this.particleCtx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
            const angle = (i * Math.PI) / spikes;
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            if (i === 0) {
                this.particleCtx.moveTo(x, y);
            } else {
                this.particleCtx.lineTo(x, y);
            }
        }
        this.particleCtx.closePath();
        this.particleCtx.fill();
    }

    // Multi-Branch Puzzle System
    setupPuzzleSystem() {
        // Setup Get Started button
        this.getStartedBtn = document.getElementById('getStartedBtn');
        if (this.getStartedBtn) {
            this.getStartedBtn.addEventListener('click', () => this.showPuzzleSection());
        }
        
        // Setup Back to Top button
        this.backToTopBtn = document.getElementById('backToTopBtn');
        if (this.backToTopBtn) {
            this.backToTopBtn.addEventListener('click', () => this.backToTop());
        }
        
        this.currentQuestionIndex = 0;
        this.questions = [
            {
                branch: 'CSE',
                branchName: 'Computer Science',
                branchIcon: 'fas fa-code',
                title: 'CSE Question:',
                question: '"I am a self-balancing binary search tree where the heights of the left and right subtrees of any node differ by at most one. I maintain O(log n) time complexity for all operations. What am I?"',
                answer: 'avl',
                hint: '💡 Hint: Named after two Russian mathematicians, this tree automatically adjusts its structure to maintain balance'
            },
            {
                branch: 'ECE',
                branchName: 'Electronics',
                branchIcon: 'fas fa-microchip',
                title: 'ECE Question:',
                question: '"I am a semiconductor device with three terminals that can amplify signals and act as a switch. I have base, collector, and emitter regions. What am I?"',
                answer: 'transistor',
                hint: '💡 Hint: I am the fundamental building block of modern electronics, invented in 1947'
            },
            {
                branch: 'EEE',
                branchName: 'Electrical',
                branchIcon: 'fas fa-bolt',
                title: 'EEE Question:',
                question: '"I am a theorem that states the total power in a circuit equals the sum of powers dissipated in each component. I am fundamental to electrical circuit analysis. What am I?"',
                answer: 'conservation',
                hint: '💡 Hint: This principle ensures that energy cannot be created or destroyed, only transformed'
            },
            {
                branch: 'Mechanical',
                branchName: 'Mechanical',
                branchIcon: 'fas fa-cogs',
                title: 'Mechanical Question:',
                question: '"I am a thermodynamic cycle that consists of four processes: isentropic compression, isochoric heat addition, isentropic expansion, and isochoric heat rejection. What am I?"',
                answer: 'otto',
                hint: '💡 Hint: I am the theoretical cycle that describes the operation of spark-ignition internal combustion engines'
            },
            {
                branch: 'Civil',
                branchName: 'Civil',
                branchIcon: 'fas fa-building',
                title: 'Civil Question:',
                question: '"I am a structural analysis method that uses virtual work principles to determine deflections and rotations in statically indeterminate structures. What am I?"',
                answer: 'castigliano',
                hint: '💡 Hint: Named after an Italian engineer, I am used to find displacements in complex structural systems'
            },
            {
                branch: 'DSAI',
                branchName: 'Data Science & AI',
                branchIcon: 'fas fa-robot',
                title: 'DSAI Question:',
                question: '"I am a machine learning algorithm that finds the optimal hyperplane to separate classes in high-dimensional space. I maximize the margin between classes. What am I?"',
                answer: 'svm',
                hint: '💡 Hint: I am a supervised learning model that uses support vectors to create decision boundaries'
            }
        ];
        
        this.answerInput = document.getElementById('answerInput');
        this.submitBtn = document.getElementById('submitAnswer');
        this.hintBtn = document.getElementById('hintBtn');
        this.puzzleHint = document.getElementById('puzzleHint');
        this.hintText = document.getElementById('hintText');
        this.registrationSection = document.getElementById('registrationSection');
        this.sendGreetingBtn = document.getElementById('sendGreeting');
        this.progressFill = document.getElementById('progressFill');
        this.currentQuestionSpan = document.getElementById('currentQuestion');
        this.branchBadge = document.getElementById('branchBadge');
        this.questionTitle = document.getElementById('questionTitle');
        this.questionText = document.getElementById('questionText');
        
        this.submitBtn.addEventListener('click', () => this.checkAnswer());
        this.hintBtn.addEventListener('click', () => this.showHint());
        this.answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.checkAnswer();
        });
        
        this.sendGreetingBtn.addEventListener('click', () => this.sendGreeting());
        
        // Initialize first question
        this.updateQuestion();
    }

    updateQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        
        // Update progress
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressFill.style.width = progress + '%';
        this.currentQuestionSpan.textContent = this.currentQuestionIndex + 1;
        
        // Update branch badge
        this.branchBadge.innerHTML = `<i class="${question.branchIcon}"></i><span>${question.branchName}</span>`;
        
        // Update question content
        this.questionTitle.textContent = question.title;
        this.questionText.textContent = question.question;
        this.hintText.textContent = question.hint;
        
        // Reset input and hint
        this.answerInput.value = '';
        this.puzzleHint.style.display = 'none';
        this.hintBtn.innerHTML = '<span>💡 Need a Hint?</span><i class="fas fa-lightbulb"></i>';
        this.hintBtn.style.background = 'linear-gradient(45deg, var(--neon-orange), var(--neon-pink))';
        
        // Focus on input
        this.answerInput.focus();
    }

    showHint() {
        if (this.puzzleHint.style.display === 'none') {
            this.puzzleHint.style.display = 'block';
            this.hintBtn.innerHTML = '<span>💡 Hide Hint</span><i class="fas fa-eye-slash"></i>';
            this.hintBtn.style.background = 'linear-gradient(45deg, var(--neon-green), var(--neon-cyan))';
        } else {
            this.puzzleHint.style.display = 'none';
            this.hintBtn.innerHTML = '<span>💡 Need a Hint?</span><i class="fas fa-lightbulb"></i>';
            this.hintBtn.style.background = 'linear-gradient(45deg, var(--neon-orange), var(--neon-pink))';
        }
    }

    checkAnswer() {
        const userAnswer = this.answerInput.value.toLowerCase().trim();
        const currentQuestion = this.questions[this.currentQuestionIndex];
        
        if (userAnswer === currentQuestion.answer) {
            this.showSuccess();
            this.createSuccessConfetti();
        } else {
            this.showError();
        }
    }

    showSuccess() {
        // Animate success
        this.submitBtn.innerHTML = '<span>✓ Correct!</span><i class="fas fa-check"></i>';
        this.submitBtn.style.background = 'linear-gradient(45deg, var(--neon-green), var(--neon-cyan))';
        
        setTimeout(() => {
            this.currentQuestionIndex++;
            
            if (this.currentQuestionIndex < this.questions.length) {
                // Move to next question
                this.updateQuestion();
                this.submitBtn.innerHTML = '<span>Submit Answer</span><i class="fas fa-rocket"></i>';
                this.submitBtn.style.background = 'linear-gradient(45deg, var(--neon-green), var(--neon-cyan))';
            } else {
                // All questions completed
                this.showFinalSuccess();
            }
        }, 1500);
    }

    showError() {
        this.answerInput.style.borderColor = '#ff0066';
        this.answerInput.style.boxShadow = '0 0 20px #ff0066';
        
        setTimeout(() => {
            this.answerInput.style.borderColor = '';
            this.answerInput.style.boxShadow = '';
        }, 2000);
    }

    showPuzzleSection() {
        // Smooth scroll to puzzle section
        const puzzleSection = document.querySelector('.puzzle-section');
        puzzleSection.style.display = 'block';
        puzzleSection.style.opacity = '0';
        puzzleSection.style.transform = 'translateY(50px)';
        
        // Smooth scroll to puzzle section
        puzzleSection.scrollIntoView({ behavior: 'smooth' });
        
        // Animate puzzle section appearance
        setTimeout(() => {
            puzzleSection.style.transition = 'all 1s ease';
            puzzleSection.style.opacity = '1';
            puzzleSection.style.transform = 'translateY(0)';
        }, 300);
        
        // Hide hero section smoothly
        const heroSection = document.querySelector('.hero');
        heroSection.style.transition = 'all 0.8s ease';
        heroSection.style.opacity = '0.3';
        heroSection.style.transform = 'scale(0.95)';
    }

    backToTop() {
        // Show hero section smoothly
        const heroSection = document.querySelector('.hero');
        heroSection.style.transition = 'all 0.8s ease';
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'scale(1)';
        
        // Hide puzzle section
        const puzzleSection = document.querySelector('.puzzle-section');
        puzzleSection.style.transition = 'all 0.8s ease';
        puzzleSection.style.opacity = '0';
        puzzleSection.style.transform = 'translateY(50px)';
        
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Hide puzzle section after animation
        setTimeout(() => {
            puzzleSection.style.display = 'none';
        }, 800);
    }

    showFinalSuccess() {
        // Hide puzzle section
        document.querySelector('.puzzle-section').style.display = 'none';
        
        // Show registration section with animation
        this.registrationSection.style.display = 'block';
        this.registrationSection.style.opacity = '0';
        this.registrationSection.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            this.registrationSection.style.transition = 'all 1s ease';
            this.registrationSection.style.opacity = '1';
            this.registrationSection.style.transform = 'translateY(0)';
        }, 100);
        
        // Create success animation
        this.createSuccessAnimation();
    }

    createSuccessAnimation() {
        // Animate success icon with enhanced effects
        const successIcon = document.querySelector('.success-icon');
        successIcon.style.animation = 'successPulse 0.5s ease-in-out 3';
        
        // Add floating particles around success icon
        this.createSuccessParticles();
        
        // Animate form inputs with staggered entrance
        const formInputs = document.querySelectorAll('.form-input');
        formInputs.forEach((input, index) => {
            setTimeout(() => {
                input.style.opacity = '0';
                input.style.transform = 'translateX(-30px) scale(0.9)';
                input.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                
                setTimeout(() => {
                    input.style.opacity = '1';
                    input.style.transform = 'translateX(0) scale(1)';
                }, 150);
            }, index * 250);
        });
        
        // Animate success message
        const successMessage = document.querySelector('.success-message');
        successMessage.style.opacity = '0';
        successMessage.style.transform = 'translateY(20px)';
        successMessage.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            successMessage.style.opacity = '1';
            successMessage.style.transform = 'translateY(0)';
        }, 800);
    }

    createSuccessParticles() {
        // Create floating success particles around the success icon
        const successIcon = document.querySelector('.success-icon');
        const rect = successIcon.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                this.createFloatingParticle(centerX, centerY);
            }, i * 100);
        }
    }

    createFloatingParticle(x, y) {
        const particle = document.createElement('div');
        const size = Math.random() * 8 + 4;
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 100 + 50;
        const finalX = x + Math.cos(angle) * distance;
        const finalY = y + Math.sin(angle) * distance;
        
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            background: var(--neon-green);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9997;
            opacity: 0.8;
            box-shadow: 0 0 10px var(--neon-green);
            animation: floatParticle 2s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                document.body.removeChild(particle);
            }
        }, 2000);
    }

    createSuccessConfetti() {
        // Create special success confetti with enhanced effects
        for (let i = 0; i < 200; i++) {
            this.confetti.push({
                x: Math.random() * this.confettiCanvas.width,
                y: -10,
                vx: (Math.random() - 0.5) * 15,
                vy: Math.random() * 6 + 5,
                size: Math.random() * 15 + 8,
                color: this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)],
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 25,
                shape: Math.random() > 0.5 ? 'square' : 'circle',
                opacity: Math.random() * 0.9 + 0.1,
                gravity: Math.random() * 0.2 + 0.1,
                bounce: Math.random() * 0.8 + 0.2
            });
        }
        
        // Add special celebration effects
        this.createCelebrationRings();
        this.animateConfetti();
    }

    createCelebrationRings() {
        // Create expanding celebration rings
        const centerX = this.confettiCanvas.width / 2;
        const centerY = this.confettiCanvas.height / 2;
        
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                this.createExpandingRing(centerX, centerY, i * 100);
            }, i * 200);
        }
    }

    createExpandingRing(x, y, delay) {
        const ring = document.createElement('div');
        ring.style.cssText = `
            position: fixed;
            left: ${x - 50}px;
            top: ${y - 50}px;
            width: 100px;
            height: 100px;
            border: 3px solid var(--neon-cyan);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            opacity: 0.8;
            animation: expandRing 1s ease-out forwards;
        `;
        
        document.body.appendChild(ring);
        
        setTimeout(() => {
            document.body.removeChild(ring);
        }, 1000);
    }

    async sendGreeting() {
        const name = document.getElementById('facultyName').value.trim();
        const email = document.getElementById('facultyEmail').value.trim();
        
        if (!name || !email) {
            alert('Please fill in all fields');
            return;
        }
        
        // Show loading state
        this.sendGreetingBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
        this.sendGreetingBtn.disabled = true;
        
        try {
            const response = await fetch('/api/send-greeting', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email })
            });
            
            const result = await response.json();
            
            if (result.success) {
                this.showSuccessModal();
                this.createSuccessConfetti();
                console.log('Email sent successfully to:', email);
            } else {
                alert('Failed to send email: ' + result.message);
            }
            
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Network error. Please try again.');
        } finally {
            // Reset button
            this.sendGreetingBtn.innerHTML = '<span>Send My Greeting</span><i class="fas fa-paper-plane"></i>';
            this.sendGreetingBtn.disabled = false;
        }
    }

    showSuccessModal() {
        const modal = document.getElementById('successModal');
        modal.style.display = 'flex';
        
        // Animate modal content
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.animation = 'modalSlideIn 0.5s ease-out';
    }

    // Enhanced Mouse Effects with Improved Performance
    setupMouseEffects() {
        this.mouse = { x: 0, y: 0 };
        this.lastUpdate = 0;
        this.updateInterval = 16; // ~60fps
        
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            
            // Throttle updates for better performance
            const now = performance.now();
            if (now - this.lastUpdate > this.updateInterval) {
                this.updateMouseEffects();
                this.lastUpdate = now;
            }
        });
        
        // Enhanced click effects
        document.addEventListener('click', (e) => this.createClickEffect(e));
        
        // Add touch support for mobile
        document.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            this.mouse.x = touch.clientX;
            this.mouse.y = touch.clientY;
            this.createClickEffect(touch);
        });
    }

    updateMouseEffects() {
        // Update floating elements with mouse parallax
        const elements = document.querySelectorAll('.element');
        elements.forEach((element, index) => {
            const speed = (index + 1) * 0.008;
            const x = (this.mouse.x - window.innerWidth / 2) * speed;
            const y = (this.mouse.y - window.innerHeight / 2) * speed;
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        // Update showcase items with mouse proximity
        const showcaseItems = document.querySelectorAll('.showcase-item');
        showcaseItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distance = Math.sqrt(
                Math.pow(this.mouse.x - centerX, 2) + 
                Math.pow(this.mouse.y - centerY, 2)
            );
            
            if (distance < 250) {
                const intensity = 1 - (distance / 250);
                item.style.transform = `scale(${1 + intensity * 0.08})`;
                item.style.boxShadow = `0 0 ${25 + intensity * 30}px rgba(0, 255, 255, ${intensity * 0.5})`;
            } else {
                item.style.transform = 'scale(1)';
                item.style.boxShadow = '';
            }
        });
    }

    createClickEffect(e) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            left: ${e.clientX - 25}px;
            top: ${e.clientY - 25}px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0,255,255,0.4) 0%, transparent 70%);
            pointer-events: none;
            z-index: 9999;
            animation: rippleEffect 0.8s ease-out forwards;
        `;
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            document.body.removeChild(ripple);
        }, 800);
        
        // Only create confetti for specific interactions, not every click
        // Removed: this.createConfetti();
    }

    // Enhanced Typing Animation
    setupTypingAnimation() {
        const titleElement = document.querySelector('.main-title');
        if (titleElement) {
            setTimeout(() => {
                this.typeText(titleElement, 'Happy Teachers\' Day', 120);
            }, 1000);
        }
    }

    typeText(element, text, speed) {
        element.textContent = '';
        let i = 0;
        
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                this.addGlowEffect(element);
            }
        }, speed);
    }

    addGlowEffect(element) {
        element.style.animation = 'textGlow 3s ease-in-out infinite alternate';
    }

    // Thank You Animations
    setupThankYouAnimations() {
        const thankYouCard = document.querySelector('.thank-you-card');
        if (thankYouCard) {
            setTimeout(() => {
                thankYouCard.style.opacity = '0';
                thankYouCard.style.transform = 'translateY(50px)';
                thankYouCard.style.transition = 'all 1.5s ease';
                
                setTimeout(() => {
                    thankYouCard.style.opacity = '1';
                    thankYouCard.style.transform = 'translateY(0)';
                }, 100);
            }, 2000);
        }
    }

    // Scroll Effects
    setupScrollEffects() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // Only create confetti for important sections
                    if (entry.target.classList.contains('thank-you-card')) {
                        this.createConfetti();
                    }
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.showcase-item, .greeting-card, .thank-you-card').forEach(el => {
            observer.observe(el);
        });
    }

    // Start All Animations
    startAnimations() {
        // Animate showcase items on load
        const showcaseItems = document.querySelectorAll('.showcase-item');
        showcaseItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(50px)';
                item.style.transition = 'all 1s ease';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            }, index * 200);
        });
        
        // Animate greeting card
        const greetingCard = document.querySelector('.greeting-card');
        if (greetingCard) {
            setTimeout(() => {
                greetingCard.style.opacity = '0';
                greetingCard.style.transform = 'translateY(50px)';
                greetingCard.style.transition = 'all 1.2s ease';
                
                setTimeout(() => {
                    greetingCard.style.opacity = '1';
                    greetingCard.style.transform = 'translateY(0)';
                }, 100);
            }, 1000);
        }
    }

    // Event Listeners
    setupEventListeners() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case ' ':
                    e.preventDefault();
                    // Only create confetti on spacebar, not every key
                    this.createConfetti();
                    break;
                case 'Enter':
                    // Only create confetti on Enter in specific contexts
                    if (document.activeElement === this.answerInput) {
                        // Don't create confetti for form submission
                    } else {
                        this.createConfetti();
                    }
                    break;
                case 'Escape':
                    this.resetAnimations();
                    break;
            }
        });
        
        // Touch events for mobile
        document.addEventListener('touchstart', (e) => {
            this.createClickEffect({
                clientX: e.touches[0].clientX,
                clientY: e.touches[0].clientY
            });
        });
        
        // Showcase item interactions
        document.querySelectorAll('.showcase-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                // Only create confetti on showcase hover
                this.createConfetti();
                item.style.transform = 'translateY(-15px) scale(1.05)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    resetAnimations() {
        document.querySelectorAll('.showcase-item, .greeting-card, .thank-you-card').forEach(el => {
            el.style.animation = 'none';
            setTimeout(() => {
                el.style.animation = '';
            }, 10);
        });
    }
}

// Global function to close modal
function closeModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'none';
}

// Add enhanced CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes textGlow {
        0% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
        }
        100% {
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.9), 0 0 40px rgba(255, 255, 255, 0.7);
        }
    }
    
    .animate-in {
        animation: slideInUp 1s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(60px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .showcase-item, .greeting-card, .thank-you-card {
        opacity: 0;
        transform: translateY(50px);
    }
    
    .showcase-item.animate-in, .greeting-card.animate-in, .thank-you-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .showcase-item:hover {
        transform: translateY(-15px) scale(1.05);
        box-shadow: 0 0 40px rgba(0, 255, 255, 0.6);
    }
    
    .fa-spinner {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TeachersDayWebsite();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization
let ticking = false;

function updateOnScroll() {
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});

// Add smooth animations for all interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const interactiveElements = document.querySelectorAll('.showcase-item, .greeting-card, .thank-you-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.02)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)';
        });
    });
});
