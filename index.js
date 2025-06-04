import React from 'react';
import Link from 'next/link';
import { users, books } from '../data/mockData';

export default function HomePage() {
  return (
    <div className="welcome-page">
      <div className="welcome-header">
        <div className="logo-container">
          <h1>Booklet</h1>
          <p className="tagline">Connect through the books that shape you</p>
        </div>
      </div>
      
      <div className="container">
        <div className="welcome-content">
          <div className="card intro-card">
            <h2>What is Booklet?</h2>
            <p>
              Booklet is a cultural connection platform where meaningful relationships 
              begin with the books you've read, shared, and loved. Unlike traditional 
              social apps, we focus on mental and cultural compatibility rather than 
              visual appearances.
            </p>
            <p>
              Find people who share your literary tastes, exchange physical or digital 
              books, and start conversations based on shared reading experiences.
            </p>
          </div>
          
          <div className="auth-container">
            <div className="card auth-card">
              <h2>Join the Community</h2>
              <form className="auth-form">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="••••••••" />
                </div>
                <Link href="/profile/1">
                  <a className="btn-primary">Sign Up</a>
                </Link>
                <div className="auth-divider">
                  <span>or</span>
                </div>
                <Link href="/explore">
                  <a className="btn-secondary">Explore as Guest</a>
                </Link>
              </form>
            </div>
          </div>
        </div>
        
        <div className="features-section">
          <h2>How Booklet Works</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Create Your Booklet</h3>
              <p>Add books that shaped you, what you're reading now, and titles you'd like to share.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Discover Connections</h3>
              <p>Find people with similar reading tastes and intellectual interests.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Start Conversations</h3>
              <p>Connect through meaningful discussions about books you both love.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Share Books</h3>
              <p>Exchange physical books or recommend digital copies to expand your horizons.</p>
            </div>
          </div>
        </div>
        
        <div className="featured-books">
          <h2>Featured Books on Booklet</h2>
          <div className="books-carousel">
            {books.slice(0, 5).map(book => (
              <Link key={book.id} href={`/book/${book.id}`}>
                <a className="featured-book">
                  <div className="book-cover">
                    <img src={book.coverImage || "/placeholder-book.jpg"} alt={book.title} />
                  </div>
                  <div className="book-info">
                    <h4>{book.title}</h4>
                    <p>{book.author}</p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="cta-section">
          <h2>Ready to find your next great read and connection?</h2>
          <Link href="/explore">
            <a className="btn-large">Start Exploring</a>
          </Link>
        </div>
      </div>
      
      <footer className="app-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>Booklet</h2>
              <p>Connect through books</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Explore</h4>
                <Link href="/explore"><a>Discover Readers</a></Link>
                <Link href="/sharing"><a>Book Sharing</a></Link>
                <Link href="/profile/1"><a>Sample Profile</a></Link>
              </div>
              <div className="footer-column">
                <h4>Demo Info</h4>
                <p>This is a prototype version of Booklet</p>
                <p>Created with Next.js and React</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Booklet - A Cultural Connection App</p>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        .welcome-page {
          min-height: 100vh;
          background-color: var(--background-color);
        }
        
        .welcome-header {
          background-color: var(--primary-color);
          color: white;
          padding: 2rem 0;
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .logo-container h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        
        .tagline {
          font-style: italic;
          font-size: 1.2rem;
        }
        
        .welcome-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .intro-card {
          padding: 2rem;
        }
        
        .intro-card p {
          margin-bottom: 1rem;
        }
        
        .auth-card {
          padding: 2rem;
        }
        
        .auth-form .form-group {
          margin-bottom: 1rem;
        }
        
        .auth-form label {
          display: block;
          margin-bottom: 0.5rem;
        }
        
        .auth-form input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: var(--border-radius);
        }
        
        .btn-primary {
          display: block;
          width: 100%;
          background-color: var(--primary-color);
          color: white;
          padding: 0.75rem;
          border: none;
          border-radius: var(--border-radius);
          cursor: pointer;
          font-weight: 600;
          margin-top: 1rem;
          text-align: center;
          text-decoration: none;
        }
        
        .btn-secondary {
          display: block;
          width: 100%;
          background-color: white;
          color: var(--primary-color);
          padding: 0.75rem;
          border: 1px solid var(--primary-color);
          border-radius: var(--border-radius);
          cursor: pointer;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
        }
        
        .auth-divider {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 1rem 0;
        }
        
        .auth-divider::before,
        .auth-divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid #ddd;
        }
        
        .auth-divider span {
          padding: 0 0.5rem;
          color: var(--light-text);
        }
        
        .features-section {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .features-section h2 {
          margin-bottom: 2rem;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        
        .feature-card {
          background-color: var(--card-background);
          padding: 1.5rem;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
        }
        
        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .featured-books {
          margin-bottom: 3rem;
        }
        
        .featured-books h2 {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .books-carousel {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          padding: 1rem 0;
        }
        
        .featured-book {
          flex: 0 0 auto;
          width: 180px;
          text-decoration: none;
          color: inherit;
        }
        
        .book-cover {
          height: 260px;
          background-color: var(--secondary-color);
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--box-shadow);
          margin-bottom: 0.75rem;
        }
        
        .book-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .book-info h4 {
          margin-bottom: 0.25rem;
        }
        
        .book-info p {
          color: var(--light-text);
          font-size: 0.9rem;
        }
        
        .cta-section {
          text-align: center;
          margin-bottom: 4rem;
          padding: 3rem;
          background-color: var(--secondary-color);
          border-radius: var(--border-radius);
        }
        
        .cta-section h2 {
          margin-bottom: 1.5rem;
        }
        
        .btn-large {
          display: inline-block;
          background-color: var(--primary-color);
          color: white;
          padding: 1rem 2rem;
          border-radius: var(--border-radius);
          font-size: 1.2rem;
          font-weight: 600;
          text-decoration: none;
        }
        
        .app-footer {
          background-color: var(--primary-color);
          color: white;
          padding: 3rem 0 1rem;
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        
        .footer-logo h2 {
          margin-bottom: 0.5rem;
        }
        
        .footer-links {
          display: flex;
          gap: 3rem;
        }
        
        .footer-column h4 {
          margin-bottom: 1rem;
        }
        
        .footer-column a {
          display: block;
          color: white;
          margin-bottom: 0.5rem;
          text-decoration: none;
        }
        
        .footer-column a:hover {
          text-decoration: underline;
        }
        
        .footer-column p {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          opacity: 0.8;
        }
        
        .footer-bottom {
          text-align: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 0.9rem;
          opacity: 0.8;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .card {
          background-color: var(--card-background);
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
        }
        
        @media (max-width: 768px) {
          .welcome-content {
            grid-template-columns: 1fr;
          }
          
          .features-grid {
            grid-template-columns: 1fr 1fr;
          }
          
          .footer-content {
            flex-direction: column;
            gap: 2rem;
          }
        }
        
        @media (max-width: 480px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .footer-links {
            flex-direction: column;
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
