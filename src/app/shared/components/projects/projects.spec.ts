import { TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects';

describe('ProjectsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    }).compileComponents();
  });

  it('debería renderizar una tarjeta por cada proyecto', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();

    const cards = fixture.nativeElement.querySelectorAll('app-project-card');
    expect(cards).toHaveLength(5);
  });

  it('debería mostrar el resumen de proyectos publicados y pendientes', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();

    const content = fixture.nativeElement.textContent as string;
    expect(content).toContain('4');
    expect(content).toContain('publicados');
    expect(content).toContain('1');
    expect(content).toContain('en preparación');
  });

  it('debería enlazar al perfil de GitHub para ver más proyectos', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();

    const moreCard = fixture.nativeElement.querySelector('.more-card') as HTMLAnchorElement;
    expect(moreCard.getAttribute('href')).toBe('https://github.com/jose-alejandro-loaiza-lopez');
  });
});
