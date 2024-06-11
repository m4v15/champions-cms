import type { PortableTextBlock } from 'next-sanity';

export type SitePage = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  header: string;
  content: PortableTextBlock[];
  secondaryContent: PortableTextBlock[];
};
