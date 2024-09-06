import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type Project = {
    name: string;
    description: string;
    outcome: string;
    skills: string[];
    githubLink: string;
    youtubeLink?: string;
    icon: IconDefinition;
  };

export type Experience = {
    role: string;
    company: string;
    duration: string;
    details: string
}


export type Skill = {
    name: string;
    level: number;
    icon: string;
 }
 
 export type CategorizedSkill = {
     relatedArea: string;
     skills: Skill[]
 }

export type Testimony = {
    name: string;
    position: string;
    testimony: string
}


export type Subject = {
    name: string;
    score: string;
}

export type University = {
    name: string;
    degree: string;
    finishedYear: string;
    score: string;
    subjects: Subject[]
}
