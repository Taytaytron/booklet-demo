import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import { books, users, getUsersWithCommonBooks } from '../data/mockData';

export default function ExplorePage() {
  // Get connections for the current user (using user 1 as default)
  const currentUserId = 1;
  const connections = getUsersWithCommonBooks(currentUserId);
  
  return (
    <div className="explore-page">
      <Navigation activePage="explore" />
      
      <main className="container">
        <div className="page-header">
          <h2>Explore Connections</h2>
          <p>Discover readers with similar literary tastes and explore new books through their collections.</p>
        </div>
        
        <div className="explore-tabs">
          <button className="tab-btn active">Readers</button>
          <button className="tab-btn">Books</button>
          <button className="tab-btn">Reading Clubs</button>
        </div>
        
        <div className="explore-container">
          <aside className="explore-sidebar">
            <div className="filter-section">
              <h3>Filter Readers</h3>
              
              <div className="filter-group">
                <h4>Reading Vibes</h4>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked /> Fiction Explorer
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" /> Non-fiction Enthusiast
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" /> Classic Appreciator
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" /> Science Fiction Fan
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" /> Philosophical Reader
                  </label>
                </div>
              </div>
              
              <div className="filter-group">
                <h4>Book Interests</h4>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked /> Fiction
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" /> Non-Fiction
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" /> Science Fiction
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" /> Mystery
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" /> Biography
                  </label>
                </div>
              </div>
              
              <div className="filter-group">
                <h4>Location</h4>
                <div className="range-slider">
                  <label>Within 15 miles</label>
                  <input type="range" min="5" max="50" defaultValue="15" />
                  <div className="range-labels">
                    <span>5mi</span>
                    <span>50mi</span>
                  </div>
                </div>
              </div>
              
              <button className="btn-apply-filters">Apply Filters</button>
              <button className="btn-reset-filters">Reset</button>
            </div>
          </aside>
          
          <div className="connections-container">
            <div className="results-header">
              <div className="results-count">
                <p>Found {connections.length} readers with similar tastes</p>
              </div>
              <div className="results-sort">
                <label htmlFor="sort-select">Sort by:</label>
                <select id="sort-select">
                  <option>Most books in common</option>
                  <option>Recently active</option>
                  <option>Closest location</option>
                </select>
              </div>
            </div>
            
            <div className="connections-list">
              {connections.map(connection => (
                <div key={connection.user.id} className="connection-card">
                  <div className="connection-main">
                    <div className="user-avatar">
                      <img src={connection.user.avatar || "/placeholder-avatar.jpg"} alt={connection.user.name} />
                    </div>
                    <div className="user-info">
                      <h3 className="user-name">{connection.user.name}</h3>
                      <p className="user-location">{connection.user.location}</p>
                      <p className="user-bio">{connection.user.bio}</p>
                      
                      {connection.user.readingVibe && (
                        <div className="user-vibes">
                          {connection.user.readingVibe.slice(0, 3).map((vibe, index) => (
                            <span key={index} className="vibe-tag">{vibe}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="connection-books">
                    <h4>Books in Common ({connection.commonCount})</h4>
                    <div className="common-books">
                      {connection.commonBooks.map(book => (
                        <Link key={book.id} href={`/book/${book.id}`}>
                          <a className="common-book">
                            <img src={book.coverImage || "/placeholder-book.jpg"} alt={book.title} />
                            <div className="book-hover-info">
                              <p className="book-title">{book.title}</p>
                              <p className="book-author">{book.author}</p>
                            </div>
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div className="connection-actions">
                    <Link href={`/profile/${connection.user.id}`}>
                      <a className="btn-view-profile">View Full Profile</a>
                    </Link>
                    <button className="btn-connect">Connect</button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pagination">
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">3</button>
              <button className="pagination-btn">Next →</button>
            </div>
          </div>
        </div>
        
        <div className="featured-books">
          <h3>Popular Books on Booklet</h3>
          <div className="books-carousel">
            {books.slice(0, 6).map(book => (
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
      </main>
      
      <style jsx>{`
        .explore-page {
          min-height: 100vh;
          background-color: var(--background-color);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .page-header {
          margin-bottom: 1.5rem;
        }
        
        .page-header h2 {
          margin-bottom: 0.5rem;
        }
        
        .page-header p {
          color: var(--light-text);
        }
        
        .explore-tabs {
          display: flex;
          border-bottom: 1px solid #ddd;
          margin-bottom: 2rem;
        }
        
        .tab-btn {
          background: none;
          border: none;
          padding: 1rem 1.5rem;
          cursor: pointer;
          font-weight: 600;
          color: var(--light-text);
        }
        
        .tab-btn.active {
          color: var(--primary-color);
          border-bottom: 2px solid var(--primary-color);
        }
        
        .explore-container {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .explore-sidebar {
          background-color: var(--card-background);
          border-radius: var(--border-radius);
          padding: 1.5rem;
          box-shadow: var(--box-shadow);
          align-self: start;
        }
        
        .filter-section h3 {
          margin-bottom: 1.5rem;
        }
        
        .filter-group {
          margin-bottom: 1.5rem;
        }
        
        .filter-group h4 {
          margin-bottom: 0.75rem;
          font-size: 1rem;
        }
        
        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }
        
        .range-slider {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .range-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--light-text);
        }
        
        .btn-apply-filters {
          width: 100%;
          background-color: var(--primary-color);
          color: white;
          border: none;
          padding: 0.75rem;
          border-radius: var(--border-radius);
          cursor: pointer;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        
        .btn-reset-filters {
          width: 100%;
          background-color: white;
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
          padding: 0.75rem;
          border-radius: var(--border-radius);
          cursor: pointer;
          font-weight: 600;
        }
        
        .results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .results-count {
          color: var(--light-text);
        }
        
        .results-sort {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .results-sort select {
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: var(--border-radius);
          background-color: white;
        }
        
        .connections-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .connection-card {
          background-color: var(--card-background);
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--box-shadow);
          padding: 1.5rem;
        }
        
        .connection-main {
          display: flex;
          margin-bottom: 1.5rem;
        }
        
        .user-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 1.5rem;
        }
        
        .user-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .user-info {
          flex: 1;
        }
        
        .user-name {
          margin-bottom: 0.25rem;
        }
        
        .user-location {
          color: var(--light-text);
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }
        
        .user-bio {
          margin-bottom: 1rem;
          line-height: 1.5;
        }
        
        .user-vibes {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .vibe-tag {
          background-color: var(--secondary-color);
          color: var(--accent-color);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
        }
        
        .connection-books {
          margin-bottom: 1.5rem;
        }
        
        .connection-books h4 {
          margin-bottom: 1rem;
        }
        
        .common-books {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }
        
        .common-book {
          position: relative;
          width: 80px;
          height: 120px;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .common-book img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .book-hover-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 0.5rem;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }
        
        .common-book:hover .book-hover-info {
          transform: translateY(0);
        }
        
        .book-title {
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        
        .book-author {
          font-size: 0.7rem;
          opacity: 0.8;
        }
        
        .connection-actions {
          display: flex;
          gap: 1rem;
        }
        
        .btn-view-profile {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
          padding: 0.75rem;
          border-radius: var(--border-radius);
          cursor: pointer;
          font-weight: 600;
          text-decoration: none;
        }
        
        .btn-connect {
          flex: 1;
          background-color: var(--primary-color);
          color: white;
          border: none;
          padding: 0.75rem;
          border-radius: var(--border-radius);
          cursor: pointer;
          font-weight: 600;
        }
        
        .pagination {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .pagination-btn {
          background-color: white;
          border: 1px solid #ddd;
          padding: 0.5rem 1rem;
          border-radius: var(--border-radius);
          cursor: pointer;
        }
        
        .pagination-btn.active {
          background-color: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }
        
        .featured-books {
          margin-bottom: 3rem;
        }
        
        .featured-books h3 {
          margin-bottom: 1.5rem;
        }
        
        .books-carousel {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          padding: 1rem 0;
        }
        
        .featured-book {
          flex: 0 0 auto;
          width: 150px;
          text-decoration: none;
          color: inherit;
        }
        
        .book-cover {
          height: 220px;
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
          font-size: 0.9rem;
        }
        
        .book-info p {
          color: var(--light-text);
          font-size: 0.8rem;
        }
        
        @media (max-width: 992px) {
          .explore-container {
            grid-template-columns: 1fr;
          }
          
          .explore-sidebar {
            margin-bottom: 1.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .connection-main {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .user-avatar {
            margin-right: 0;
            margin-bottom: 1rem;
          }
          
          .user-vibes {
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .results-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .connection-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
