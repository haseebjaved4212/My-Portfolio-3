export type Theme = 'light' | 'dark' | 'system';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}
