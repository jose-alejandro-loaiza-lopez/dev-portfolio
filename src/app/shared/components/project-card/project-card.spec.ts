import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PROJECTS } from '../../../core/data/projects.data';
import { ProjectCardComponent } from './project-card';

describe('ProjectCardComponent', () => {
  let fixture: ComponentFixture<ProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCardComponent);
  });

  it('debería renderizar la información del proyecto publicado', () => {
    fixture.componentRef.setInput('project', PROJECTS[0]);
    fixture.componentRef.setInput('index', 1);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('h3')?.textContent).toContain('Dev Portfolio');
    expect(element.querySelector('.project-index')?.textContent).toContain('01');
    expect(element.textContent).toContain('Publicado');
    expect(element.querySelector('a[href*="github.com"]')).toBeTruthy();
    expect(element.querySelector('a[href*="github.io"]')?.textContent).toContain('Ver demo');
  });

  it('debería mostrar el estado de preparación cuando no hay demo', () => {
    fixture.componentRef.setInput('project', PROJECTS[4]);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;

    expect(element.textContent).toContain('En preparación');
    expect(element.textContent).toContain('Demo en preparación');
    expect(element.querySelector('a[href*="github.io"]')).toBeNull();
  });

  it('debería listar las tecnologías y características', () => {
    fixture.componentRef.setInput('project', PROJECTS[1]);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('.project-tech li').length).toBeGreaterThanOrEqual(3);
    expect(element.querySelectorAll('.project-features li').length).toBeGreaterThanOrEqual(3);
  });
});
