import React from 'react';

const Rightbar = () => {
  return (
    <div style={styles.rightbar}>
      <h3>Rightbar</h3>
      <p>This is the right sidebar content.</p>
    </div>
  );
};

const styles = {
  rightbar: {
    backgroundColor: '#f0f0f0',
    padding: '1rem',
    width: '250px',
  },
};

export default Rightbar;
