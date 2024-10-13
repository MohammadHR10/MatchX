import React from 'react';

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h3>Sidebar</h3>
      <p>This is the left sidebar content.</p>
    </div>
  );
};

const styles = {
  sidebar: {
    backgroundColor: '#f0f0f0',
    padding: '1rem',
    width: '250px',
  },
};

export default Sidebar;
