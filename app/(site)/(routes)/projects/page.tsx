/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import { notFound } from 'next/navigation';
import { PortableText } from 'next-sanity';

import { Section } from '@/app/(site)/_components/Section/Section';
import { getProjects, getSitePage } from '@/sanity/sanity-utils';

import { ProjectCard } from '../../_components/Project Card/Project Card';

export const dynamic = 'force-dynamic';

export default async function Projects() {
  const sitePage = await getSitePage('projects');
  if (!sitePage) {
    return notFound();
  }
  const { header, content } = sitePage;
  const projects = await getProjects();

  return (
    <div className="text-gray-600 antialiased">
      <Section>
        <h1 className="leading-hero whitespace-pre-line text-2xl font-bold text-gray-100">
          <span className="text-3xl text-gray-900">{header}</span>
        </h1>
        <div className="py-3">
          <PortableText value={content} />
        </div>
        <div className="py-3">
          <div className="mt-5 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard {...project} key={project._id} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
