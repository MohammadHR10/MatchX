import React, { useState } from 'react';
import './profile.css';
import Navbar from '../components/Navbar1'; 
import Topbar from '../components/Topbar';
import Feed from '../components/Feed';

const Profile = () => {
  const [profilePic, setProfilePic] = useState('https://i.imgur.com/21oOhSM.png'); 
  const [profileName, setProfileName] = useState('James');
  const [profileBio, setProfileBio] = useState('A passionate software developer.');
  const [isEditing, setIsEditing] = useState(false); // State to toggle editing mode

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Toggle Edit Mode
  const handleEditToggle = () => setIsEditing(!isEditing);

  // Save Edited Name and Bio
  const handleSave = () => setIsEditing(false);

  return (
    <div className="profile-page">
      <Navbar />
      <Topbar />

      {/* Profile Info Section */}
      <div className="profile-main">
        <div className="profile-card">
          {/* Profile Picture with Overlay */}
          <div className="profile-pic-container">
            <img
              src={profilePic}
              alt="Profile"
              className="profile-pic"
            />
            <div className="edit-overlay">
              <label htmlFor="file-upload" className="photo-option-label">Edit Photo</label>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              id="file-upload"
              className="profile-pic-upload"
            />
          </div>

          {/* Profile Info: Name and Bio */}
          <div className="profile-info">
            <div className="profile-details">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    className="profile-input"
                  />
                  <textarea
                    value={profileBio}
                    onChange={(e) => setProfileBio(e.target.value)}
                    className="profile-textarea"
                  />
                  <button onClick={handleSave} className="profile-btn save-btn">
                    Save
                  </button>
                </>
              ) : (
                <>
                  <h2 className="profile-name">{profileName}</h2>
                  <p className="profile-bio">{profileBio}</p>
                  <button onClick={handleEditToggle} className="profile-btn edit-btn">
                    Edit Profile
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-cards">
          <div className="card">
            <h3>Posts</h3>
            <p>150</p>
          </div>
          <div className="card">
            <h3>Followers</h3>
            <p>1,200</p>
          </div>
          <div className="card">
            <h3>Following</h3>
            <p>980</p>
          </div>
        </div>

        {/* Skills Progress Bars */}
        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skill">
            <p>JavaScript</p>
            <div className="progress-bar"><span className="progress js"></span></div>
          </div>
          <div className="skill">
            <p>React</p>
            <div className="progress-bar"><span className="progress react"></span></div>
          </div>
          <div className="skill">
            <p>Python</p>
            <div className="progress-bar"><span className="progress python"></span></div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="social-media">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>
        </div>
        
        {/* Feed Section */}
        <Feed />
      </div>
    </div>
  );
};

export default Profile;
