# E-Commerce Template - Proyecto Educativo

Plantilla de e-commerce en React para aprender conceptos fundamentales de desarrollo web moderno.

## 🎯 Objetivo Educativo

Este proyecto enseña:
- **Separación de responsabilidades** mediante arquitectura modular
- **React Router v6** para navegación entre páginas
- **Custom Hooks** para lógica reutilizable
- **Zustand** para gestión de estado global
- **Componentes reutilizables** con props y composición

## 🚀 Iniciar el Proyecto

```bash
npm install
npm run dev
```

## 📁 Estructura del Proyecto

```
src/
├── static-data/          # Datos estáticos de productos
├── store/                # Store de Zustand (carrito)
├── hooks/                # Custom hooks globales (useAxios)
├── modules/              # Módulos por funcionalidad
│   ├── shared/           # Componentes compartidos (Navbar, Layout)
│   ├── auth/             # Autenticación (botones estáticos)
│   └── products/         # Productos (componentes + hooks)
└── pages/                # Páginas principales (Home, Products, Cart)
```

## 🔧 Tecnologías

- **React + Vite** - Framework y build tool
- **Tailwind CSS v4 + DaisyUI** - Estilos y componentes UI
- **Zustand** - Gestión de estado ligera
- **React Router v6** - Navegación SPA
- **Axios** - Cliente HTTP

## 📚 Conceptos Clave

### Custom Hooks

**`useProducts`** - Manejo de productos con filtrado
- Filtra por categoría y búsqueda de texto
- Retorna productos filtrados y categorías disponibles

### Zustand Store

**`useCartStore`** - Gestión del carrito de compras
- `addItem()` - Agregar producto al carrito
- `removeItem()` - Eliminar producto
- `updateQuantity()` - Actualizar cantidad
- `getTotal()` - Calcular total del carrito

### Componentes DaisyUI

- **navbar** - Barra de navegación responsive
- **card** - Tarjetas de productos
- **btn** - Botones con variantes (primary, ghost, outline)
- **badge** - Etiquetas de categoría
- **hero** - Sección hero de bienvenida

## 🎨 Rutas

- `/` - Página de inicio con hero section
- `/products` - Catálogo de productos con filtros
- `/cart` - Carrito de compras con resumen

## 💡 Para Estudiantes

1. **Explora la estructura modular** - Cada módulo agrupa componentes relacionados
2. **Revisa los custom hooks** - Observa cómo extraer lógica reutilizable
3. **Analiza el store de Zustand** - Gestión de estado simple y efectiva
4. **Estudia React Router** - Navegación declarativa con componentes
