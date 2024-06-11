import { createClient, groq } from 'next-sanity';

import type { Project } from '@/types/Project';
import type { SitePage } from '@/types/SitePage';

import clientConfig from './config/client-config';

export async function getProjects(): Promise<Project[]> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
  );
}

export async function getSitePages(): Promise<SitePage[]> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "sitePage"]{
            _id,
            _createdAt,
            title,
            "slug":slug.current,
        }`,
  );
}

export async function getSitePage(slug: String): Promise<SitePage> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "sitePage" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug":slug.current,
            content,
            secondaryContent,
            header
        }`,
    { slug },
    { next: { revalidate: 10 } },
  );
}
