import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import BookCard from '../components/BookCard';
import { books, getShareableBooks } from '../data/mockData';

export default function SharingPage() {
  // Get all shareable books
  const shareableBooks = getShareableBooks();
  
  return (
    <div className="book-sharing-page">
      <Navigation activePage="sharing" />
      
      <main className="container">
        <div className="page-header">
          <h2>Book Sharing</h2>
          <p>Share your books with others or discover books available to borrow from the community.</p>
        </div>
        
        <div className="sharing-tabs">
          <button className="tab-btn active">Available Books</button>
          <button className="tab-btn">My Shared Books</button>
          <button className="tab-btn">Sharing History</button>
        </div>
        
        <div className="sharing-container">
          <aside className="sharing-sidebar">
            <div className="filter-section">
              <h3>Filter Books</h3>
              
              <div className="filter-group">
                <h4>Genres</h4>
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
                <h4>Format</h4>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked /> Physical Book
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" /> E-book
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" /> Audiobook
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
          
          <div className="books-container">
            <div className="results-header">
              <div className="results-count">
                <p>Showing {shareableBooks.length} books available for sharing</p>
              </div>
              <div className="results-sort">
                <label htmlFor="sort-select">Sort by:</label>
                <select id="sort-select">
                  <option>Recently added</option>
                  <option>Closest location</option>
                  <option>Alphabetical</option>
                </select>
              </div>
            </div>
            
            <div className="shared-books-grid">
              {shareableBooks.map(book => {
                const isDigital = book.sharingFormat === "E-book" || book.sharingFormat === "Audiobook";
                return (
                  <div key={book.id} className={`shared-book-card ${isDigital ? 'digital' : ''}`}>
                    <div className="book-cover-medium">
                      <img src={book.coverImage || "/placeholder-share.jpg"} alt={book.title} />
                      {isDigital && <div className="digital-badge">{book.sharingFormat}</div>}
                    </div>
                    <div className="shared-book-info">
                      <h3 className="book-title">{book.title}</h3>
                      <p className="book-author">{book.author}</p>
                      <div className="book-metadata">
                        <span className="book-format">{book.sharingFormat}</span>
                        <span className="book-condition">{book.sharingCondition}</span>
                      </div>
                      <div className="owner-info">
                        <div className="owner-avatar">
                          <img 
                            src={book.sharingOwner ? `/placeholder-user${book.sharingOwner % 7 || 1}.jpg` : "/placeholder-avatar.jpg"} 
                            alt="Owner" 
                          />
                        </div>
                        <div className="owner-details">
                          <p className="owner-name">
                            {book.sharingOwner ? `User ${book.sharingOwner}` : "Anonymous User"}
                          </p>
                          <p className="owner-location">
                            {isDigital ? "Digital sharing" : `${Math.floor(Math.random() * 10) + 1} miles away`}
                          </p>
                        </div>
                      </div>
                      <div className="sharing-actions">
                        <button className="btn-primary">
                          {isDigital ? "Request Link" : "Request Book"}
                        </button>
                        <Link href={`/book/${book.id}`}>
                          <a className="btn-secondary">View Details</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="pagination">
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">3</button>
              <button className="pagination-btn">Next →</button>
            </div>
          </div>
        </div>
        
        <div className="sharing-guide card">
          <h3>How Book Sharing Works</h3>
          <div className="guide-steps">
            <div className="guide-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Find a Book</h4>
                <p>Browse available books from other members in your area or digital copies that can be shared online.</p>
              </div>
            </div>
            <div className="guide-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Request to Borrow</h4>
                <p>Send a request to the book owner. Include a brief message about why you're interested in the book.</p>
              </div>
            </div>
            <div className="guide-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Arrange Exchange</h4>
                <p>For physical books, coordinate a safe public place to meet. For digital books, receive a link to access the content.</p>
              </div>
            </div>
            <div className="guide-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Return When Done</h4>
                <p>Return physical books in the same condition you received them. Digital loans expire automatically after the lending period.</p>
              </div>
            </div>
          </div>
          <div className="sharing-cta">
            <h4>Have books to share?</h4>
            <button className="btn-primary">Add Books to Share</button>
          </div>
        </div>
      </main>
      
      <style jsx>{`
        .book-sharing-page {
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
        
        .sharing-tabs {
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
        
        .sharing-container {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .sharing-sidebar {
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
        
        .shared-books-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .shared-book-card {
          display: flex;
          background-color: var(--card-background);
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--box-shadow);
        }
        
        .book-cover-medium {
          width: 120px;
          height: 180px;
          position: relative;
        }
        
        .book-cover-medium img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .digital-badge {
          position: absolute;
          top: 10px;
          left: 0;
          background-color: var(--accent-color);
          color: white;
          padding: 0.25rem 0.5rem;
          font-size: 0.8rem;
        }
        
        .shared-book-info {
          flex: 1;
          padding: 1rem;
          display: flex;
          flex-direction: column;
        }
        
        .book-title {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }
        
        .book-author {
          color: var(--light-text);
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }
        
        .book-metadata {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .book-metadata span {
          font-size: 0.85rem;
          color: var(--light-text);
        }
        
        .owner-info {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .owner-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 0.75rem;
        }
        
        .owner-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .owner-name {
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .owner-location {
          color: var(--light-text);
          font-size: 0.85rem;
        }
        
        .sharing-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
        }
        
        .btn-primary {
          flex: 1;
          background-color: var(--primary-color);
          color: white;
          border: none;
          padding: 0.5rem 0.75rem;
          border-radius: var(--border-radius);
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .btn-secondary {
          flex: 1;
          background-color: white;
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
          padding: 0.5rem 0.75rem;
          border-radius: var(--border-radius);
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
          text-align: center;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
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
        
        .sharing-guide {
          padding: 2rem;
          margin-bottom: 3rem;
        }
        
        .sharing-guide h3 {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .guide-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .guide-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .step-number {
          width: 40px;
          height: 40px;
          background-color: var(--primary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .step-content h4 {
          margin-bottom: 0.5rem;
        }
        
        .step-content p {
          font-size: 0.9rem;
          color: var(--light-text);
        }
        
        .sharing-cta {
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid #eee;
        }
        
        .sharing-cta h4 {
          margin-bottom: 1rem;
        }
        
        .card {
          background-color: var(--card-background);
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
        }
        
        @media (max-width: 992px) {
          .sharing-container {
            grid-template-columns: 1fr;
          }
          
          .sharing-sidebar {
            margin-bottom: 1.5rem;
          }
          
          .guide-steps {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .shared-books-grid {
            grid-template-columns: 1fr;
          }
          
          .results-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .guide-steps {
            grid-template-columns: 1fr;
          }
          
          .sharing-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
