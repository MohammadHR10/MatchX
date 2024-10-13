import React from 'react';

const Feed = () => {
  return (
    <div style={styles.feed}>
      <h3>Feed</h3>
      <p>This is where the main feed will go.</p>
    </div>
  );
};

const styles = {
  feed: {
    backgroundColor: '#fff',
    padding: '1rem',
    flex: '1',
  },
};

export default Feed;
