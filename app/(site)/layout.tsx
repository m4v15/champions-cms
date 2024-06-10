import type { Metadata } from "next";
import "../globals.css";
import { CenteredFooter } from "./_components/Footer/CenteredFooter";
import { NavBar } from "./_components/NavBar/NavBar";
import { NavBarPage } from "@/types/NavBarPage";

export const metadata: Metadata = {
  title: 'Gaza Champions',
  description:
    'Initiative to find individuals to champion fundraising efforts from Gaza',
};

export const NavBarPages: NavBarPage[] = [{ title: "about", slug:"about"}, { title: "volunteer", slug:"volunteer"}, { title: "funds", slug:"funds"}, { title: "links", slug:"links"}]

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="flex h-screen flex-col bg-yellow-50" >
        <NavBar pages = {NavBarPages} />
        <main className="grow">{children}</main>
        <CenteredFooter />
      </body>
    </html>
  );
}
