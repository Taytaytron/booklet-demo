import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import BookCard from '../../components/BookCard';
import { users, books, getBooksByUser } from '../../data/mockData';

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;
  
  // Default to first user if no ID is provided
  const userId = id ? parseInt(id) : 1;
  const user = users.find(u => u.id === userId) || users[0];
  
  // Get user's books
  const userBooks = getBooksByUser(userId);
  
  return (
    <div className="profile-page">
      <Navigation activePage="profile" />
      
      <main className="container">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src={user.avatar || "/placeholder-avatar.jpg"} alt={user.name} />
          </div>
          <div className="profile-info">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-bio">{user.bio}</p>
          </div>
        </div>
        
        <div className="profile-content">
          <section className="about-section card">
            <h3>About My Reading Self</h3>
            <p>
              I've been an avid reader since childhood, with a particular fondness for {user.readingVibe && user.readingVibe.join(', ').toLowerCase()} books. 
              I read to understand different perspectives and to find reflections of my own experiences in others' stories.
            </p>
            <p>
              My reading habits are eclectic - I usually have one fiction and one non-fiction book going simultaneously. 
              I love discussing themes and character development, and I'm always looking for book recommendations that challenge my worldview.
            </p>
          </section>
          
          <section className="books-section">
            <div className="section-header">
              <h3>Books That Shaped Me</h3>
            </div>
            <div className="books-grid">
              {userBooks.favoriteBooks.map(book => (
                <Link key={book.id} href={`/book/${book.id}`}>
                  <a>
                    <div className="book-card">
                      <div className="book-cover">
                        <img src={book.coverImage || "/placeholder-book.jpg"} alt={book.title} />
                      </div>
                      <div className="book-info">
                        <h4 className="book-title">{book.title}</h4>
                        <p className="book-author">{book.author}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </section>
          
          <div className="two-column-section">
            <section className="currently-reading card">
              <h3>Currently Reading</h3>
              <div className="book-list">
                {userBooks.readingNow.map(book => (
                  <div key={book.id} className="book-item">
                    <div className="book-cover-small">
                      <img src={book.coverImage || "/placeholder-current.jpg"} alt={book.title} />
                    </div>
                    <div className="book-details">
                      <h4>{book.title}</h4>
                      <p>{book.author}</p>
                      <div className="reading-progress">
                        <div className="progress-bar" style={{width: `${Math.floor(Math.random() * 70) + 10}%`}}></div>
                        <span>{Math.floor(Math.random() * 70) + 10}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="wishlist card">
              <h3>Reading Wishlist</h3>
              <ul className="wishlist-items">
                {userBooks.wishlist.map(book => (
                  <li key={book.id}>
                    <Link href={`/book/${book.id}`}>
                      <a>
                        <span className="book-title">{book.title}</span>
                        <span className="book-author">{book.author}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          
          <section className="shareable-books card">
            <h3>Books Available to Share</h3>
            <div className="books-grid">
              {userBooks.shareableBooks.map(book => (
                <Link key={book.id} href={`/book/${book.id}`}>
                  <a>
                    <div className="book-card">
                      <div className="book-cover">
                        <img src={book.coverImage || "/placeholder-share.jpg"} alt={book.title} />
                        <div className="share-badge">Available</div>
                      </div>
                      <div className="book-info">
                        <h4 className="book-title">{book.title}</h4>
                        <p className="book-author">{book.author}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </section>
          
          {user.readingVibe && (
            <section className="reading-vibe card">
              <h3>My Reading Vibe</h3>
              <div className="vibe-tags">
                {user.readingVibe.map((vibe, index) => (
                  <span key={index} className="vibe-tag">{vibe}</span>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      
      <style jsx>{`
        .profile-page {
          min-height: 100vh;
          background-color: var(--background-color);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .profile-header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
        }
        
        .profile-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 2rem;
          box-shadow: var(--box-shadow);
        }
        
        .profile-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .profile-name {
          margin-bottom: 0.5rem;
        }
        
        .profile-bio {
          color: var(--light-text);
          max-width: 600px;
        }
        
        .profile-content {
          margin-bottom: 3rem;
        }
        
        .about-section {
          margin-bottom: 2rem;
        }
        
        .about-section p {
          margin-bottom: 1rem;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .books-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .two-column-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .book-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .book-item {
          display: flex;
          align-items: center;
        }
        
        .book-cover-small {
          width: 60px;
          height: 90px;
          border-radius: 4px;
          overflow: hidden;
          margin-right: 1rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .book-cover-small img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .book-details {
          flex: 1;
        }
        
        .book-details h4 {
          margin-bottom: 0.25rem;
        }
        
        .book-details p {
          color: var(--light-text);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        
        .reading-progress {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .progress-bar {
          height: 8px;
          background-color: var(--primary-color);
          border-radius: 4px;
        }
        
        .wishlist-items {
          list-style: none;
        }
        
        .wishlist-items li {
          padding: 0.75rem 0;
          border-bottom: 1px solid #eee;
          display: flex;
          flex-direction: column;
        }
        
        .wishlist-items li:last-child {
          border-bottom: none;
        }
        
        .wishlist-items a {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
        }
        
        .book-title {
          font-weight: 600;
        }
        
        .book-author {
          color: var(--light-text);
          font-size: 0.9rem;
        }
        
        .share-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: var(--accent-color);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
        }
        
        .book-cover {
          position: relative;
          height: 260px;
          background-color: var(--secondary-color);
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--box-shadow);
        }
        
        .book-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .book-info {
          padding: 0.75rem 0;
        }
        
        .book-card {
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }
        
        .book-card:hover {
          transform: translateY(-5px);
        }
        
        .vibe-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        
        .vibe-tag {
          background-color: var(--secondary-color);
          color: var(--accent-color);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
        }
        
        .card {
          background-color: var(--card-background);
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .books-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .two-column-section {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 480px) {
          .profile-header {
            flex-direction: column;
            text-align: center;
          }
          
          .profile-avatar {
            margin-right: 0;
            margin-bottom: 1rem;
          }
          
          .books-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
