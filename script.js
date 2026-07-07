// ===== REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== SKILLS TAGS =====
function setupTechTags(containerId) {
    const tags = document.querySelectorAll(`#${containerId} .skill-tag`);
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            tags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

setupTechTags('tech-tags');
setupTechTags('especialidade-tags');

// ===== PROJECTS TOGGLE =====
function toggleProject(card) {
    const details = card.querySelector('.project-details');
    const hintWrapper = card.querySelector('.click-hint-wrapper');
    const hintText = hintWrapper.querySelector('.hint-text');
    const hintIcon = hintWrapper.querySelector('.hint-icon i');

    document.querySelectorAll('.project-card').forEach(c => {
        if (c !== card) {
            const otherDetails = c.querySelector('.project-details');
            const otherHintWrapper = c.querySelector('.click-hint-wrapper');
            const otherHintText = otherHintWrapper.querySelector('.hint-text');
            const otherHintIcon = otherHintWrapper.querySelector('.hint-icon i');
            
            otherDetails.classList.remove('open');
            otherHintText.textContent = 'Clique para expandir';
            otherHintIcon.style.transform = 'rotate(0deg)';
            otherHintWrapper.querySelector('.hint-icon').style.background = 'var(--primary)';
        }
    });

    const isOpen = details.classList.contains('open');
    if (isOpen) {
        details.classList.remove('open');
        hintText.textContent = 'Clique para expandir';
        hintIcon.style.transform = 'rotate(0deg)';
        hintWrapper.querySelector('.hint-icon').style.background = 'var(--primary)';
    } else {
        details.classList.add('open');
        hintText.textContent = 'Clique para recolher';
        hintIcon.style.transform = 'rotate(180deg)';
        hintWrapper.querySelector('.hint-icon').style.background = 'var(--secondary)';
    }
}

// ===== TIMELINE TOGGLE =====
function toggleTimeline(item) {
    const isActive = item.classList.contains('active');

    // Fechar todos os outros itens
    document.querySelectorAll('.timeline-item').forEach(other => {
        if (other !== item) {
            other.classList.remove('active');
        }
    });

    // Alternar o item clicado
    if (isActive) {
        item.classList.remove('active');
    } else {
        item.classList.add('active');
    }
}

// ===== DARK MODE TOGGLE =====
const darkToggle = document.getElementById('darkToggle');
const toggleText = document.getElementById('toggleText');
const icon = darkToggle.querySelector('i');

// Verificar preferência salva
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggleText.textContent = 'Light';
    icon.className = 'fas fa-sun';
}

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleText.textContent = isDark ? 'Light' : 'Dark';
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
});