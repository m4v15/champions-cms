import { PortableText } from 'next-sanity';

import bg from '@/public/assets/images/background-image.webp';
import { getSitePage } from '@/sanity/sanity-utils';

import { HeroButton } from './_components/Buttons/HeroButton';
import { Section } from './_components/Section/Section';

export default async function Home() {
  const { header, content } = await getSitePage('home');
  const { content: aboutContent, secondaryContent } =
    await getSitePage('about');

  return (
    <div className="text-gray-600 antialiased">
      <div
        className="mx-auto max-w-screen-lg bg-cover"
        style={{
          backgroundImage: `url(${bg.src})`,
          height: '800px',
          maxWidth: '1400px',
        }}
      >
        <Section>
          <h1 className="leading-hero whitespace-pre-line text-2xl font-bold text-gray-100">
            <span className="text-3xl text-gray-900">{header}</span>
          </h1>
          <div className="mb-16 mt-4 text-xl text-gray-100">
            <PortableText value={content} />
          </div>
          <HeroButton
            text="Volunteer With Us"
            link="/volunteer"
            newTab={false}
          />
          <br />
          <HeroButton
            text="See the funds we're supporting"
            link="/funds"
            newTab={false}
          />
        </Section>
      </div>
      <Section>
        <div className="py-3">
          <PortableText value={aboutContent} />
        </div>
        <div className="py-3">
          <PortableText value={secondaryContent} />
        </div>
      </Section>
    </div>
  );
}
