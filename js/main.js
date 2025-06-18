class App {
    constructor() {
        this.config = siteConfig;
        this.data = dataConfig;
        this.init();
    }

    init() {
        this.setupNavigation();
        this.loadComponents();
        this.setupSmoothScroll();
        this.updateSiteInfo();
    }

    setupNavigation() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                mobileToggle.classList.toggle('active');
            });
        }

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navigation')) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    }

    loadComponents() {
        const componentsToLoad = [
            { selector: '[data-component="activities"]', name: 'activities', data: this.data.activities },
            { selector: '[data-component="events"]', name: 'events', data: this.data.events },
            { selector: '[data-component="members"]', name: 'members', data: this.data.members },
            { selector: '[data-component="gallery"]', name: 'gallery', data: this.data.gallery },
            { selector: '[data-component="contact-form"]', name: 'contact-form', data: null }
        ];

        componentsToLoad.forEach(({ selector, name, data }) => {
            const container = document.querySelector(selector);
            if (container) {
                componentManager.render(name, container, data);
            }
        });
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offset = 80;
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    const navMenu = document.querySelector('.nav-menu');
                    const mobileToggle = document.querySelector('.mobile-menu-toggle');
                    navMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
            });
        });
    }

    updateSiteInfo() {
        const logo = document.querySelector('.logo');
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');

        if (logo) logo.textContent = this.config.siteName;
        if (heroTitle) heroTitle.textContent = `${this.config.siteName}へようこそ`;
        if (heroSubtitle) heroSubtitle.textContent = this.config.siteTagline;
    }

    async loadExternalData(endpoint) {
        try {
            const response = await fetch(this.config.api.baseUrl + endpoint);
            if (!response.ok) throw new Error('Failed to load data');
            return await response.json();
        } catch (error) {
            console.error('Error loading data:', error);
            return null;
        }
    }

    addCustomComponent(name, component) {
        componentManager.register(name, component);
    }

    updateData(key, newData) {
        this.data[key] = newData;
        this.loadComponents();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});