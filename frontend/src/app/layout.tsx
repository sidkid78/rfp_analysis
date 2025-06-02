import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/layout/Navbar';
import { ThemeProvider } from './lib/contexts/ThemeContext';
import ClientLayout from './components/layout/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RFP Analysis Tool',
  description: 'Analyze and evaluate RFP documents across multiple sections'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}>
        <ThemeProvider>
          <Navbar />
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}