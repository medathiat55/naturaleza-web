# Naturaleza en Foco - Documentación

## Descripción del Proyecto

**Naturaleza en Foco** es una página web sencilla y moderna dedicada a la fotografía de naturaleza. El sitio presenta una galería interactiva de imágenes organizadas por categorías (Paisajes, Fauna, Flora), con un diseño responsive que se adapta a diferentes dispositivos.

## Estructura del Proyecto

```
nueva/
├── index.html          # Página principal HTML
├── styles.css          # Estilos CSS del sitio
├── script.js           # Funcionalidad JavaScript
├── docs/              # Documentación del proyecto
│   └── README.md      # Este archivo
└── .tareas.md         # Registro de tareas realizadas
```

## Características Principales

### 1. Diseño Responsive
- Adaptación automática a dispositivos móviles, tablets y escritorio
- Menú hamburguesa para dispositivos móviles
- Grid de galería flexible que se ajusta al tamaño de pantalla

### 2. Galería Interactiva
- Filtrado por categorías (Todas, Paisajes, Fauna, Flora)
- Modal para vista ampliada de imágenes
- Efectos de hover y transiciones suaves
- Carga lazy de imágenes para mejor rendimiento

### 3. Navegación
- Header sticky que permanece visible al hacer scroll
- Navegación suave entre secciones
- Enlaces de contacto integrados

### 4. Secciones
- **Hero**: Sección principal con llamada a la acción
- **Sobre Mí**: Información sobre el fotógrafo
- **Galería**: Colección de fotografías con filtros
- **Contacto**: Información de contacto

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS, flexbox y grid
- **JavaScript (Vanilla)**: Sin dependencias externas
- **Unsplash API**: Imágenes de ejemplo (reemplazar con imágenes propias en producción)

## Personalización

### Reemplazar Imágenes

Las imágenes actuales son de ejemplo desde Unsplash. Para usar tus propias imágenes:

1. Coloca tus imágenes en una carpeta `images/` dentro del proyecto
2. Edita el array `galleryImages` en `script.js`
3. Actualiza las rutas `src` con las rutas de tus imágenes locales

Ejemplo:
```javascript
{
    id: 1,
    src: 'images/mi-foto.jpg',
    alt: 'Descripción de la foto',
    category: 'paisajes',
    caption: 'Título de la foto'
}
```

### Personalizar Colores

Los colores se definen en variables CSS al inicio de `styles.css`:

```css
:root {
    --color-primary: #2d5016;    /* Color principal (verde oscuro) */
    --color-secondary: #4a7c2a;  /* Color secundario */
    --color-accent: #6b9e3e;      /* Color de acento */
    --color-light: #e8f5e9;       /* Color de fondo claro */
    /* ... más variables */
}
```

### Agregar Más Categorías

1. Agrega un nuevo botón de filtro en `index.html`:
```html
<button class="filter-btn" data-filter="nueva-categoria">Nueva Categoría</button>
```

2. Asigna la categoría a las imágenes en `script.js`

## Funcionalidades JavaScript

### Funciones Principales

- `initGallery()`: Carga e inicializa las imágenes en la galería
- `filterGallery(category)`: Filtra imágenes por categoría
- `openModal(image)`: Abre el modal con imagen ampliada
- `closeModal()`: Cierra el modal
- `initFilters()`: Inicializa los botones de filtro
- `initMobileMenu()`: Maneja el menú móvil
- `initSmoothScroll()`: Implementa scroll suave
- `initModal()`: Configura el modal y sus eventos

## Compatibilidad de Navegadores

- Chrome/Edge (últimas versiones)
- Firefox (últimas versiones)
- Safari (últimas versiones)
- Navegadores móviles modernos

## Mejoras Futuras Sugeridas

- [ ] Integración con un CMS para gestión de contenido
- [ ] Sistema de comentarios en las fotografías
- [ ] Galería de lightbox mejorada
- [ ] Integración con redes sociales
- [ ] Blog de fotografía
- [ ] Sistema de búsqueda de imágenes
- [ ] Modo oscuro/claro
- [ ] Optimización de imágenes con WebP
- [ ] PWA (Progressive Web App)

## Notas de Desarrollo

- El código está estructurado de forma modular y comentado
- Se siguen las mejores prácticas de accesibilidad web
- Las imágenes utilizan lazy loading para mejorar el rendimiento
- El diseño es completamente responsive

## Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.

---

**Última actualización**: 2024

