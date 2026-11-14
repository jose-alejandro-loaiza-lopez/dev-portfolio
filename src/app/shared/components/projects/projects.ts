import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { ProjectCardComponent } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  private readonly portfolio = inject(PortfolioService);

  readonly projects = this.portfolio.getProjects();
  readonly liveCount = this.portfolio.getLiveProjects().length;
  readonly pendingCount = this.portfolio.getPendingProjects().length;
  readonly githubUrl = 'https://github.com/jose-alejandro-loaiza-lopez';
}
