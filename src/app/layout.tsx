import { ReactNode } from 'react';

export const metadata = {
  title: 'My App',
  description: 'Fresh start',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
