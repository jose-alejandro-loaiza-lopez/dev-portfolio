import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('debería crear el portafolio', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('debería renderizar el perfil y el catálogo de proyectos', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const content = fixture.nativeElement.textContent as string;

    expect(content).toContain('José Alejandro');
    expect(content).toContain('Catálogo de proyectos');
    expect(content).toContain('Storage Manager');
    expect(content).toContain('Design System');
  });

  it('debería incluir la navegación principal y el enlace a GitHub', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const navLinks = Array.from(element.querySelectorAll('.site-nav a')).map((link) =>
      link.textContent?.trim(),
    );

    expect(navLinks).toEqual(['Perfil', 'Proyectos', 'Contacto']);
    expect(element.querySelector('.github-link')?.getAttribute('href')).toBe(
      'https://github.com/jose-alejandro-loaiza-lopez',
    );
  });
});
