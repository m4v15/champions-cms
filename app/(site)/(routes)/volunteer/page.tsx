
import { getSitePage } from '@/sanity/sanity-utils';
import { PortableText } from 'next-sanity';
import { PortableTextComponents } from '@portabletext/react'

import { HeroButton } from '../../_components/Buttons/HeroButton';

export const dynamic = 'force-dynamic'

export default async function Volunteer() {

    const { content, secondaryContent } = await getSitePage('volunteer')

    const components: PortableTextComponents = {
        block: {
            h2: ({ children }) => <h2 className="text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight mb-3">{children}</h2>,
            normal: ({ children }) => <p className="mt-5 ms-1 text-gray-800 sm:mb-1 sm:ms-2">{children}</p>
        }
    }

    return (
        <div className="text-gray-600 antialiased">
            <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                <div className="grid gap-8 sm:grid-cols-2 sm:items-start">
                    <div className="sm:order-1">
                        <PortableText value={content} components={components} />
                        <HeroButton
                            text="Become A Champion"
                            link="https://docs.google.com/forms/d/e/1FAIpQLSdQBwxbU97VXa9Phi4ACSrQMfIJNp6ZFPfQvhAjJ2J1ekoMJg/viewform"
                            newTab={true}
                        />
                    </div>
                    <div className="sm:order-2">
                        <PortableText value={secondaryContent} components={components} />
                        <HeroButton
                            text="Connect Your Account"
                            link="https://docs.google.com/forms/d/15cm3Ujy3H7PMGfceLG3fpCi8jRd4Cip1wzjPgbGLKSU/viewform?ts=66269362&edit_requested=true"
                            newTab={true}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}
