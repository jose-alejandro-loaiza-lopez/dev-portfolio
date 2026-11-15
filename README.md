# Dev Portfolio

Portafolio profesional de **José Alejandro Loaiza López**, estudiante de Ingeniería de Sistemas en la Unidad Central del Valle del Cauca (UCEVA).

El proyecto funciona como catálogo centralizado de cinco proyectos: presenta el perfil profesional, las tecnologías utilizadas y una tarjeta por proyecto con enlaces a su repositorio de GitHub y a su aplicación publicada.

[![CI/CD](https://github.com/jose-alejandro-loaiza-lopez/dev-portfolio/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/jose-alejandro-loaiza-lopez/dev-portfolio/actions/workflows/deploy-pages.yml)
[![Angular](https://img.shields.io/badge/Angular-20-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-online-38bdf8?logo=github)](https://jose-alejandro-loaiza-lopez.github.io/dev-portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-34d399.svg)](./LICENSE)

## Demo

**https://jose-alejandro-loaiza-lopez.github.io/dev-portfolio/**

## Catálogo

| # | Proyecto | Repositorio | Demo |
|---|----------|-------------|------|
| 1 | Dev Portfolio | [Repositorio](https://github.com/jose-alejandro-loaiza-lopez/dev-portfolio) | [GitHub Pages](https://jose-alejandro-loaiza-lopez.github.io/dev-portfolio/) |
| 2 | Storage Manager | [Repositorio](https://github.com/jose-alejandro-loaiza-lopez/Uceva-Angular-Taller-Storage-Manager) | [GitHub Pages](https://jose-alejandro-loaiza-lopez.github.io/Uceva-Angular-Taller-Storage-Manager/) |
| 3 | Design System | [Repositorio](https://github.com/jose-alejandro-loaiza-lopez/Uceva-Angular-Taller-Design-System) | [GitHub Pages](https://jose-alejandro-loaiza-lopez.github.io/Uceva-Angular-Taller-Design-System/) |
| 4 | Angular Modules Lab | [Repositorio](https://github.com/jose-alejandro-loaiza-lopez/Uceva-Angular-Taller-Modules) | [GitHub Pages](https://jose-alejandro-loaiza-lopez.github.io/Uceva-Angular-Taller-Modules/) |
| 5 | Colombia Open Data | [Repositorio](https://github.com/jose-alejandro-loaiza-lopez/parcial_2_datos_abiertos) | [GitHub Pages](https://jose-alejandro-loaiza-lopez.github.io/parcial_2_datos_abiertos/) |

## Funcionalidades

- Perfil profesional con educación, enfoque y habilidades organizadas por área.
- Catálogo de cinco proyectos con descripción, características, tecnologías, repositorio y demo.
- Estado visual para proyectos publicados y proyectos en preparación.
- Los cinco proyectos enlazan repositorio y demo publicada en GitHub Pages.
- Diseño responsive con navegación por secciones, foco visible y soporte para movimiento reducido.
- Metadatos SEO y favicon propio.
- Pruebas unitarias con Jest y cobertura del 100% del código de la aplicación.
- Pipeline de GitHub Actions con build, pruebas, despliegue y verificación posterior.

## Stack

| Capa | Tecnología |
|------|------------|
| Framework | Angular 20 (standalone components) |
| Lenguaje | TypeScript 5.9 |
| Estilos | SCSS con variables CSS |
| Pruebas | Jest + jest-preset-angular |
| CI/CD | GitHub Actions |
| Publicación | GitHub Pages |

## Arquitectura

```text
src/app/
├── core/
│   ├── data/projects.data.ts          # Catálogo de los cinco proyectos
│   ├── models/project.model.ts        # Contrato de un proyecto
│   └── services/portfolio.service.ts  # Acceso al catálogo
├── shared/components/
│   ├── header/                        # Navegación principal
│   ├── hero/                          # Presentación y resumen
│   ├── about/                         # Perfil, educación y habilidades
│   ├── projects/                      # Sección del catálogo
│   ├── project-card/                  # Tarjeta reutilizable de proyecto
│   ├── contact/                       # Llamado a contacto
│   └── footer/                        # Pie de página
├── app.ts                             # Composición de la página
└── app.config.ts                      # Providers de Angular
```

## Desarrollo local

Requisitos: Node.js 24 y npm.

```bash
npm ci
npm start
```

La aplicación queda disponible en `http://localhost:4200/`.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm start` | Servidor de desarrollo |
| `npm run build` | Build de producción en `dist/dev-portfolio/browser` |
| `npm test` | Pruebas unitarias con Jest |
| `npm run test:watch` | Pruebas en modo watch |
| `npm run test:coverage` | Pruebas con reporte de cobertura |

## CI/CD

El workflow [`deploy-pages.yml`](./.github/workflows/deploy-pages.yml) se ejecuta al integrar cambios en `main` y realiza:

1. Instalación reproducible con `npm ci`.
2. Pruebas unitarias con cobertura.
3. Build de producción con el `base-href` del repositorio.
4. Publicación del artefacto en GitHub Pages.
5. Verificación de la URL publicada mediante `curl`, comprobando que el sitio responde con el contenido esperado.

## Agregar o actualizar un proyecto

1. Edita `src/app/core/data/projects.data.ts`.
2. Agrega el repositorio y, si ya está publicado, la URL de la demo.
3. Usa `status: 'pending'` mientras la demo no exista; la tarjeta mostrará "Demo en preparación".
4. Ejecuta `npm test` y `npm run build` antes de hacer commit.

## Autor

**José Alejandro Loaiza López**
- GitHub: [@jose-alejandro-loaiza-lopez](https://github.com/jose-alejandro-loaiza-lopez)
- Universidad: Unidad Central del Valle del Cauca (UCEVA)
- Ubicación: Tuluá, Valle del Cauca, Colombia

## Licencia

Este proyecto está bajo la licencia [MIT](./LICENSE).
