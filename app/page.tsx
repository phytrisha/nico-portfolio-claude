'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ProjectsAccordion from '@/components/ProjectsAccordion';

export default function Home() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <main className="relative">
      <HeroSection />
      <section className="w-full">
        <ProjectsAccordion
          expandedId={expandedId}
          setExpandedId={setExpandedId}
        />
      </section>
    </main>
  );
}
