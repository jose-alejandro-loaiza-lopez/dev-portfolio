import { Component } from '@angular/core';
import { AboutComponent } from './shared/components/about/about';
import { ContactComponent } from './shared/components/contact/contact';
import { FooterComponent } from './shared/components/footer/footer';
import { HeaderComponent } from './shared/components/header/header';
import { HeroComponent } from './shared/components/hero/hero';
import { ProjectsComponent } from './shared/components/projects/projects';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
