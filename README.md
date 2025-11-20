# Sala Cine - Frontend

Aplicación web para la gestión de salas de cine desarrollada con **Angular 20**, **Tailwind CSS** y **DaisyUI**.

**Autor:** Sebastian Valarezo

## 📋 Características

- ✅ **Login** con credenciales por defecto (admin/admin)
- ✅ **Dashboard** con indicadores de:
  - Total de salas de cine
  - Salas disponibles
  - Total de películas
- ✅ **Gestión de Películas** (crear, listar, editar)
- ✅ **Gestión de Salas** (crear, listar, editar)
- ✅ **Asignación de Películas a Salas**
- ✅ **Menú de navegación** integrado
- ✅ **Diseño responsivo** con Tailwind CSS + DaisyUI

## 🛠️ Requisitos Previos

- Node.js >= 20.x
- npm >= 11.x
- Angular CLI >= 20.x

## 📦 Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/sala-cine-frontend.git
cd sala-cine-frontend
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno (opcional)
Si necesitas conectarte a un API backend, crea un archivo `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api'
};
```

## 🚀 Uso

### Iniciar el servidor de desarrollo
```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200/`

### Construir para producción
```bash
npm build
```

### Ejecutar pruebas
```bash
npm test
```

## 🔐 Credenciales por Defecto

Para acceder a la aplicación, utiliza:
- **Usuario:** `admin`
- **Contraseña:** `admin`

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── auth/                 # Módulo de autenticación
│   │   └── login/            # Componente de login
│   ├── dashboard/            # Módulo de dashboard
│   │   └── dashboard/        # Componente principal
│   ├── peliculas/            # Módulo de películas
│   │   ├── list/             # Listado de películas
│   │   └── edit/             # Edición de película
│   ├── salas/                # Módulo de salas
│   │   ├── list/             # Listado de salas
│   │   └── edit/             # Edición de sala
│   ├── asignaciones/         # Módulo de asignaciones
│   │   └── asignar/          # Asignación de películas a salas
│   ├── app.ts               # Componente raíz
│   ├── app.routes.ts        # Rutas principales
│   └── app.config.ts        # Configuración de la aplicación
├── styles.css               # Estilos globales
└── index.html              # Archivo HTML principal
```

## 🎨 Personalización

### Temas de DaisyUI
Para cambiar el tema, modifica `tailwind.config.cjs`:

```javascript
daisyui: {
  themes: ['light', 'dark']
}
```

## 📝 Scripts Disponibles

| Script | Descripción |
|--------|------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm build` | Construye la aplicación para producción |
| `npm test` | Ejecuta las pruebas unitarias |

## 🔄 Integración con Backend

Este frontend está diseñado para trabajar con un backend .NET (API REST).

## 🐛 Solución de Problemas

### Puerto 4200 ya está en uso
```bash
ng serve --port 4300
```

### Errores de dependencias
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Recursos

- [Documentación de Angular](https://angular.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [DaisyUI Components](https://daisyui.com/components/)

## 👤 Autor

**Sebastian Valarezo**

---

**Última actualización:** Noviembre 2025
