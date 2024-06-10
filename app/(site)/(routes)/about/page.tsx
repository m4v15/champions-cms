
import { getSitePage } from '@/sanity/sanity-utils';
import { PortableText } from 'next-sanity';
import { HeroButton } from '@/app/(site)/_components/Buttons/HeroButton';
import { Section } from '@/app/(site)/_components/Section/Section';

export const dynamic = 'force-dynamic'

export default async function About() {

    const { content, secondaryContent } = await getSitePage('about')

    return (
        <div className="text-gray-600 antialiased">
            <Section>
                <div className='py-3'>
                    <PortableText value={content} />
                </div>
                <div className='py-3'>
                    <PortableText value={secondaryContent} />
                </div>
                <HeroButton
                    text="Volunteer With Us"
                    link="/volunteer"
                    newTab={false}
                />
            </Section>
        </div>

    );
}
