import '../globals.css';

import type { Metadata } from 'next';

import type { NavBarPage } from '@/types/NavBarPage';

import { CenteredFooter } from './_components/Footer/CenteredFooter';
import { NavBar } from './_components/NavBar/NavBar';

export const metadata: Metadata = {
  title: 'Gaza Champions',
  description:
    'Initiative to find individuals to champion fundraising efforts from Gaza',
};

const NavBarPages: NavBarPage[] = [
  { title: 'about', slug: 'about' },
  { title: 'volunteer', slug: 'volunteer' },
  { title: 'funds', slug: 'funds' },
  { title: 'links', slug: 'links' },
];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col bg-yellow-50">
        <NavBar pages={NavBarPages} />
        <main className="grow">{children}</main>
        <CenteredFooter />
      </body>
    </html>
  );
}
