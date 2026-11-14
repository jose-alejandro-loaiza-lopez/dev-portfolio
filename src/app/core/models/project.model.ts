export type ProjectStatus = 'live' | 'pending';

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly features: readonly string[];
  readonly repoUrl: string;
  readonly demoUrl: string | null;
  readonly status: ProjectStatus;
  readonly accent: string;
  readonly initials: string;
  readonly year: string;
}
