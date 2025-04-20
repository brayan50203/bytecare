// Dados dos serviços
const servicesData = [
    {
        icon: 'fas fa-shield-alt',
        title: 'Segurança da Informação',
        description: 'Proteção contra ameaças cibernéticas, firewall, antivírus e políticas de segurança para manter seus dados protegidos.'
    },
    {
        icon: 'fas fa-cloud',
        title: 'Cloud Computing',
        description: 'Soluções em nuvem para armazenamento, backup e virtualização de servidores com alta disponibilidade.'
    },
    {
        icon: 'fas fa-desktop',
        title: 'Suporte Técnico',
        description: 'Assistência técnica remota e presencial para computadores, redes e sistemas operacionais.'
    },
    {
        icon: 'fas fa-mobile-alt',
        title: 'Desenvolvimento de Software',
        description: 'Criação de sistemas personalizados, aplicativos mobile e web para atender às necessidades do seu negócio.'
    },
    {
        icon: 'fas fa-network-wired',
        title: 'Redes e Infraestrutura',
        description: 'Projeto, implantação e manutenção de redes corporativas com alta performance e segurança.'
    },
    {
        icon: 'fas fa-chart-line',
        title: 'Consultoria em TI',
        description: 'Análise e planejamento estratégico de tecnologia para alinhar a TI com os objetivos do negócio.'
    }
];

// Dados dos depoimentos
const testimonialsData = [
    {
        text: 'A BYTECARE revolucionou nossa infraestrutura de TI, reduzindo nossos custos operacionais em 30% e aumentando a produtividade da equipe.',
        client: 'João Silva, ABC Empresas'
    },
    {
        text: 'O suporte técnico rápido e eficiente da BYTECARE nos permitiu resolver problemas críticos com mínimo de tempo de inatividade.',
        client: 'Maria Souza, XYZ Tecnologia'
    },
    {
        text: 'A consultoria em segurança da informação nos ajudou a proteger nossos dados sensíveis e estar em conformidade com as regulamentações.',
        client: 'Carlos Oliveira, 123 Serviços'
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Gerar cards de serviços
    generateServiceCards();
    
    // Gerar depoimentos
    generateTestimonials();
    
    // Atualizar ano no footer
    updateCurrentYear();
    
    // Inicializar menu mobile
    initMobileMenu();
    
    // Inicializar formulário de contato
    initContactForm();
    
    // Inicializar chat widget
    initChatWidget();
    
    // Inicializar dark mode toggle
    initDarkModeToggle();
    
    // Inicializar scroll suave
    initSmoothScroll();
    
    // Inicializar observador de elementos
    initIntersectionObserver();
});

// Função para gerar cards de serviços
function generateServiceCards() {
    const serviceGrid = document.querySelector('.service-grid');
    
    if (serviceGrid) {
        serviceGrid.innerHTML = '';
        
        servicesData.forEach((service, index) => {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.style.setProperty('--order', index);
            card.style.animationDelay = `${index * 0.1}s`;
            
            card.innerHTML = `
                <div class="service-icon"><i class="${service.icon}"></i></div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            `;
            
            serviceGrid.appendChild(card);
        });
    }
}

// Função para gerar depoimentos
function generateTestimonials() {
    const testimonialGrid = document.querySelector('.testimonial-grid');
    
    if (testimonialGrid) {
        testimonialGrid.innerHTML = '';
        
        testimonialsData.forEach(testimonial => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            
            card.innerHTML = `
                <p>${testimonial.text}</p>
                <div class="client">- ${testimonial.client}</div>
            `;
            
            testimonialGrid.appendChild(card);
        });
    }
}

// Função para atualizar o ano no footer
function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Função para inicializar o menu mobile
function initMobileMenu() {
    const menuMobile = document.querySelector('.menu-mobile');
    const navMenu = document.getElementById('nav-menu');
    const hamburgers = document.querySelectorAll('.hamburger');
    
    if (menuMobile && navMenu) {
        menuMobile.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Transformar em "X"
            if (navMenu.classList.contains('active')) {
                hamburgers[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                hamburgers[1].style.opacity = '0';
                hamburgers[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                hamburgers.forEach(h => {
                    h.style.transform = 'none';
                    h.style.opacity = '1';
                });
            }
        });
    }
}

