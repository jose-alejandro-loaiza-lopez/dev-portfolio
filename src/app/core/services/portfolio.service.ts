import { Injectable } from '@angular/core';
import { PROJECTS } from '../data/projects.data';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  getProjects(): readonly Project[] {
    return PROJECTS;
  }

  getLiveProjects(): readonly Project[] {
    return PROJECTS.filter((project) => project.status === 'live');
  }

  getPendingProjects(): readonly Project[] {
    return PROJECTS.filter((project) => project.status === 'pending');
  }
}
