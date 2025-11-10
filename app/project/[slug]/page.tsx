'use client';

import { notFound, useRouter } from 'next/navigation';
import { projects } from '@/data/projects';
import { use, useState } from 'react';
import ProjectDetailModal from '@/components/ProjectDetailModal';

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  const [isOpen] = useState(true);

  if (!project) {
    notFound();
  }

  const handleClose = () => {
    router.push('/');
  };

  return (
    <ProjectDetailModal
      project={project}
      isOpen={isOpen}
      onClose={handleClose}
    />
  );
}
