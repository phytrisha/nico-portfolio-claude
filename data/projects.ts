import { beneficialAI } from './projects/beneficial-ai';
import { socialObjectivity } from './projects/social-objectivity';
import { transformativeExperiences } from './projects/transformative-experiences';
import { aemote } from './projects/aemote';
import { remagine } from './projects/remagine';
import { conceptLearning } from './projects/concept-learning';
import { flows } from './projects/flows';
import { zalando } from './projects/zalando';
import { taxfix } from './projects/taxfix';
import { darwinproject } from './projects/darwinproject';
import { collection } from './projects/collection';

import { Project } from './types';

export * from './types';

export const projects: Project[] = [
  beneficialAI,
  socialObjectivity,
  aemote,
  conceptLearning,
  taxfix,
  darwinproject,
  flows,
  zalando,
  remagine,
  transformativeExperiences,
  collection,
];
