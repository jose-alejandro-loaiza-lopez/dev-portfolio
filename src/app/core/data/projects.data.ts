import { Project } from '../models/project.model';

const GITHUB_PROFILE = 'https://github.com/jose-alejandro-loaiza-lopez';

export const PROJECTS: readonly Project[] = [
  {
    id: 'dev-portfolio',
    name: 'Dev Portfolio',
    tagline: 'El catálogo que estás viendo',
    description:
      'Portafolio profesional construido con Angular para presentar mi perfil, habilidades y los proyectos desarrollados durante la carrera. Cada proyecto enlaza su repositorio y su aplicación publicada.',
    technologies: ['Angular 20', 'TypeScript', 'SCSS', 'Jest', 'GitHub Actions', 'GitHub Pages'],
    features: [
      'Perfil profesional y catálogo de cinco proyectos',
      'Enlaces directos a repositorio y demo de cada proyecto',
      'Pipeline de build, pruebas, despliegue y verificación',
      'Diseño responsive con accesibilidad y modo reducido de movimiento',
    ],
    repoUrl: `${GITHUB_PROFILE}/dev-portfolio`,
    demoUrl: 'https://jose-alejandro-loaiza-lopez.github.io/dev-portfolio/',
    status: 'live',
    accent: '#38bdf8',
    initials: 'DP',
    year: '2026',
  },
  {
    id: 'storage-manager',
    name: 'Storage Manager',
    tagline: 'Librería Angular para el navegador',
    description:
      'Librería reutilizable para administrar LocalStorage y Cache Storage con una API tipada, manejo consistente de errores y una aplicación showcase que demuestra su uso.',
    technologies: ['Angular', 'TypeScript', 'Jest', 'NPM', 'GitHub Actions', 'GitHub Pages'],
    features: [
      'Servicios tipados para LocalStorage y Cache Storage',
      'Publicada en NPM como @josefo_pro/angular-storage-manager',
      'Showcase interactivo desplegado en GitHub Pages',
      'Flujo de release automático con GitHub Actions',
    ],
    repoUrl: `${GITHUB_PROFILE}/Uceva-Angular-Taller-Storage-Manager`,
    demoUrl: 'https://jose-alejandro-loaiza-lopez.github.io/Uceva-Angular-Taller-Storage-Manager/',
    status: 'live',
    accent: '#a78bfa',
    initials: 'SM',
    year: '2026',
  },
  {
    id: 'design-system',
    name: 'Design System',
    tagline: 'Sistema de diseño atómico',
    description:
      'Sistema de diseño construido como librería Angular con Bootstrap, organizado en átomos, moléculas y organismos reutilizables, acompañado de una aplicación de documentación viva.',
    technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Jest', 'GitHub Actions', 'GitHub Pages'],
    features: [
      'Componentes organizados con la metodología Atomic Design',
      'Librería reutilizable y catálogo interactivo de componentes',
      'Pruebas unitarias con umbral mínimo de cobertura del 80%',
      'Despliegue continuo del showcase en GitHub Pages',
    ],
    repoUrl: `${GITHUB_PROFILE}/Uceva-Angular-Taller-Design-System`,
    demoUrl: 'https://jose-alejandro-loaiza-lopez.github.io/Uceva-Angular-Taller-Design-System/',
    status: 'live',
    accent: '#f472b6',
    initials: 'DS',
    year: '2026',
  },
  {
    id: 'angular-modules',
    name: 'Angular Modules Lab',
    tagline: 'Módulos, servicios y consumo de APIs',
    description:
      'Aplicación Angular enfocada en la organización por módulos, componentes standalone, servicios e integración con una API pública, con pruebas unitarias y despliegue automatizado.',
    technologies: ['Angular', 'TypeScript', 'Jest', 'REST API', 'GitHub Actions', 'GitHub Pages'],
    features: [
      'Módulos de usuarios, tareas, productos y personajes',
      'Consumo de la API pública Sekai World Character Database',
      '24 archivos de pruebas unitarias y cobertura del código',
      'Build y despliegue continuo en GitHub Pages',
    ],
    repoUrl: `${GITHUB_PROFILE}/Uceva-Angular-Taller-Modules`,
    demoUrl: 'https://jose-alejandro-loaiza-lopez.github.io/Uceva-Angular-Taller-Modules/',
    status: 'live',
    accent: '#34d399',
    initials: 'AM',
    year: '2026',
  },
  {
    id: 'colombia-open-data',
    name: 'Colombia Open Data',
    tagline: 'Datos abiertos en una app Flutter',
    description:
      'Aplicación Flutter que consume la API Colombia para explorar departamentos, presidentes, atracciones turísticas y regiones, con navegación declarativa y manejo de estados de carga y error.',
    technologies: ['Flutter', 'Dart', 'go_router', 'HTTP', 'GitHub Pages'],
    features: [
      'Integración con cuatro endpoints de la API Colombia',
      'Vistas de dashboard, listado y detalle con go_router',
      'Manejo explícito de estados de carga, error y reintento',
      'Build web publicado en GitHub Pages con el resto del catálogo',
    ],
    repoUrl: `${GITHUB_PROFILE}/parcial_2_datos_abiertos`,
    demoUrl: 'https://jose-alejandro-loaiza-lopez.github.io/parcial_2_datos_abiertos/',
    status: 'live',
    accent: '#fbbf24',
    initials: 'CO',
    year: '2026',
  },
];
