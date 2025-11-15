gsap.registerPlugin(ScrollTrigger);
let lightbox;

document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        en: {
          pageTitle: "KRx Web Design - We Create Amazing Websites",
          navServices: "Services", navOurWorks: "Our Works", navPricing: "Pricing", navContact: "Contact",
          headerButton: "Start Project", heroTitle: "Websites that <span class='gradient-text'>Boost</span> your Business",
          heroSubtitle: "We craft fast, modern, and optimized digital experiences that captivate your audience and drive results.",
          heroCta: "Let's Build Together", 
          servicesTitle: "Our <span class='gradient-text'>Services</span>",
          service1Title: "Responsive Design", service1Desc: "Flawless experiences across all devices—mobile, tablet, and desktop with adaptive layouts.",
          service2Title: "High Performance", service2Desc: "Lightning-fast loading times optimized for exceptional user experience and SEO rankings.",
          service3Title: "Advanced SEO", service3Desc: "Strategic optimization so your customers find you effortlessly on Google search results.",
          
          portfolioTitle: "Our <span class='gradient-text'>Portfolio</span>",
          project1Title: "Café & Restaurant", project1Desc: "Digital menu, gallery, and online reservations.",
          project2Title: "Modern E-commerce", project2Desc: "Catalog, shopping cart, and secure payments.",
          project3Title: "Law Firm", project3Desc: "Design focused on trust and credibility.",
          project4Title: "Real Estate Portal", project4Desc: "Listings, filters, and virtual tours.",

          pricingTitle: "<span class='gradient-text'>Transparent</span> Pricing",
          pricingSubtitle: "A simple package to launch your business digitally.",
          packageTitle: "Starter Package", packageSubtitle: "Perfect for small businesses and professionals.",
          packagePrice: "$500", packagePriceTerm: "one-time payment",
          feature1: "Up to 5 page website", feature2: "100% Responsive Design",
          feature3: "Contact Form Integration", feature4: "Advanced SEO Optimization", 
          feature5: "Fast Delivery (7-14 days)", feature6: "30 Days Free Support",
          partialPaymentsTitle: "Flexible Payments",
          partialPaymentsDesc: "Pay monthly until completion. We provide hosting and admin access.",
          contactForPlan: "Contact for Plan", contactTitle: "Let's <span class='gradient-text'>Connect</span>",
          contactSubtitle: "Share your vision and let's transform it into digital reality.",
          labelName: "Name", labelEmail: "Email", labelMessage: "Message",
          inputName: "John Doe", inputEmail: "john@example.com", inputMessage: "Tell us about your project...",
          submitButton: "Send Message", packageButton: "Pay Now & Get Started",
          confirmationTitle: "Message Sent!", confirmationSubtitle: "Thank you for reaching out. We'll get back to you shortly.",
          footerRights: "© 2025 KRx. All rights reserved.",

          
          cafe1Title: "Spanish Espresso", cafe1Desc: "A modern and clean design for a Spanish cafe.",
          cafe2Title: "Golden Coffee Concept", cafe2Desc: "A premium concept on a dark theme.",
          ecom1Title: "Modern E-commerce - Homepage", ecom1Desc: "A modern and intuitive UI for online shopping.",
          ecom2Title: "Modern E-commerce - Product Page", ecom2Desc: "Product details with customization options.",
          law1Title: "Law Firm - Homepage", law1Desc: "Elegant and professional design for a law firm.",
          law2Title: "Law Firm - Services", law2Desc: "Clear presentation of the legal services offered.",
          estate1Title: "Real Estate Portal - Search", estate1Desc: "Advanced search features and property display.",
          estate2Title: "Real Estate Portal - Property Detail", estate2Desc: "Detailed listing page with gallery and information."
        },
        es: {
          pageTitle: "KRx Diseño Web - Creamos Sitios Increíbles",
          navServices: "Servicios", navOurWorks: "Proyectos", navPricing: "Precios", navContact: "Contacto",
          headerButton: "Iniciar Proyecto", heroTitle: "Sitios web que <span class='gradient-text'>Impulsan</span> tu Negocio",
          heroSubtitle: "Creamos experiencias digitales rápidas, modernas y optimizadas que cautivan a tu audiencia.",
          heroCta: "Construyamos Juntos", 
          servicesTitle: "Nuestros <span class='gradient-text'>Servicios</span>",
          service1Title: "Diseño Adaptativo", service1Desc: "Experiencias perfectas en todos los dispositivos con diseños adaptativos.",
          service2Title: "Alto Rendimiento", service2Desc: "Carga ultrarrápida optimizada para experiencia de usuario excepcional.",
          service3Title: "SEO Avanzado", service3Desc: "Optimización estratégica para que te encuentren fácilmente en Google.",
          
          portfolioTitle: "Nuestro <span class'gradient-text'>Portafolio</span>",
          project1Title: "Café y Restaurante", project1Desc: "Menú digital, galería y reservas en línea.",
          project2Title: "E-commerce Moderno", project2Desc: "Catálogo, carrito de compras y pagos seguros.",
          project3Title: "Firma de Abogados", project3Desc: "Diseño enfocado en la confianza y credibilidad.",
          project4Title: "Portal Inmobiliario", project4Desc: "Listados, filtros y tours virtuales.",

          pricingTitle: "Precios <span class='gradient-text'>Transparentes</span>",
          pricingSubtitle: "Un paquete simple para lanzar tu negocio digitalmente.",
          packageTitle: "Paquete Inicial", packageSubtitle: "Perfecto para pequeñas empresas y profesionales.",
          packagePrice: "€450", packagePriceTerm: "pago único",
          feature1: "Sitio de hasta 5 páginas", feature2: "Diseño 100% Adaptativo",
          feature3: "Integración de Formulario", feature4: "Optimización SEO Avanzada", 
          feature5: "Entrega Rápida (7-14 días)", feature6: "30 Días de Soporte Gratis",
          partialPaymentsTitle: "Pagos Flexibles",
          partialPaymentsDesc: "Paga mensualmente hasta completar. Ofrecemos hosting y acceso admin.",
          contactForPlan: "Contactar por Plan", contactTitle: "Hablemos <span class='gradient-text'>Hoy</span>",
          contactSubtitle: "Comparte tu visión y transformémosla en realidad digital.",
          labelName: "Nombre", labelEmail: "Correo", labelMessage: "Mensaje",
          inputName: "Juan Pérez", inputEmail: "juan@ejemplo.com", inputMessage: "Cuéntanos sobre tu proyecto...",
          submitButton: "Enviar Mensaje", packageButton: "Pagar Ahora",
          confirmationTitle: "¡Mensaje Enviado!", confirmationSubtitle: "Gracias por contactarnos. Te responderemos pronto.",
          footerRights: "© 2025 KRx. Todos los derechos reservados.",

          
          cafe1Title: "Espresso Español", cafe1Desc: "Un diseño moderno y limpio para un café español.",
          cafe2Title: "Concepto de Café Dorado", cafe2Desc: "Un concepto premium sobre un tema oscuro.",
          ecom1Title: "E-commerce Moderno - Inicio", ecom1Desc: "Una interfaz de usuario moderna e intuitiva para compras en línea.",
          ecom2Title: "E-commerce Moderno - Página de Producto", ecom2Desc: "Detalles del producto con opciones de personalización.",
          law1Title: "Firma de Abogados - Inicio", law1Desc: "Diseño elegante y profesional para un bufete de abogados.",
          law2Title: "Firma de Abogados - Servicios", law2Desc: "Presentación clara de los servicios legales ofrecidos.",
          estate1Title: "Portal Inmobiliario - Búsqueda", estate1Desc: "Funciones de búsqueda avanzadas y visualización de propiedades.",
          estate2Title: "Portal Inmobiliario - Detalle de Propiedad", estate2Desc: "Página de listado detallada con galería e información."
        }
    };
            
    let currentLang = localStorage.getItem('language') || (navigator.language.slice(0, 2) === 'es' ? 'es' : 'en');

    function setLanguage(lang) {
        currentLang = lang;
        
        
        Object.keys(translations[lang]).forEach(key => {
            document.querySelectorAll(`[data-key="${key}"]`).forEach(el => {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            });
        });
        
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        
        document.querySelectorAll('.glightbox').forEach(el => {
            const titleKey = el.dataset.titleKey;
            const descKey = el.dataset.descriptionKey;
            
            if (titleKey && translations[lang][titleKey]) {
                el.setAttribute('data-title', translations[lang][titleKey]);
            }
            if (descKey && translations[lang][descKey]) {
                el.setAttribute('data-description', translations[lang][descKey]);
            }
        });

        
        if (lightbox) {
            lightbox.destroy();
        }
        
        lightbox = GLightbox({
            selector: '.glightbox',
            touchNavigation: true,
            loop: true,
            autoplayVideos: true,
            skin: 'custom-modern', 
            height: 'auto',
            width: '90%',
            zoomable: true,
            moreText: 'Voir plus',
            slideEffect: 'fade',
            cssEfects: {
                fade: { in: 'fadeIn', out: 'fadeOut' },
                slide: { in: 'slideInRight', out: 'slideOutLeft' }
            }
        });
    } 

    
    setLanguage(currentLang);

    
    document.getElementById('lang-switcher').addEventListener('click', (e) => {
        if (e.target.dataset.lang) {
            setLanguage(e.target.dataset.lang);
            localStorage.setItem('language', e.target.dataset.lang);
        }
    });

    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        document.getElementById('scroll-progress').style.width = scrollPercent + '%';
    });

    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        const currentScroll = window.pageYOffset;
        header.classList.toggle('scrolled', currentScroll > 100);
    });

    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.classList.add('light');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        themeToggle.classList.toggle('light');
        const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
    });

    gsap.to('.hero-title', { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 });
    gsap.to('.hero-subtitle', { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 });
    gsap.to('.hero-cta', { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.9 });

    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let mouseX = 0, mouseY = 0;
    const resizeCanvas = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = Math.random() * 30 + 1;
            this.colorPhase = Math.random() * Math.PI * 2;
        }
        update() {
            const dx = mouseX - this.x, dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const forceDirectionX = dx / distance, forceDirectionY = dy / distance;
            const maxDistance = 150;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * this.density * 0.6, directionY = forceDirectionY * force * this.density * 0.6;
            if (distance < maxDistance) { this.x -= directionX; this.y -= directionY; } else {
                if (this.x !== this.baseX) { this.x -= (this.x - this.baseX) / 10; }
                if (this.y !== this.baseY) { this.y -= (this.y - this.baseY) / 10; }
            }
            this.colorPhase += 0.02;
        }
        draw() {
            const r = Math.floor(135 + Math.sin(this.colorPhase) * 30);
            const g = Math.floor(206 + Math.sin(this.colorPhase + 2) * 20);
            const b = Math.floor(235 + Math.sin(this.colorPhase + 4) * 20);
            ctx.globalAlpha = 0.8;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1)`);
            gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }

    let particles = [];
    for (let i = 0; i < 240; i++) { particles.push(new Particle()); }
    function connectParticles() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x, dy = particles[a].y - particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 120) {
                    ctx.strokeStyle = `rgba(135, 206, 235, ${0.3 * (1 - distance / 120)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        connectParticles();
        requestAnimationFrame(animate);
    }
    animate();

    emailjs.init('8Gghap_bOXQwRTFuz');
    const contactForm = document.getElementById('contact-form');
    const confirmationPopup = document.getElementById('confirmation-message');
    const closeConfirmationBtn = document.getElementById('close-confirmation');
    const submitBtn = document.getElementById('submit-button');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const originalBtnText = submitBtn.textContent;
        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled = true;

        emailjs.sendForm('service_przi8z3', 'template_3wvcpfy', this).then(() => {
            confirmationPopup.classList.remove('hidden');
            confirmationPopup.classList.add('flex');
            confirmationPopup.style.animationName = 'fadeIn';
            this.reset();
        }, (error) => {
            alert('Failed to send message. Please try again. Error: ' + JSON.stringify(error));
        }).finally(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        });
    });

    closeConfirmationBtn.addEventListener('click', () => {
        confirmationPopup.style.animationName = 'fadeOut';
        setTimeout(() => {
            confirmationPopup.classList.add('hidden');
            confirmationPopup.classList.remove('flex');
        }, 400);
    });
    
}); 

window.onload = () => {
  const preloader = document.getElementById('preloader');
  const body = document.body;

  preloader.classList.add('hidden');
  
 
  body.classList.remove('loading');
};