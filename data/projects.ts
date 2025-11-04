import { beneficialAI } from './projects/beneficial-ai';
import { socialObjectivity } from './projects/social-objectivity';
import { transformativeExperiences } from './projects/transformative-experiences';
import { autismEmotions } from './projects/autism-emotions';
import { bankingPurpose } from './projects/banking-purpose';
import { conceptLearning } from './projects/concept-learning';
import { mentalHealth } from './projects/mental-health';
import { darwinProject } from './projects/darwin-project';
import { flows } from './projects/flows';
import { zasta } from './projects/zasta';
import { zalando } from './projects/zalando';
import { taxfix } from './projects/taxfix';
import { Project } from './types';

export * from './types';

export const projects: Project[] = [
  beneficialAI,
  socialObjectivity,
  autismEmotions,
  bankingPurpose,
  conceptLearning,
  transformativeExperiences,
  mentalHealth,
  darwinProject,
  flows,
  zasta,
  zalando,
  taxfix,
];
