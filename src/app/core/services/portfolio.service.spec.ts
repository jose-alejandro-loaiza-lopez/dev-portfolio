import { TestBed } from '@angular/core/testing';
import { PortfolioService } from './portfolio.service';

describe('PortfolioService', () => {
  let service: PortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioService);
  });

  it('debería exponer los cinco proyectos del portafolio', () => {
    expect(service.getProjects()).toHaveLength(5);
  });

  it('debería mantener identificadores únicos', () => {
    const ids = service.getProjects().map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('debería mantener todos los proyectos publicados', () => {
    const live = service.getLiveProjects();
    const pending = service.getPendingProjects();

    expect(live).toHaveLength(5);
    expect(pending).toHaveLength(0);
    expect(live.every((project) => project.status === 'live')).toBe(true);
  });

  it('debería incluir repositorio en todos los proyectos', () => {
    expect(
      service.getProjects().every((project) => project.repoUrl.startsWith('https://github.com/')),
    ).toBe(true);
  });

  it('debería incluir demo en todos los proyectos publicados', () => {
    expect(service.getLiveProjects().every((project) => project.demoUrl !== null)).toBe(true);
  });

  it('debería publicar la demo de Colombia Open Data en GitHub Pages', () => {
    const colombia = service.getProjects().find((project) => project.id === 'colombia-open-data');

    expect(colombia?.demoUrl).toBe(
      'https://jose-alejandro-loaiza-lopez.github.io/parcial_2_datos_abiertos/',
    );
    expect(colombia?.status).toBe('live');
  });

  it('debería describir cada proyecto con características y tecnologías', () => {
    for (const project of service.getProjects()) {
      expect(project.technologies.length).toBeGreaterThanOrEqual(3);
      expect(project.features.length).toBeGreaterThanOrEqual(3);
      expect(project.description.length).toBeGreaterThan(40);
    }
  });
});
