
import React from 'react';
import { Project, SkillCategory } from './types';

export const NAME = "Nthabiseng Mkhehlani";
export const TITLE = "AI / ML & IT Professional";
export const TAGLINE = "Bridging the gap between complex network infrastructure and intelligent machine learning solutions.";

export const PROJECTS: Project[] = [
  {
    title: "Taxi-Compass",
    description: "An intelligent navigation and logistics optimization tool for urban transport services.",
    problem: "Urban taxi operators struggle with inefficient routing and unpredictable demand peaks, leading to lost revenue.",
    tools: ["Python", "Pandas", "Scikit-learn", "Google Maps API"],
    concepts: ["Predictive Modeling", "Geospatial Analysis", "Clustering"],
    challenges: "Processing high-velocity GPS data streams and addressing cold-start problems for new routes.",
    outcomes: "Reduced average wait times by 18% and increased driver earnings by 12% in pilot simulations.",
    githubUrl: "https://github.com/SpecialAgents/Taxi-Compass",
    demoUrl: "https://v0-taxi-compass.vercel.app/"
  },
  {
    title: "Chatbot AI",
    description: "A specialized AI assistant designed for fundamental inquiries and guided learning.",
    problem: "Providing consistent, high-quality answers to introductory AI questions at scale without manual intervention.",
    tools: ["NLP", "Vercel AI SDK", "React", "TypeScript"],
    concepts: ["LLM Integration", "Prompt Engineering", "Conversational UI"],
    challenges: "Ensuring the model stays within the scope of AI fundamentals while maintaining a helpful persona.",
    outcomes: "Successfully deployed as a reliable first-response tool for AI-related queries.",
    githubUrl: "#", // No github repo for this project
    demoUrl: "https://ai-fundamentals-assistant-qnnp3xc3c-comfortns-projects.vercel.app/"
  },
  {
    title: "Medifast AI",
    description: "A rapid diagnostic assistance tool leveraging Computer Vision for early symptom detection.",
    problem: "Healthcare delays in remote areas often lead to worsened conditions due to lack of immediate screening.",
    tools: ["Computer Vision", "UI/UX Design", "Figma", "Interactive Prototyping"],
    concepts: ["Image Classification", "User Experience", "Rapid Prototyping"],
    challenges: "Designing an intuitive interface that simplifies complex medical data for end-users.",
    outcomes: "Created a high-fidelity interactive prototype validating the user journey for remote diagnosis.",
    githubUrl: "#", // No github repo for this project
    demoUrl: "https://prong-wink-04231070.figma.site/"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["Python", "JavaScript", "SQL", "HTML / CSS", "TypeScript"]
  },
  {
    name: "AI / ML Tools & Concepts",
    skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "NLP", "Computer Vision", "Neural Networks"]
  },
  {
    name: "Software & Platforms",
    skills: ["Git & GitHub", "VS Code", "Linux", "Docker", "Cloud Platforms", "Network Administration"]
  },
  {
    name: "Data & Analytics Tools",
    skills: ["Pandas", "NumPy", "Matplotlib", "Power BI", "Tableau", "Apache Spark"]
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Problem Solving", description: "Analytical approach to complex technical challenges" },
      { name: "Communication", description: "Clear articulation of technical concepts" },
      { name: "Adaptability", description: "Quick to learn new technologies and methodologies" },
      { name: "Team Collaboration", description: "Effective teamwork in agile environments" },
      { name: "Analytical Thinking", description: "Data-driven decision making" },
      { name: "Creative Solutions", description: "Innovative approaches to problem-solving" }
    ]
  }
];

export const CONTACT_INFO = {
  homePhone: "063 617 0265",
  workPhone: "068 428 3111",
  email: "nthaby7735@gmail.com",
  linkedin: "https://www.linkedin.com/in/nthabiseng-mkhehlani-522140292",
  github: "https://github.com/NthabisengM737"
};
