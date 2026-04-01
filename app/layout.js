import './globals.css';

export const metadata = {
  title: 'Apex Portfolio',
  description: 'Apex Portfolio Landing Page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
