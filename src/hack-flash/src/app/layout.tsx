import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

import Link from "next/link";
type NavItemProps = {
  text: string;
  href: string;
  active: boolean;
}
const NavItem = ({ text, href, active }: NavItemProps) => {
  return (
    <Link href={href}>
        {text}
    </Link>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <NavItem active={false} text='Register' href='/vehicle/register' />
          <NavItem active={false} text='Request' href='/fuel/request' />
        </nav>
        {children}
        </body>
    </html>
  )
}
