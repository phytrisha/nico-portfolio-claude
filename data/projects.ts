import { beneficialAI } from './projects/beneficial-ai';
import { socialObjectivity } from './projects/social-objectivity';
import { socialAccountObjectivity } from './projects/social-account-objectivity';
import { autismEmotions } from './projects/autism-emotions';
import { discursiveHygiene } from './projects/discursive-hygiene';
import { bankingPurpose } from './projects/banking-purpose';
import { conceptLearning } from './projects/concept-learning';
import { consumerGoods } from './projects/consumer-goods';
import { mentalHealth } from './projects/mental-health';
import { Project } from './types';

export * from './types';

export const projects: Project[] = [
  beneficialAI,
  socialObjectivity,
  socialAccountObjectivity,
  autismEmotions,
  discursiveHygiene,
  bankingPurpose,
  conceptLearning,
  consumerGoods,
  mentalHealth,
];
