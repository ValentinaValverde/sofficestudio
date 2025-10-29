import { developmentProjectData } from '@/lib/constants';
import { notFound } from 'next/navigation';

export default async function DevelopmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = developmentProjectData.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
