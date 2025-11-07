/**
 * Script principal para la galería de fotografía de naturaleza
 * Maneja la funcionalidad de filtrado, modal y navegación
 */

// Datos de las imágenes de la galería
// Nota: Estas son URLs de ejemplo de Unsplash. En producción, reemplazar con tus propias imágenes
const galleryImages = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        alt: 'Montañas al amanecer',
        category: 'paisajes',
        caption: 'Montañas al amanecer'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
        alt: 'Bosque verde',
        category: 'paisajes',
        caption: 'Bosque verde'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
        alt: 'Águila en vuelo',
        category: 'fauna',
        caption: 'Águila en vuelo'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800',
        alt: 'Mariposa en flor',
        category: 'fauna',
        caption: 'Mariposa en flor'
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
        alt: 'Rosa silvestre',
        category: 'flora',
        caption: 'Rosa silvestre'
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
        alt: 'Cascada en el bosque',
        category: 'paisajes',
        caption: 'Cascada en el bosque'
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
        alt: 'Lago de montaña',
        category: 'paisajes',
        caption: 'Lago de montaña'
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
        alt: 'Oso pardo',
        category: 'fauna',
        caption: 'Oso pardo'
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800',
        alt: 'Flor de loto',
        category: 'flora',
        caption: 'Flor de loto'
    },
    {
        id: 10,
        src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
        alt: 'Puesta de sol en el desierto',
        category: 'paisajes',
        caption: 'Puesta de sol en el desierto'
    },
    {
        id: 11,
        src: 'https://images.unsplash.com/photo-1517849845537-4d58b998e4d1?w=800',
        alt: 'Colibrí',
        category: 'fauna',
        caption: 'Colibrí'
    },
    {
        id: 12,
        src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
        alt: 'Girasoles',
        category: 'flora',
        caption: 'Girasoles'
    }
];

/**
 * Inicializa la galería cargando las imágenes
 */
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = '';
    
    galleryImages.forEach(image => {
        const item = createGalleryItem(image);
        galleryGrid.appendChild(item);
    });
}

/**
 * Crea un elemento de galería
 * @param {Object} image - Objeto con datos de la imagen
 * @returns {HTMLElement} Elemento HTML de la galería
 */
function createGalleryItem(image) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.category = image.category;
    
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.loading = 'lazy';
    
    const caption = document.createElement('div');
    caption.className = 'gallery-item-caption';
    caption.textContent = image.caption;
    
    item.appendChild(img);
    item.appendChild(caption);
    
    // Event listener para abrir el modal
    item.addEventListener('click', () => openModal(image));
    
    return item;
}

/**
 * Filtra las imágenes de la galería por categoría
 * @param {string} category - Categoría a filtrar ('all' para mostrar todas)
 */
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

/**
 * Abre el modal con la imagen ampliada
 * @param {Object} image - Objeto con datos de la imagen
 */
function openModal(image) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    if (!modal || !modalImage || !modalCaption) return;
    
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalCaption.textContent = image.caption;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal
 */
function closeModal() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/**
 * Inicializa los filtros de la galería
 */
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Filtrar galería
            const category = button.dataset.filter;
            filterGallery(category);
        });
    });
}

/**
 * Inicializa el menú móvil
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animación del botón hamburguesa
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Cerrar menú al hacer click en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

/**
 * Inicializa el scroll suave para los enlaces de navegación
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Inicializa el modal
 */
function initModal() {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.modal-close');
    
    if (!modal) return;
    
    // Cerrar al hacer click en el botón de cerrar
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Cerrar al hacer click fuera de la imagen
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Cerrar con la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

/**
 * Inicializa todas las funcionalidades cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    initFilters();
    initMobileMenu();
    initSmoothScroll();
    initModal();
    
    console.log('🌿 Galería de fotografía de naturaleza inicializada correctamente');
});

