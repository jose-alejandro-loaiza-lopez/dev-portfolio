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

  it('debería separar los proyectos publicados de los pendientes', () => {
    const live = service.getLiveProjects();
    const pending = service.getPendingProjects();

    expect(live).toHaveLength(4);
    expect(pending).toHaveLength(1);
    expect(live.every((project) => project.status === 'live')).toBe(true);
    expect(pending.every((project) => project.status === 'pending')).toBe(true);
  });

  it('debería incluir repositorio en todos los proyectos', () => {
    expect(
      service.getProjects().every((project) => project.repoUrl.startsWith('https://github.com/')),
    ).toBe(true);
  });

  it('debería incluir demo en todos los proyectos publicados', () => {
    expect(service.getLiveProjects().every((project) => project.demoUrl !== null)).toBe(true);
  });

  it('debería mantener el proyecto pendiente sin demo', () => {
    const pendingProject = service.getPendingProjects()[0];
    expect(pendingProject.demoUrl).toBeNull();
  });

  it('debería describir cada proyecto con características y tecnologías', () => {
    for (const project of service.getProjects()) {
      expect(project.technologies.length).toBeGreaterThanOrEqual(3);
      expect(project.features.length).toBeGreaterThanOrEqual(3);
      expect(project.description.length).toBeGreaterThan(40);
    }
  });
});