// Função para inicializar o formulário de contato
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simular envio
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            console.log('Formulário enviado:', data);
            
            // Mostrar mensagem de sucesso
            showAlert('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            contactForm.reset();
        });
    }
}

// Função para mostrar alertas
function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    // Estilos para o alerta (podem ser movidos para o CSS)
    alert.style.position = 'fixed';
    alert.style.top = '20px';
    alert.style.right = '20px';
    alert.style.padding = '1rem';
    alert.style.borderRadius = '4px';
    alert.style.color = 'white';
    alert.style.zIndex = '2000';
    alert.style.animation = 'fadeIn 0.3s ease-out';
    
    // Cores baseadas no tipo
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    
    alert.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(alert);
    
    // Remover após 5 segundos
    setTimeout(() => {
        alert.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(alert);
        }, 300);
    }, 5000);
}

// Função para inicializar o chat widget
function initChatWidget() {
    const chatToggle = document.getElementById('chatToggle');
    const chatWidget = document.getElementById('chatWidget');
    const chatBody = document.getElementById('chatBody');
    const chatInput = document.getElementById('chatInput');
    const sendMessage = document.getElementById('sendMessage');
    
    if (chatToggle && chatWidget) {
        chatToggle.addEventListener('click', () => {
            chatWidget.classList.toggle('active');
        });
        
        // Enviar mensagem ao clicar no botão
        sendMessage.addEventListener('click', sendChatMessage);
        
        // Enviar mensagem ao pressionar Enter
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
        
        function sendChatMessage() {
            const message = chatInput.value.trim();
            if (message) {
                // Adicionar mensagem do usuário
                addMessageToChat(message, 'user-message');
                
                // Limpar input
                chatInput.value = '';
                
                // Simular resposta automática
                setTimeout(() => {
                    addMessageToChat('Obrigado por sua mensagem! Nossa equipe entrará em contato em breve.', 'bot-message');
                }, 1000);
            }
        }
        
        function addMessageToChat(message, className) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `chat-message ${className}`;
            messageDiv.textContent = message;
            chatBody.appendChild(messageDiv);
            
            // Rolagem automática
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    }
}

// Função para inicializar o dark mode toggle
function initDarkModeToggle() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.setAttribute('aria-label', 'Alternar modo escuro');
    
    // Estilos para o botão (podem ser movidos para o CSS)
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.bottom = '90px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.width = '50px';
    darkModeToggle.style.height = '50px';
    darkModeToggle.style.borderRadius = '50%';
    darkModeToggle.style.backgroundColor = 'var(--secondary)';
    darkModeToggle.style.color = 'white';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.cursor = 'pointer';
    darkModeToggle.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    darkModeToggle.style.zIndex = '1000';
    darkModeToggle.style.display = 'flex';
    darkModeToggle.style.alignItems = 'center';
    darkModeToggle.style.justifyContent = 'center';
    darkModeToggle.style.transition = 'transform 0.3s';
    
    darkModeToggle.addEventListener('mouseenter', () => {
        darkModeToggle.style.transform = 'scale(1.1)';
    });
    
    darkModeToggle.addEventListener('mouseleave', () => {
        darkModeToggle.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(darkModeToggle);
    
    // Alternar dark mode
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    
    // Verificar preferência salva
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Função para inicializar scroll suave
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navMenu = document.getElementById('nav-menu');
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile se estiver aberto
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const hamburgers = document.querySelectorAll('.hamburger');
                    hamburgers.forEach(h => {
                        h.style.transform = 'none';
                        h.style.opacity = '1';
                    });
                }
            }
        });
    });
}

// Função para inicializar o observador de elementos
function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });
}

// Google Analytics
if (typeof gtag !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-XXXXX-X');
}

