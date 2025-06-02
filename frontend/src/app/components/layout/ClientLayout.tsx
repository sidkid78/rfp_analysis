'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} onToggle={handleToggleSidebar} />
      <main className="flex-1 min-h-screen">
        {children}
      </main>
    </div>
  );
} 