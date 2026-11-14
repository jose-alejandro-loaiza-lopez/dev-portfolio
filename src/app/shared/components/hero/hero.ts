import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  private readonly portfolio = inject(PortfolioService);

  readonly projectCount = this.portfolio.getProjects().length;
  readonly liveCount = this.portfolio.getLiveProjects().length;
  readonly githubUrl = 'https://github.com/jose-alejandro-loaiza-lopez';
}
