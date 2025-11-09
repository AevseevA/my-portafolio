/* ==========================================
   LANGUAGE SYSTEM
   ========================================== */
let currentLang = 'en'; // Current language (English or Spanish)

// Language translations for categories
const translations = {
    en: {
        categories: {
            documentary: 'Documentary',
            ad: 'Ad',
            promo: 'Promo',
            short: 'Short Film'
        }
    },
    es: {
        categories: {
            documentary: 'Documental',
            ad: 'Spot',
            promo: 'Promo',
            short: 'Cortometraje'
        }
    }
};

/* ==========================================
   YOUR PROJECTS DATABASE
   
   HOW TO ADD A NEW VIDEO:
   1. Export your video as MP4
   2. Create a thumbnail PNG (1920x1080)
   3. Place them in the correct category folder:
      - videos/promos/your-video.mp4
      - images/promos/thumb-your-video.png
   4. Copy the template below and fill in your details
   
   TEMPLATE TO COPY:
   { 
       title: 'Your Project Title (English)', 
       titleEs: 'Tu Título del Proyecto (Español)', 
       category: 'promo',  // Options: 'promo', 'documentary', 'ad', 'short'
       icon: '🎬',  // Emoji that shows if thumbnail doesn't load
       videoFile: 'videos/promos/your-video-name.mp4',
       thumbnail: 'images/promos/thumb-your-video-name.png'
   },
   ========================================== */

const projects = [
    // ===== PROMOS =====
    { 
        title: 'AXN LATAM Promo', 
        titleEs: 'Promo AXN LATAM', 
        category: 'promo', 
        icon: '🎬',
        videoFile: 'videos/promos/axn-latam-promo.mp4',
        thumbnail: 'images/promos/thumb-axn-latam.png'
    },
    { 
        title: 'Sony Channel Evergreen', 
        titleEs: 'Sony Channel Evergreen', 
        category: 'promo', 
        icon: '📺',
        videoFile: 'videos/promos/sony-evergreen.mp4',
        thumbnail: 'images/promos/thumb-sony-evergreen.png'
    },
    { 
        title: 'Sony Channel LATAM', 
        titleEs: 'Sony Channel LATAM', 
        category: 'promo', 
        icon: '🎥',
        videoFile: 'videos/promos/sony-latam.mp4',
        thumbnail: 'images/promos/thumb-sony-latam.png'
    },
    { 
        title: 'Night Shift S4 - Vivo Play', 
        titleEs: 'Night Shift T4 - Vivo Play', 
        category: 'promo', 
        icon: '🌙',
        videoFile: 'videos/promos/night-shift-s4.mp4',
        thumbnail: 'images/promos/thumb-night-shift.png'
    },
    { 
        title: 'Cinema AXN November', 
        titleEs: 'Cinema AXN Noviembre', 
        category: 'promo', 
        icon: '🍿',
        videoFile: 'videos/promos/cinema-axn-november.mp4',
        thumbnail: 'images/promos/thumb-cinema-axn.png'
    },
    { 
        title: 'Sony Movies - Venom', 
        titleEs: 'Sony Movies - Venom', 
        category: 'promo', 
        icon: '🎭',
        videoFile: 'videos/promos/sony-venom.mp4',
        thumbnail: 'images/promos/thumb-sony-venom.png'
    },

    // ===== DOCUMENTARIES =====
    // Add your documentaries here using the template above
    // Example:
    // { 
    //     title: 'Ocean Depths Documentary', 
    //     titleEs: 'Documental Profundidades Oceánicas', 
    //     category: 'documentary', 
    //     icon: '🌊',
    //     videoFile: 'videos/documentaries/ocean-depths.mp4',
    //     thumbnail: 'images/documentaries/thumb-ocean-depths.png'
    // },

    // ===== ADS =====
    // Add your ads/commercials here using the template above
{ 
    title: 'Samsung S20 - Food Capsule', 
    titleEs: 'Capsula Food - Samsung S20', 
    category: 'ad', 
    icon: '🦁',
    videoFile: 'videos/ads/Capsula-Food.mp4',
    thumbnail: 'images/ads/thumb-Capsula-Food.png'
},

    // ===== SHORT FILMS =====
    // Add your short films here using the template above
];

/* ==========================================
   LANGUAGE SWITCHER FUNCTION
   ========================================== */
function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button styling
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all text elements with language attributes
    document.querySelectorAll('[data-en]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            if (el.tagName === 'INPUT') {
                el.placeholder = text;
            } else {
                el.textContent = text;
            }
        }
    });

    // Update placeholder text for inputs
    document.querySelectorAll('[data-placeholder-en]').forEach(el => {
        el.placeholder = el.getAttribute(`data-placeholder-${lang}`);
    });

    // Re-render projects with new language
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    renderProjects(activeFilter);
}

// Attach language switcher to buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        switchLanguage(this.dataset.lang);
    });
});

/* ==========================================
   RENDER PROJECTS ON PAGE
   ========================================== */
function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = ''; // Clear existing projects
    
    // Filter projects by category
    const filtered = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);
    
    // Create a card for each project
    filtered.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Get translated title and category
        const projectTitle = currentLang === 'es' ? project.titleEs : project.title;
        const categoryText = translations[currentLang].categories[project.category];
        
        // Build the card HTML
        card.innerHTML = `
            <div class="project-thumbnail">
                <img src="${project.thumbnail}" alt="${projectTitle}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="thumbnail-icon">${project.icon}</div>
                <div class="play-overlay"></div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${projectTitle}</h3>
                <p class="project-category">${categoryText}</p>
            </div>
        `;
        
        // When card is clicked, open video modal
        card.addEventListener('click', () => openVideoModal(project.videoFile));
        
        // Add card to grid
        grid.appendChild(card);
    });
}

/* ==========================================
   VIDEO MODAL FUNCTIONS
   ========================================== */
function openVideoModal(videoPath) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('videoPlayer');
    const source = document.getElementById('videoSource');
    
    // Set video source and play
    source.src = videoPath;
    video.load();
    video.play();
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('videoPlayer');
    
    // Stop video
    video.pause();
    video.currentTime = 0;
    
    // Hide modal
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when X button is clicked
document.getElementById('closeModal').addEventListener('click', closeVideoModal);

// Close modal when clicking outside video
document.getElementById('videoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeVideoModal();
    }
});

// Close modal when ESC key is pressed
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeVideoModal();
    }
});

/* ==========================================
   CATEGORY FILTER BUTTONS
   ========================================== */
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        // Re-render projects with selected filter
        renderProjects(this.dataset.filter);
    });
});

/* ==========================================
   SIDE MENU NAVIGATION
   ========================================== */
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Update active menu item
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        // Show corresponding page
        const pageId = this.dataset.page;
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
    });
});

/* ==========================================
   CONTACT FORM SUBMISSION
   ========================================== */
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const message = currentLang === 'es' 
        ? '¡Mensaje enviado! (Esto es una demo - conecta a tu backend para manejar envíos)'
        : 'Message sent! (This is a demo - connect to your backend to handle submissions)';
    
    alert(message);
    this.reset(); // Clear form
});

/* ==========================================
   INITIALIZE PAGE
   ========================================== */
// Render all projects when page loads
renderProjects();