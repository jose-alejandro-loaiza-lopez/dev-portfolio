import { Component } from '@angular/core';

interface SkillGroup {
  readonly title: string;
  readonly icon: string;
  readonly skills: readonly string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  readonly skillGroups: readonly SkillGroup[] = [
    {
      title: 'Frontend',
      icon: '</>',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'SCSS', 'Astro'],
    },
    {
      title: 'Backend',
      icon: '{ }',
      skills: ['Node.js', 'Express', 'Java', 'Spring Boot', 'REST APIs'],
    },
    {
      title: 'Mobile & datos',
      icon: '⌁',
      skills: ['Flutter', 'Dart', 'Kotlin', 'PostgreSQL', 'Firebase'],
    },
    {
      title: 'Herramientas',
      icon: '⚙',
      skills: ['Git', 'GitHub Actions', 'Docker', 'Jest', 'GitHub Pages'],
    },
  ];

  readonly principles: readonly string[] = [
    'Arquitectura limpia y separación de responsabilidades',
    'Pruebas unitarias y documentación como parte del desarrollo',
    'Automatización de builds, releases y despliegues',
    'Commits con Conventional Commits y ramas organizadas',
  ];
}
