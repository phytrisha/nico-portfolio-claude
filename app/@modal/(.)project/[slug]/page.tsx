'use client';

import { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import { projects } from '@/data/projects';

export default function ProjectModal({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return null;
  }

  const handleClose = () => {
    setIsOpen(false);
    // Wait for animation to complete before navigating
    setTimeout(() => {
      router.back();
    }, 400);
  };

  return (
    <ProjectDetailModal
      project={project}
      isOpen={isOpen}
      onClose={handleClose}
    />
  );
}
