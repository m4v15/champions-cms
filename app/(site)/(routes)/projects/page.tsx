/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import Image from 'next/image';

import { getProjects } from '@/sanity/sanity-utils';

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <h2 className="text-gr mt-10 text-3xl font-bold"> Our Projects: </h2>x
      <div className="mt-5 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project._id}
            className="rounded-md border border-gray-500 p-2"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
                className="rounded-lg border border-gray-500 object-cover"
              />
            )}
            <div>{project.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
