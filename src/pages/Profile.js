/*
import React from 'react';

function Profile() {
  return <div>Profile Page</div>;
}

export default Profile;
*/

import React from 'react';
import './profile.css'; // Ensure this file exists and has necessary styles
import Navbar from '../components/Navbar1';
import Rightbar from '../components/Rightbar';
import Topbar from '../components/Topbar';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';

const Profile = () => {
  return (
    <div className="profile">
      <Navbar />
      <Topbar />
      <div className="profile-content">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Profile;
