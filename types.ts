
export interface Project {
  title: string;
  description: string;
  problem: string;
  tools: string[];
  concepts: string[];
  challenges: string;
  outcomes: string;
  githubUrl: string;
  demoUrl: string;
}

export interface SkillCategory {
  name: string;
  skills: string[] | { name: string; description: string }[];
}
