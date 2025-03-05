
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="flex-grow section-transition">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
