import React from 'react';

const Feed = () => {
  return (
    <div style={styles.feed}>
      <h3 style={styles.title}>Latest Posts</h3>
      <div style={styles.post}>
        <h4 style={styles.postTitle}>Post Title 1</h4>
        <p style={styles.postContent}>This is an example of a post content. It could be a status update, a shared article, or any other type of feed content.</p>
      </div>
      <div style={styles.post}>
        <h4 style={styles.postTitle}>Post Title 2</h4>
        <p style={styles.postContent}>This is another example of feed content. The design uses a clean card layout.</p>
      </div>
      <div style={styles.post}>
        <h4 style={styles.postTitle}>Post Title 3</h4>
        <p style={styles.postContent}>Here is a third post with some additional content to show what the feed might look like.</p>
      </div>
    </div>
  );
};

const styles = {
  feed: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
    width: '100%',
    maxWidth: '800px',
    textAlign: 'left',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    fontFamily: 'Poppins, sans-serif',
  },
  post: {
    backgroundColor: '#f9f9f9',
    padding: '1.5rem',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease',
  },
  postTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1e90ff',
    marginBottom: '10px',
    fontFamily: 'Poppins, sans-serif',
  },
  postContent: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
    fontFamily: 'Poppins, sans-serif',
  },
};

export default Feed;
