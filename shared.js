/* ============================================================
   ILANGATHIR TRUST — Core Application Engine & Localization
   Centralized configuration binding, null-safe dynamic rendering,
   mobile navbar language switching, and interactive modal system.
   ============================================================ */

// ─── Ensure Config & Dictionary Fallback ───
const CONFIG = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG : {
    name: { en: 'Ilangathir Trust', ta: 'இளங்கதிர் அறக்கட்டளை' },
    shortName: { en: 'Ilangathir', ta: 'இளங்கதிர்' },
    subTitle: { en: 'Charitable Trust', ta: 'அறக்கட்டளை' },
    tagline: {
        en: 'Rather than folding both hands to pray to God, extend one hand to help — two hands will worship you as God…',
        ta: 'இரு கரம் கூப்பி கடவுளை வணங்குவதை விட ஒரு கரம் நீட்டி உதவி செய் இரு கரம் உன்னை வணங்கும் கடவுளாக…'
    },
    foundedYear: '2024',
    registrationNumber: 'Reg. No: 12/2024 (Govt. of Tamil Nadu)',
    address: {
        en: 'Kallupatti, Dindigul - 624307, Tamil Nadu, India',
        ta: 'கல்லுப்பட்டி, திண்டுக்கல் - 624307, தமிழ்நாடு, இந்தியா'
    },
    phones: { primary: '+91 98765 43210', secondary: null },
    email: 'info@ilangathirtrust.org',
    workingHours: {
        en: 'Monday – Saturday: 9:00 AM – 6:00 PM',
        ta: 'திங்கள் – சனி: காலை 9:00 – மாலை 6:00'
    },
    socialLinks: { facebook: null, instagram: null, whatsapp: null, youtube: null, twitter: null, linkedin: null },
    bankDetails: {
        accountName: 'Ilangathir Trust',
        accountNumber: 'XXXX XXXX XXXX',
        ifscCode: 'XXXX0000000',
        bankName: 'State Bank of India',
        branch: 'Dindigul Main Branch',
        accountType: 'Current Account',
        upiId: 'ilangathirtrust@upi',
        qrCodeImage: null
    },
    stats: { livesImpacted: 500, programsActive: 6, volunteers: 50, yearFounded: 2024 },
    navLinks: [
        { id: 'home', key: 'nav_home', href: 'index.html' },
        { id: 'about', key: 'nav_about', href: 'about.html' },
        { id: 'services', key: 'nav_services', href: 'services.html' },
        { id: 'gallery', key: 'nav_gallery', href: 'gallery.html' },
        { id: 'contact', key: 'nav_contact', href: 'contact.html' }
    ]
};

const DICT = typeof I18N_CONTENT !== 'undefined' ? I18N_CONTENT : {};

// ─── Current Language State ───
let currentLang = localStorage.getItem('ilangathir_lang') || 'en';

// ─── Translation Helper ───
function t(key) {
    if (!DICT[key]) return key;
    return DICT[key][currentLang] || DICT[key].en || key;
}

