/**
 * KIRUL DE SILVA — CREATIVE PORTFOLIO
 * Main Interactive Engine & Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. Projects Data Store (13 Authentic Projects from Kirul's Real Portfolio)
  // ------------------------------------------------------------------------
  const projectsData = [
    {
      id: 'travel-card',
      title: 'Travel Card Design',
      category: 'Graphic Design',
      categorySlug: 'graphic-design',
      thumbnail: 'assets/images/projects/travel-card-preview.jpg',
      fullImage: 'assets/images/projects/travel-card-preview.jpg',
      client: 'Bespoke Travel Pass & Itinerary System',
      tools: ['Figma UI/UX', 'Vector Design', 'Brand Architecture', 'Typography'],
      desc: 'An exquisite vector travel card and itinerary design created in Figma. Features modern modular layouts, clean typography hierarchy, destination badges, and barcode/QR verification passes for premium travelers.',
      externalLink: 'https://www.figma.com/file/vjF5bLfWMX2bArLXbn69mg/Travel-Card?node-id=0%3A1',
      linkText: 'VIEW FIGMA PROJECT ↗'
    },
    {
      id: 'go-ceylon',
      title: 'Go Ceylon Tours Platform',
      category: 'Web Design',
      categorySlug: 'web-design',
      thumbnail: 'assets/images/projects/go-ceylon-preview.jpg',
      fullImage: 'assets/images/projects/go-ceylon-preview.jpg',
      client: 'Go Ceylon Travels (Sri Lanka)',
      tools: ['HTML5', 'CSS3 / Responsive', 'JavaScript ES6+', 'UI Architecture'],
      desc: 'A full-stack, responsive travel platform designed to highlight Sri Lanka’s UNESCO world heritage landmarks, wildlife safari tours, luxury hill country trails, and booking management.',
      externalLink: 'https://github.com/imkiruldesilva/Go-Ceylon-Tours',
      linkText: 'VIEW GITHUB PROJECT ↗'
    },
    {
      id: 'bali-campaign',
      title: 'Bali Tropical Escape Campaign',
      category: 'Campaign Design',
      categorySlug: 'campaign-design',
      thumbnail: 'assets/images/projects/bali-campaign.jpg',
      fullImage: 'assets/images/projects/bali-campaign.jpg',
      client: 'NKAR Travel House Outbound',
      tools: ['Adobe Photoshop', 'Visual Composition', 'Color Grading', 'Typography'],
      desc: 'High-impact promotional campaign artwork capturing the exotic allure of Bali. Combines lush tropical landscapes, iconic Balinese temple architecture, and vibrant promotional typography.',
      externalLink: null,
      linkText: 'EXPLORE CASE STUDY ↗'
    },
    {
      id: 'solo-travel',
      title: 'Solo Travel In Sri Lanka',
      category: 'Travel & Tourism Design',
      categorySlug: 'travel-tourism',
      thumbnail: 'assets/images/projects/solo-travel.jpg',
      fullImage: 'assets/images/projects/solo-travel.jpg',
      client: 'NKAR Travel Inbound Campaign',
      tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Narrative Storytelling'],
      desc: 'A visual celebration of independent travel across Sri Lanka. Crafted with warm tropical lighting, dynamic layout blocks, and inspirational typography that empowers solo travelers.',
      externalLink: null,
      linkText: 'EXPLORE CASE STUDY ↗'
    },
    {
      id: 'best-bars',
      title: 'Best Bars in Sri Lanka Guide',
      category: 'Social Media Artwork',
      categorySlug: 'social-media',
      thumbnail: 'assets/images/projects/best-bars-sri-lanka.jpg',
      fullImage: 'assets/images/projects/best-bars-sri-lanka.jpg',
      client: 'Social Lifestyle & Hospitality Guide',
      tools: ['Adobe Illustrator', 'Photoshop', 'Social Media Strategy'],
      desc: 'Engaging, stylish social media visual series cataloging the premier nightlife venues, rooftop lounges, and speakeasies across Colombo, Galle, and coastal hotspots.',
      externalLink: null,
      linkText: 'EXPLORE CASE STUDY ↗'
    },
    {
      id: 'south-asia-awards',
      title: 'South Asia Travel Awards',
      category: 'Campaign Design',
      categorySlug: 'campaign-design',
      thumbnail: 'assets/images/projects/south-asia-awards.jpg',
      fullImage: 'assets/images/projects/south-asia-awards.jpg',
      client: 'NKAR Travel House Recognition',
      tools: ['Adobe Photoshop', 'Creative Direction', 'Gold Foil & Lighting'],
      desc: 'Prestigious award announcement and celebratory graphics for the South Asia Travel Awards (SATA), combining opulent gold accents, cinematic lighting, and proud corporate achievements.',
      externalLink: null,
      linkText: 'EXPLORE CASE STUDY ↗'
    },
    {
      id: 'wildlife-safari',
      title: 'Sri Lanka Big Cats & Wildlife Safari',
      category: 'Graphic Design',
      categorySlug: 'graphic-design',
      thumbnail: 'assets/images/projects/wildlife-safari.jpg',
      fullImage: 'assets/images/projects/wildlife-safari.jpg',
      client: 'NKAR Wildlife Safari Collection',
      tools: ['Editorial Design', 'Adobe InDesign', 'Photoshop Retouching'],
      desc: 'A comprehensive multi-page brochure and campaign suite exploring Yala, Wilpattu, and Minneriya. Features high-contrast animal photography, field guides, and itinerary grids.',
      externalLink: null,
      linkText: 'EXPLORE CASE STUDY ↗'
    },
    {
      id: 'nkar-web-ui',
      title: 'NKAR 45th Anniversary Web UI',
      category: 'Web Design',
      categorySlug: 'web-design',
      thumbnail: 'assets/images/projects/nkar-web-ui.jpg',
      fullImage: 'assets/images/projects/nkar-web-ui.jpg',
      client: 'NKAR Travels & Inbound Portal',
      tools: ['Web UI/UX', 'Figma', 'Responsive Frameworks', 'Brand Refresh'],
      desc: 'Modernized homepage concept and digital portal commemorating NKAR’s 45 years of travel excellence. Focuses on intuitive trip exploration, hero video banners, and conversion optimization.',
      externalLink: null,
      linkText: 'EXPLORE CASE STUDY ↗'
    },
    {
      id: 'wtm-london',
      title: 'WTM London Global Exhibition',
      category: 'Campaign Design',
      categorySlug: 'campaign-design',
      thumbnail: 'assets/images/projects/wtm-london-banner.jpg',
      fullImage: 'assets/images/projects/wtm-london-banner.jpg',
      client: 'World Travel Market London 2024–2025',
      tools: ['Large-Format Print', 'Illustrator', 'International Branding'],
      desc: 'Large-scale trade exhibition banners, stand graphics, and promotional flyers for the world-renowned World Travel Market (WTM) in London, representing Sri Lankan hospitality.',
      externalLink: null,
      linkText: 'EXPLORE CASE STUDY ↗'
    },
    {
      id: 'adhira-branding',
      title: 'Adhira Luxury Identity System',
      category: 'Branding',
      categorySlug: 'branding',
      thumbnail: 'assets/images/projects/adhira-branding.jpg',
      fullImage: 'assets/images/projects/adhira-branding.jpg',
      client: 'Adhira Boutique Lifestyle',
      tools: ['Brand Identity', 'Logo Design', 'Stationery Systems', 'Packaging'],
      desc: 'Full corporate identity and lifestyle branding package. Includes logo guidelines, luxury packaging concepts, gold emboss mockups, and corporate stationery design.',
      externalLink: null,
      linkText: 'EXPLORE CASE STUDY ↗'
    },
    {
      id: 'nkar-cover',
      title: 'NKAR Corporate Brand Publication',
      category: 'Branding',
      categorySlug: 'branding',
      thumbnail: 'assets/images/projects/nkar-corporate-cover.jpg',
      fullImage: 'assets/images/projects/nkar-corporate-cover.jpg',
      client: 'NKAR Group Corporate Office',
      tools: ['Print Architecture', 'Corporate Visuals', 'Vector Grid'],
      desc: 'Sleek corporate identity book cover and publication styling highlighting NKAR’s global presence, inbound/outbound travel divisions, and luxury coach fleet.',
      externalLink: null,
      linkText: 'EXPLORE CASE STUDY ↗'
    },
    {
      id: 'day-card',
      title: 'Day Card Visual Typography',
      category: 'Creative Experiments',
      categorySlug: 'creative-experiments',
      thumbnail: 'assets/images/projects/day-card-typography.jpg',
      fullImage: 'assets/images/projects/day-card-typography.jpg',
      client: 'Design Laboratory Project',
      tools: ['Typography Exploration', 'Geometric Grids', 'Photoshop'],
      desc: 'Experimental typography layout testing modern Swiss grid systems, bold contrast hierarchies, and futuristic vector styling for event cards.',
      externalLink: null,
      linkText: 'EXPLORE CASE STUDY ↗'
    },
    {
      id: 'e-card',
      title: 'Digital Holiday E-Card Suite',
      category: 'Digital Art',
      categorySlug: 'digital-art',
      thumbnail: 'assets/images/projects/e-card-design.jpg',
      fullImage: 'assets/images/projects/e-card-design.jpg',
      client: 'Seasonal Digital Communications',
      tools: ['Digital Illustration', 'Lighting FX', 'Social Distribution'],
      desc: 'Futuristic digital greeting cards and celebratory graphics designed for seamless cross-channel sharing across email, WhatsApp, and social media.',
      externalLink: null,
      linkText: 'EXPLORE CASE STUDY ↗'
    }
  ];

  // ------------------------------------------------------------------------
  // 2. Boot Loader Screen Sequence
  // ------------------------------------------------------------------------
  const bootLoader = document.getElementById('boot-loader');
  const bootProgressBar = document.getElementById('boot-progress-bar');
  const bootStatusText = document.getElementById('boot-status-text');
  const bootSkipBtn = document.getElementById('boot-skip-btn');

  const bootMessages = [
    'INITIALIZING DIGITAL ARSENAL...',
    'LOADING GRAPHIC & UI ASSETS...',
    'SYNCING NEURAL INTERFACE [NKAR // LK]...',
    'STATUS: LEVEL 99 CREATIVE'
  ];

  let bootProgress = 0;
  let msgIndex = 0;

  const bootInterval = setInterval(() => {
    bootProgress += 2.5;
    if (bootProgressBar) bootProgressBar.style.width = `${bootProgress}%`;

    const nextMsgIndex = Math.floor((bootProgress / 100) * bootMessages.length);
    if (nextMsgIndex !== msgIndex && nextMsgIndex < bootMessages.length) {
      msgIndex = nextMsgIndex;
      if (bootStatusText) bootStatusText.textContent = bootMessages[msgIndex];
    }

    if (bootProgress >= 100) {
      clearInterval(bootInterval);
      completeBoot();
    }
  }, 30);

  function completeBoot() {
    if (!bootLoader) return;
    bootLoader.classList.add('loaded');
    setTimeout(() => {
      bootLoader.style.display = 'none';
      initParticleBackground();
    }, 800);
  }

  if (bootSkipBtn) {
    bootSkipBtn.addEventListener('click', () => {
      clearInterval(bootInterval);
      completeBoot();
    });
  }

  // ------------------------------------------------------------------------
  // 3. Custom Cursor & Interactive Glow
  // ------------------------------------------------------------------------
  const cursorDot = document.querySelector('.custom-cursor-dot');
  const cursorOutline = document.querySelector('.custom-cursor-outline');

  if (cursorDot && cursorOutline && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 250, fill: 'forwards' });
    });

    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card, input, textarea, select');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
        if (window.soundEngine) window.soundEngine.playHover();
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
      });
      el.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playClick();
      });
    });
  }

  // ------------------------------------------------------------------------
  // 4. Sound Engine UI Toggle
  // ------------------------------------------------------------------------
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      if (window.soundEngine) {
        const isEnabled = window.soundEngine.toggle();
        soundToggleBtn.classList.toggle('sound-on', isEnabled);
        soundToggleBtn.innerHTML = isEnabled 
          ? '<span>⚡ FX: ON</span>' 
          : '<span>🔇 FX: OFF</span>';
      }
    });
  }

  // ------------------------------------------------------------------------
  // 5. Animated Typing Effect
  // ------------------------------------------------------------------------
  const typingElement = document.getElementById('typing-text');
  const roles = [
    'Creative Designer',
    'Visual Storyteller',
    'Digital Artist',
    'Graphic Designer',
    'Creative Thinker'
  ];

  let currentRoleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeText() {
    if (!typingElement) return;

    const currentRole = roles[currentRoleIdx];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      currentRoleIdx = (currentRoleIdx + 1) % roles.length;
      typingSpeed = 500; // Pause before new word
    }

    setTimeout(typeText, typingSpeed);
  }

  typeText();

  // ------------------------------------------------------------------------
  // 6. Dynamic Hero Headline Toggle
  // ------------------------------------------------------------------------
  const headlineToggleBtn = document.getElementById('headline-toggle-btn');
  const heroMainHeadline = document.getElementById('hero-main-headline');

  const headlines = [
    `<span class="title-line title-outline">CREATIVITY</span>
     <span class="title-line">WITHOUT</span>
     <span class="title-line title-red">LIMITS.</span>`,
    `<span class="title-line title-outline">DESIGNER</span>
     <span class="title-line">BY DAY.</span>
     <span class="title-line title-red">GAMER BY NATURE.</span>`
  ];

  let currentHeadlineIdx = 0;

  if (headlineToggleBtn && heroMainHeadline) {
    headlineToggleBtn.addEventListener('click', () => {
      currentHeadlineIdx = (currentHeadlineIdx + 1) % headlines.length;
      heroMainHeadline.style.opacity = '0';
      heroMainHeadline.style.transform = 'translateY(8px)';
      
      if (window.soundEngine) window.soundEngine.playWarp();

      setTimeout(() => {
        heroMainHeadline.innerHTML = headlines[currentHeadlineIdx];
        heroMainHeadline.style.transition = 'all 0.4s ease';
        heroMainHeadline.style.opacity = '1';
        heroMainHeadline.style.transform = 'translateY(0)';
      }, 200);
    });
  }

  // ------------------------------------------------------------------------
  // 7. 3D Card Tilt Effect on Character Card
  // ------------------------------------------------------------------------
  const characterCard = document.getElementById('character-card');
  if (characterCard) {
    characterCard.addEventListener('mousemove', (e) => {
      const rect = characterCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      characterCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    characterCard.addEventListener('mouseleave', () => {
      characterCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // ------------------------------------------------------------------------
  // 8. Real Photo vs Stylized Cartoon Avatar Switcher
  // ------------------------------------------------------------------------
  const photoRealImg = document.getElementById('photo-real');
  const photoAvatarImg = document.getElementById('photo-avatar');
  const btnModeReal = document.getElementById('mode-btn-real');
  const btnModeAvatar = document.getElementById('mode-btn-avatar');

  if (btnModeReal && btnModeAvatar && photoRealImg && photoAvatarImg) {
    btnModeReal.addEventListener('click', () => {
      btnModeReal.classList.add('active');
      btnModeAvatar.classList.remove('active');
      photoRealImg.classList.remove('hidden');
      photoAvatarImg.classList.add('hidden');
      if (window.soundEngine) window.soundEngine.playClick();
    });

    btnModeAvatar.addEventListener('click', () => {
      btnModeAvatar.classList.add('active');
      btnModeReal.classList.remove('active');
      photoAvatarImg.classList.remove('hidden');
      photoRealImg.classList.add('hidden');
      if (window.soundEngine) window.soundEngine.playClick();
    });
  }

  // ------------------------------------------------------------------------
  // 9. Render Projects Grid & Category Filter Tabs
  // ------------------------------------------------------------------------
  const portfolioGrid = document.getElementById('portfolio-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function renderProjects(category = 'all') {
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = '';

    const filtered = category === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.categorySlug === category || p.category.toLowerCase().includes(category.toLowerCase()));

    filtered.forEach((p, idx) => {
      const card = document.createElement('div');
      card.className = `project-card ${idx % 5 === 0 ? 'featured-tall' : ''}`;
      card.setAttribute('data-id', p.id);

      card.innerHTML = `
        <div class="project-thumbnail-wrapper">
          <img src="${p.thumbnail}" alt="${p.title}" class="project-thumbnail" loading="lazy">
          <div class="project-overlay-glow"></div>
          <div class="project-quick-view-badge">INSPECT ↗</div>
        </div>
        <div class="project-info">
          <div>
            <div class="project-category-tag">${p.category}</div>
            <h3 class="project-title">${p.title}</h3>
          </div>
          <div class="project-meta-row">
            <span>// 0${idx + 1}</span>
            <span class="project-action-link">VIEW DETAILS ↗</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openLightbox(p));
      portfolioGrid.appendChild(card);
    });

    // Re-bind cursor hover
    const newCards = portfolioGrid.querySelectorAll('.project-card');
    newCards.forEach((c) => {
      c.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      c.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  renderProjects('all');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
      if (window.soundEngine) window.soundEngine.playClick();
    });
  });

  // ------------------------------------------------------------------------
  // 10. Interactive Lightbox Modal
  // ------------------------------------------------------------------------
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClient = document.getElementById('lightbox-client');
  const lightboxTools = document.getElementById('lightbox-tools');
  const lightboxActionBtn = document.getElementById('lightbox-action-btn');

  function openLightbox(project) {
    if (!lightboxModal) return;

    if (lightboxImg) lightboxImg.src = project.fullImage;
    if (lightboxTitle) lightboxTitle.textContent = project.title;
    if (lightboxCategory) lightboxCategory.textContent = project.category;
    if (lightboxDesc) lightboxDesc.textContent = project.desc;
    if (lightboxClient) lightboxClient.textContent = project.client;
    if (lightboxTools) lightboxTools.textContent = project.tools.join(' • ');

    if (lightboxActionBtn) {
      if (project.externalLink) {
        lightboxActionBtn.href = project.externalLink;
        lightboxActionBtn.textContent = project.linkText;
        lightboxActionBtn.style.display = 'inline-flex';
      } else {
        lightboxActionBtn.href = '#contact';
        lightboxActionBtn.textContent = 'INQUIRE ABOUT THIS WORK ↗';
        lightboxActionBtn.style.display = 'inline-flex';
      }
    }

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.soundEngine) window.soundEngine.playWarp();
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });

  // ------------------------------------------------------------------------
  // 11. Interactive Contact Form & Email Fallback
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const projectType = document.getElementById('form-project-type').value;
      const budget = document.getElementById('form-budget').value;
      const message = document.getElementById('form-message').value.trim();

      // Validation
      if (!name || !email || !message) {
        showFeedback('ERROR: All required fields (Name, Email, Message) must be filled.', 'error');
        if (window.soundEngine) window.soundEngine.playBeep(300, 'sawtooth', 0.1, 0.1);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFeedback('ERROR: Please enter a valid email address.', 'error');
        return;
      }

      // Successful transmission feedback
      showFeedback('SUCCESS: Transmission received! Launching direct mail client to finalize dispatch...', 'success');
      if (window.soundEngine) window.soundEngine.playWarp();

      // Mailto link fallback
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${projectType} - ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Project Type: ${projectType}\n` +
        `Budget: ${budget || 'Flexible'}\n\n` +
        `Message:\n${message}\n\n` +
        `-- Transmitted via kiruldesilva.design`
      );

      setTimeout(() => {
        window.location.href = `mailto:imkirul.desilva@gmail.com?subject=${subject}&body=${body}`;
      }, 900);
    });
  }

  function showFeedback(msg, type) {
    if (!formFeedback) return;
    formFeedback.textContent = msg;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.style.display = 'block';
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('imkirul.desilva@gmail.com').then(() => {
        copyEmailBtn.textContent = 'COPIED TO CLIPBOARD! ✓';
        if (window.soundEngine) window.soundEngine.playBeep(950, 'sine', 0.08, 0.1);
        setTimeout(() => {
          copyEmailBtn.textContent = 'COPY EMAIL ❐';
        }, 2500);
      });
    });
  }

  // ------------------------------------------------------------------------
  // 12. Navbar Scrolled State & Mobile Menu
  // ------------------------------------------------------------------------
  const hudNav = document.getElementById('hud-nav');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinksList = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    if (hudNav) {
      if (window.scrollY > 40) {
        hudNav.classList.add('scrolled');
      } else {
        hudNav.classList.remove('scrolled');
      }
    }
  });

  if (mobileMenuBtn && navLinksList) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinksList.classList.toggle('open');
    });

    const links = navLinksList.querySelectorAll('.nav-link');
    links.forEach(l => {
      l.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinksList.classList.remove('open');
      });
    });
  }

  // ------------------------------------------------------------------------
  // 13. Back to Top Button
  // ------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ------------------------------------------------------------------------
  // 14. Particle Canvas Initialization
  // ------------------------------------------------------------------------
  function initParticleBackground() {
    if (window.CyberParticles) {
      new window.CyberParticles('particle-canvas');
    }
  }
});
