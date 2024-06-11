import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from 'next-sanity';

import type { Project } from '@/types/Project';

const ProjectCard = (props: Project) => (
  <Link
    rel="noopener noreferrer"
    target="_blank"
    href={props.url ? props.url : ''}
    className="shadow-secondary-1 dark:bg-surface-dark block rounded-lg bg-white"
  >
    {props.image && (
      <Image
        className="rounded-t-lg"
        src={props.image}
        alt=""
        width={500}
        height={500}
      />
    )}{' '}
    <div className="text-surface p-6 dark:text-white">
      <h5 className="mb-2 text-xl font-medium leading-tight">{props.name}</h5>
      <PortableText value={props.content} />
    </div>
  </Link>
);

export { ProjectCard };