// ─── Social Icons Builder (Null-Safe) ───
function buildSocialIconsHTML(containerClass = 'top-social') {
    if (!CONFIG.socialLinks) return '';
    
    const iconsMap = {
        facebook: { icon: 'fa-brands fa-facebook-f', label: 'Facebook' },
        instagram: { icon: 'fa-brands fa-instagram', label: 'Instagram' },
        whatsapp: { icon: 'fa-brands fa-whatsapp', label: 'WhatsApp' },
        youtube: { icon: 'fa-brands fa-youtube', label: 'YouTube' },
        twitter: { icon: 'fa-brands fa-x-twitter', label: 'X (Twitter)' },
        linkedin: { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' }
    };

    let html = '';
    for (const [platform, url] of Object.entries(CONFIG.socialLinks)) {
        if (url && typeof url === 'string' && url.trim() !== '' && url !== '#' && url !== 'null') {
            const info = iconsMap[platform] || { icon: 'fa-solid fa-link', label: platform };
            html += `<a href="${url}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="${info.label}"><i class="${info.icon}"></i></a>`;
        }
    }

    if (!html) return '';
    return `<div class="${containerClass}">${html}</div>`;
}

// ─── Top Bar Renderer (Null-Safe) ───
function buildTopBarHTML() {
    const hasEmail = CONFIG.email && CONFIG.email.trim() !== '';
    const hasPhone = CONFIG.phones && CONFIG.phones.primary && CONFIG.phones.primary.trim() !== '';
    const socialsHTML = buildSocialIconsHTML('top-social');
    const regBadge = CONFIG.registrationNumber ? `<span class="top-reg-badge"><i class="fa-solid fa-shield-check"></i> ${CONFIG.registrationNumber}</span>` : '';

    return `
    <div class="top-bar">
        <div class="top-bar-inner container-wide">
            <div class="top-contact-group">
                ${regBadge}
                ${hasEmail ? `<a href="mailto:${CONFIG.email}" class="top-link"><i class="fa-solid fa-envelope"></i> <span>${CONFIG.email}</span></a>` : ''}
                ${hasEmail && hasPhone ? `<span class="top-sep">|</span>` : ''}
                ${hasPhone ? `<a href="tel:${CONFIG.phones.primary.replace(/\s/g, '')}" class="top-link"><i class="fa-solid fa-phone"></i> <span>${CONFIG.phones.primary}</span></a>` : ''}
            </div>
            <div class="top-bar-right">
                <div class="top-announcement-text" data-i18n="top_announcement">
                    ${t('top_announcement')}
                </div>
                ${socialsHTML}
            </div>
        </div>
    </div>`;
}

// ─── Inject Navigation ───
function injectNavbar(activePage) {
    const topBarHTML = buildTopBarHTML();

    const navLinksHTML = CONFIG.navLinks.map(link => {
        const isActive = activePage === link.id ? 'active' : '';
        return `<a href="${link.href}" class="nav-link-item ${isActive}" data-i18n="${link.key}">${t(link.key)}</a>`;
    }).join('');

    const drawerLinksHTML = CONFIG.navLinks.map(link => {
        const isActive = activePage === link.id ? 'active' : '';
        return `<a href="${link.href}" class="menu-link ${isActive}" data-i18n="${link.key}">${t(link.key)}</a>`;
    }).join('');

    const navHTML = `
    ${topBarHTML}

    <!-- Primary Navbar -->
    <nav class="navbar" id="navbar" aria-label="Main navigation">
        <div class="nav-inner container-wide">
            <!-- Brand Logo -->
            <a href="index.html" class="logo-group" aria-label="${CONFIG.name.en}">
                <div class="logo-ring">
                    <i class="fa-solid fa-hands-holding-child"></i>
                </div>
                <div class="logo-text">
                    <div class="name brand-name" data-brand-name>${currentLang === 'ta' ? CONFIG.name.ta : CONFIG.name.en}</div>
                    <div class="sub brand-sub" data-brand-sub>${currentLang === 'ta' ? CONFIG.name.en : CONFIG.subTitle.en}</div>
                </div>
            </a>

            <!-- Desktop Nav Links -->
            <div class="nav-links" id="desktopNavLinks">
                ${navLinksHTML}
            </div>

            <!-- Header Action Controls -->
            <div class="nav-cta-group">
                <!-- Language Toggle (Desktop) -->
                <div class="lang-toggle-segmented desktop-only" role="group" aria-label="Language selection">
                    <button type="button" data-lang="ta" onclick="setLang('ta')" class="lang-btn ${currentLang === 'ta' ? 'active' : ''}" aria-pressed="${currentLang === 'ta'}">
                        தமிழ்
                    </button>
                    <button type="button" data-lang="en" onclick="setLang('en')" class="lang-btn ${currentLang === 'en' ? 'active' : ''}" aria-pressed="${currentLang === 'en'}">
                        English
                    </button>
                </div>

                <!-- Quick Donate Button (Desktop) -->
                <button type="button" class="btn btn-amber nav-donate-btn desktop-only" onclick="openDonationModal()" data-i18n="btn_donate">
                    <i class="fa-solid fa-heart"></i> <span>${t('btn_donate')}</span>
                </button>

                <!-- Mobile Navbar Language Toggle (Prominent on Mobile as requested) -->
                <button type="button" class="mobile-nav-lang-pill mobile-only" onclick="toggleLanguage()" aria-label="Toggle language between Tamil and English" id="mobileNavLangBtn">
                    <span class="lang-pill-icon"><i class="fa-solid fa-language"></i></span>
                    <span class="lang-pill-text" id="mobileLangPillText">${currentLang === 'ta' ? 'EN' : 'தமிழ்'}</span>
                </button>

                <!-- Mobile Hamburger Menu Button -->
                <button class="mobile-menu-btn" onclick="openDrawer()" aria-label="Open menu" id="menuBtn">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer-overlay" id="drawerOverlay" onclick="closeDrawer()">
        <div class="mobile-drawer" onclick="event.stopPropagation()">
            <div class="drawer-header">
                <div class="drawer-brand">
                    <div class="logo-ring small">
                        <i class="fa-solid fa-hands-holding-child"></i>
                    </div>
                    <div class="drawer-brand-text">
                        <span class="d-name brand-name" data-brand-name>${currentLang === 'ta' ? CONFIG.name.ta : CONFIG.name.en}</span>
                        <span class="d-sub brand-sub" data-brand-sub>${currentLang === 'ta' ? CONFIG.name.en : CONFIG.subTitle.en}</span>
                    </div>
                </div>
                <button class="close-btn" onclick="closeDrawer()" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>
            </div>

            <!-- Drawer Language Selector -->
            <div class="drawer-lang-section">
                <span class="drawer-section-title"><i class="fa-solid fa-globe"></i> Language / மொழி</span>
                <div class="drawer-lang-toggle lang-toggle-segmented">
                    <button type="button" data-lang="ta" onclick="setLang('ta')" class="lang-btn ${currentLang === 'ta' ? 'active' : ''}">
                        <i class="fa-solid fa-check check-indicator"></i> தமிழ்
                    </button>
                    <button type="button" data-lang="en" onclick="setLang('en')" class="lang-btn ${currentLang === 'en' ? 'active' : ''}">
                        <i class="fa-solid fa-check check-indicator"></i> English
                    </button>
                </div>
            </div>

            <div class="drawer-menu-links">
                ${drawerLinksHTML}
            </div>

            <div class="drawer-cta">
                <button type="button" class="btn btn-amber btn-full" onclick="closeDrawer(); openDonationModal();" data-i18n="btn_donate_long">
                    <i class="fa-solid fa-heart"></i> ${t('btn_donate_long')}
                </button>
            </div>

            ${CONFIG.phones && CONFIG.phones.primary ? `
            <div class="drawer-quick-contact">
                <a href="tel:${CONFIG.phones.primary.replace(/\s/g, '')}" class="drawer-call-btn">
                    <i class="fa-solid fa-phone"></i> ${CONFIG.phones.primary}
                </a>
            </div>` : ''}
        </div>
    </div>`;

    const headerEl = document.getElementById('site-header');
    if (headerEl) headerEl.innerHTML = navHTML;
}

// ─── Inject Footer ───
function injectFooter() {
    const socialsHTML = buildSocialIconsHTML('footer-social');
    const addressText = currentLang === 'ta' ? (CONFIG.address.ta || CONFIG.address.en) : CONFIG.address.en;

    const footerServicesHTML = [
        { key: 'svc_food_title', label: t('svc_food_title') },
        { key: 'svc_edu_title', label: t('svc_edu_title') },
        { key: 'svc_health_title', label: t('svc_health_title') },
        { key: 'svc_elderly_title', label: t('svc_elderly_title') },
        { key: 'svc_welfare_title', label: t('svc_welfare_title') },
        { key: 'svc_women_title', label: t('svc_women_title') }
    ].map(s => `<li><a href="services.html" data-i18n="${s.key}">${s.label}</a></li>`).join('');

    const footerQuickLinksHTML = CONFIG.navLinks.map(link => {
        return `<li><a href="${link.href}" data-i18n="${link.key}">${t(link.key)}</a></li>`;
    }).join('');

    const footerHTML = `
    <div class="container">
        <div class="footer-grid">
            <!-- Brand Column -->
            <div class="footer-brand">
                <div class="footer-logo">
                    <div class="footer-logo-ring">
                        <i class="fa-solid fa-hands-holding-child"></i>
                    </div>
                    <div class="footer-logo-text">
                        <div class="name brand-name" data-brand-name>${currentLang === 'ta' ? CONFIG.name.ta : CONFIG.name.en}</div>
                        <div class="sub brand-sub" data-brand-sub>${currentLang === 'ta' ? CONFIG.name.en : CONFIG.subTitle.en}</div>
                    </div>
                </div>
                <p class="footer-description" data-i18n="footer_tagline">${t('footer_tagline')}</p>
                ${CONFIG.registrationNumber ? `<div class="footer-reg"><i class="fa-solid fa-certificate"></i> ${CONFIG.registrationNumber}</div>` : ''}
                ${socialsHTML}
            </div>

            <!-- Quick Links -->
            <div class="footer-col">
                <h4 data-i18n="footer_quick_links">${t('footer_quick_links')}</h4>
                <ul>
                    ${footerQuickLinksHTML}
                </ul>
            </div>

            <!-- Services -->
            <div class="footer-col">
                <h4 data-i18n="footer_our_services">${t('footer_our_services')}</h4>
                <ul>
                    ${footerServicesHTML}
                </ul>
            </div>

            <!-- Contact Column (Null-Safe) -->
            <div class="footer-col footer-contact-col">
                <h4 data-i18n="footer_contact_info">${t('footer_contact_info')}</h4>
                
                ${CONFIG.address ? `
                <div class="footer-contact-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <p id="footerAddress">${addressText}</p>
                </div>` : ''}

                ${CONFIG.phones && CONFIG.phones.primary ? `
                <div class="footer-contact-item">
                    <i class="fa-solid fa-phone"></i>
                    <p><a href="tel:${CONFIG.phones.primary.replace(/\s/g, '')}">${CONFIG.phones.primary}</a></p>
                </div>` : ''}

                ${CONFIG.phones && CONFIG.phones.secondary ? `
                <div class="footer-contact-item">
                    <i class="fa-solid fa-phone"></i>
                    <p><a href="tel:${CONFIG.phones.secondary.replace(/\s/g, '')}">${CONFIG.phones.secondary}</a></p>
                </div>` : ''}

                ${CONFIG.email ? `
                <div class="footer-contact-item">
                    <i class="fa-solid fa-envelope"></i>
                    <p><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></p>
                </div>` : ''}

                ${CONFIG.workingHours ? `
                <div class="footer-contact-item">
                    <i class="fa-solid fa-clock"></i>
                    <p id="footerHours">${currentLang === 'ta' ? CONFIG.workingHours.ta : CONFIG.workingHours.en}</p>
                </div>` : ''}
            </div>
        </div>

        <div class="footer-bottom">
            <div class="footer-bottom-inner">
                <span data-i18n="footer_copyright">${t('footer_copyright')}</span>
                <span class="footer-volunteer-badge" data-i18n="footer_transparency">
                    <i class="fa-solid fa-heart-circle-check"></i> ${t('footer_transparency')}
                </span>
            </div>
        </div>
    </div>`;

    const footerEl = document.getElementById('site-footer');
    if (footerEl) footerEl.innerHTML = footerHTML;
}

// ─── Inject Donation Modal ───
function injectDonationModal() {
    if (document.getElementById('donationModal')) return;

    const modalHTML = `
    <div class="donation-modal-overlay" id="donationModal" onclick="closeDonationModal()">
        <div class="donation-modal" onclick="event.stopPropagation()" role="dialog" aria-modal="true" aria-labelledby="modalDonateTitle">
            <button class="modal-close-btn" onclick="closeDonationModal()" aria-label="Close modal">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="modal-header">
                <div class="modal-heart-icon">
                    <i class="fa-solid fa-hands-holding-circle"></i>
                </div>
                <h3 id="modalDonateTitle" data-i18n="modal_donate_title">${t('modal_donate_title')}</h3>
                <p data-i18n="modal_donate_desc">${t('modal_donate_desc')}</p>
            </div>

            <div class="modal-bank-card">
                <div class="bank-card-badge">
                    <i class="fa-solid fa-building-columns"></i> <span data-i18n="bank_title">${t('bank_title')}</span>
                </div>
                
                <div class="modal-bank-rows">
                    <div class="bank-row">
                        <span class="b-lbl" data-i18n="bank_acc_name">${t('bank_acc_name')}</span>
                        <span class="b-val strong">${CONFIG.bankDetails.accountName || 'Ilangathir Trust'}</span>
                    </div>
                    <div class="bank-row">
                        <span class="b-lbl" data-i18n="bank_acc_num">${t('bank_acc_num')}</span>
                        <span class="b-val highlight-num">${CONFIG.bankDetails.accountNumber || 'XXXX XXXX XXXX'}</span>
                    </div>
                    <div class="bank-row">
                        <span class="b-lbl" data-i18n="bank_ifsc">${t('bank_ifsc')}</span>
                        <span class="b-val">${CONFIG.bankDetails.ifscCode || 'XXXX0000000'}</span>
                    </div>
                    <div class="bank-row">
                        <span class="b-lbl" data-i18n="bank_name_label">${t('bank_name_label')}</span>
                        <span class="b-val">${CONFIG.bankDetails.bankName || 'State Bank of India'}, ${CONFIG.bankDetails.branch || ''}</span>
                    </div>
                    ${CONFIG.bankDetails.upiId ? `
                    <div class="bank-row upi-row">
                        <span class="b-lbl" data-i18n="bank_upi_id">${t('bank_upi_id')}</span>
                        <div class="upi-val-group">
                            <span class="b-val upi-id-text" id="upiIdText">${CONFIG.bankDetails.upiId}</span>
                            <button type="button" class="btn-copy-upi" onclick="copyUPI()" aria-label="Copy UPI ID">
                                <i class="fa-regular fa-copy"></i> <span data-i18n="btn_copy_upi">${t('btn_copy_upi')}</span>
                            </button>
                        </div>
                    </div>` : ''}
                </div>
            </div>

            <p class="modal-note" data-i18n="bank_note">${t('bank_note')}</p>
        </div>
    </div>
    <div class="toast-notification" id="copyToast" role="status" aria-live="polite">
        <i class="fa-solid fa-circle-check"></i> <span id="toastMsg">${t('upi_copied')}</span>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// ─── Modal Controls ───
function openDonationModal() {
    const modal = document.getElementById('donationModal');
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDonationModal() {
    const modal = document.getElementById('donationModal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

function copyUPI() {
    if (!CONFIG.bankDetails || !CONFIG.bankDetails.upiId) return;
    navigator.clipboard.writeText(CONFIG.bankDetails.upiId).then(() => {
        showToast(t('upi_copied'));
    }).catch(() => {
        // Fallback for older browsers
        const temp = document.createElement('textarea');
        temp.value = CONFIG.bankDetails.upiId;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        showToast(t('upi_copied'));
    });
}

function showToast(message) {
    const toast = document.getElementById('copyToast');
    const msgEl = document.getElementById('toastMsg');
    if (!toast || !msgEl) return;
    msgEl.textContent = message;
    toast.classList.add('visible');
    setTimeout(() => {
        toast.classList.remove('visible');
    }, 3000);
}

// ─── Fast Toggle for Mobile Pill Button ───
function toggleLanguage() {
    const newLang = currentLang === 'ta' ? 'en' : 'ta';
    setLang(newLang);
}

// ─── Set Language & Update DOM ───
function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('ilangathir_lang', lang);
    
    // Update HTML root attributes and language-specific classes
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    document.body.classList.remove('lang-ta', 'lang-en');
    document.body.classList.add(`lang-${lang}`);

    // Update all [data-i18n] text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = t(key);
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = val;
        } else if (el.hasAttribute('data-i18n-html') || (typeof val === 'string' && val.includes('<'))) {
            el.innerHTML = val;
        } else {
            el.textContent = val;
        }
    });

    // Update input placeholders with data-i18n-ph
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        el.placeholder = t(key);
    });

    // Update brand titles in header and footer
    document.querySelectorAll('[data-brand-name]').forEach(el => {
        el.textContent = currentLang === 'ta' ? CONFIG.name.ta : CONFIG.name.en;
    });
    document.querySelectorAll('[data-brand-sub]').forEach(el => {
        el.textContent = currentLang === 'ta' ? CONFIG.name.en : CONFIG.subTitle.en;
    });

    // Update localized address & working hours in footer if present
    const footerAddress = document.getElementById('footerAddress');
    if (footerAddress && CONFIG.address) {
        footerAddress.textContent = currentLang === 'ta' ? (CONFIG.address.ta || CONFIG.address.en) : CONFIG.address.en;
    }
    const footerHours = document.getElementById('footerHours');
    if (footerHours && CONFIG.workingHours) {
        footerHours.textContent = currentLang === 'ta' ? CONFIG.workingHours.ta : CONFIG.workingHours.en;
    }

    // Update mobile navbar pill text: shows the OTHER language you can switch to
    const mobilePill = document.getElementById('mobileLangPillText');
    if (mobilePill) {
        mobilePill.textContent = currentLang === 'ta' ? 'EN' : 'தமிழ்';
    }

    // Update language toggle buttons in desktop & drawer
    document.querySelectorAll('.lang-btn, .lang-toggle button').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === lang) {
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
        } else {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        }
    });
}

// ─── Mobile Drawer Controls ───
function openDrawer() {
    const overlay = document.getElementById('drawerOverlay');
    if (overlay) {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeDrawer() {
    const overlay = document.getElementById('drawerOverlay');
    if (overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// ─── Navbar Scroll Effect ───
function initNavScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
}

// ─── Scroll Reveal Animations ───
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

// ─── Animated Counters ───
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = el.getAttribute('data-count');
                const isNumber = !isNaN(target);

                if (isNumber) {
                    const num = parseInt(target, 10);
                    const suffix = el.getAttribute('data-suffix') || '';
                    const prefix = el.getAttribute('data-prefix') || '';
                    let current = 0;
                    const step = Math.max(1, Math.floor(num / 45));
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= num) {
                            current = num;
                            clearInterval(timer);
                        }
                        el.textContent = prefix + current.toLocaleString() + suffix;
                    }, 25);
                } else {
                    el.textContent = target;
                }

                observer.unobserve(el);
            }
        });
    }, { threshold: 0.2 });

    counters.forEach(el => observer.observe(el));
}

// ─── Lightbox ───
function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if (!lb || !img) return;
    if (src) img.src = src;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    lb.classList.remove('open');
    document.body.style.overflow = '';
}

// ─── Global Initializer ───
function initSite(activePage) {
    // Set initial language from storage or default
    document.documentElement.lang = currentLang;
    document.documentElement.setAttribute('data-lang', currentLang);
    document.body.classList.add(`lang-${currentLang}`);

    // Inject shared layout components
    injectNavbar(activePage);
    injectFooter();
    injectDonationModal();

    // Apply translations
    setLang(currentLang);

    // Initialize interactive behaviors
    initNavScroll();
    initScrollReveal();
    animateCounters();

    // Bind any donate buttons in page content to open modal
    document.querySelectorAll('.btn-open-donate, a[href="contact.html"].btn-amber').forEach(btn => {
        // Keep contact link if explicit or enhance with modal
        if (btn.classList.contains('nav-donate-btn')) return;
        btn.addEventListener('click', (e) => {
            if (btn.getAttribute('href') === 'contact.html' && !btn.classList.contains('allow-navigate')) {
                e.preventDefault();
                openDonationModal();
            }
        });
    });

    // Close overlays with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
            closeDrawer();
            closeDonationModal();
        }
    });
}
