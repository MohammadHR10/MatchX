import React, { useState } from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  const [profilePic, setProfilePic] = useState('https://i.imgur.com/21oOhSM.png');
  const [profileName, setProfileName] = useState('James');
  const [profileBio, setProfileBio] = useState('A passionate software developer.');
  const [isEditing, setIsEditing] = useState(false);

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

  const handleEditToggle = () => setIsEditing(!isEditing);
  const handleSave = () => setIsEditing(false);

  return (
    <div className="profile-card">
      <div className="profile-pic-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
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

      <div className="profile-info">
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
  );
};

export default ProfileCard;
