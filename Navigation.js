import React from 'react';
import Link from 'next/link';

export default function Navigation({ activePage }) {
  return (
    <header className="app-header">
      <div className="container header-container">
        <Link href="/">
          <a className="logo">Booklet</a>
        </Link>
        <nav className="main-nav">
          <Link href="/">
            <a className={`nav-link ${activePage === 'home' ? 'active' : ''}`}>Home</a>
          </Link>
          <Link href="/explore">
            <a className={`nav-link ${activePage === 'explore' ? 'active' : ''}`}>Explore</a>
          </Link>
          <Link href="/profile/1">
            <a className={`nav-link ${activePage === 'profile' ? 'active' : ''}`}>My Profile</a>
          </Link>
          <Link href="/sharing">
            <a className={`nav-link ${activePage === 'sharing' ? 'active' : ''}`}>Book Sharing</a>
          </Link>
        </nav>
      </div>
      
      <style jsx>{`
        .app-header {
          background-color: var(--primary-color);
          color: white;
          padding: 1rem 0;
          margin-bottom: 2rem;
        }
        
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.8rem;
          margin: 0;
          color: white;
          text-decoration: none;
          font-weight: bold;
        }
        
        .main-nav {
          display: flex;
          gap: 1.5rem;
        }
        
        .nav-link {
          color: white;
          text-decoration: none;
          padding: 0.5rem;
        }
        
        .nav-link.active {
          border-bottom: 2px solid white;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        @media (max-width: 768px) {
          .header-container {
            flex-direction: column;
            gap: 1rem;
          }
          
          .main-nav {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </header>
  );
}
