import React, { useState, useEffect } from 'react';
import './Matches.css';  // Import the CSS
import Inbox from '/Users/mohammad/Downloads/MatchX/src/components/Inbox.js'; // Adjust the path based on your directory structure

function Matches() {
  // State for user posts, inbox, and category
  const [posts, setPosts] = useState([]); // Stores collaboration posts
  const [inbox, setInbox] = useState({}); // Inbox for messaging
  const [postDescription, setPostDescription] = useState('');
  const [imageFile, setImageFile] = useState(null); // Image upload
  const [name, setName] = useState('');
  const [category, setCategory] = useState(''); // Empty default category to force selection
  const [activeMessage, setActiveMessage] = useState(null); // For messaging
  const [messageText, setMessageText] = useState(''); // For message input
  const [userId, setUserId] = useState('');  // State to hold userId

  // Recommendations (static for now)
  const [recommendations] = useState([
    { name: "John Doe", interest: "Basketball" },
    { name: "Jane Smith", interest: "Tennis" }
  ]);

  // Generate a random userId when the component mounts
  useEffect(() => {
    const generatedUserId = 'user_' + Math.random().toString(36).substring(2, 10);
    setUserId(generatedUserId);
  }, []);

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(reader.result);  // Store base64 image data
      };
      reader.readAsDataURL(file);  // Convert to base64
    }
  };

  // Handle post submission
  const handlePostSubmit = (e) => {
    e.preventDefault();

    if (!category) {
      alert("Please select a category before posting.");
      return;
    }

    const newPost = {
      id: posts.length + 1,
      name,
      description: postDescription,
      category,
      image: imageFile
    };

    setPosts([newPost, ...posts]);
    setPostDescription('');
    setImageFile(null);  // Clear image preview after submission
    setCategory('');  // Reset category selection
  };

  // Handle post deletion
  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  // Handle "Reach Out" click (opens message form)
  const handleReachOut = (postId) => {
    setActiveMessage(postId);  // Set active post for messaging
  };

  // Send message to the post creator
  const sendMessageToInbox = (postCreator, postId) => {
    setInbox(prevInbox => ({
      ...prevInbox,
      [postCreator]: [
        ...(prevInbox[postCreator] || []),
        { from: name, text: messageText }
      ]
    }));
    setMessageText('');  // Clear input
    setActiveMessage(null);  // Close message form
  };

  // Render messages for a specific post creator
  const renderMessages = (postCreator) => {
    return inbox[postCreator]?.map((message, index) => (
      <div key={index} className="message">
        <strong>{message.from}:</strong> {message.text}
      </div>
    ));
  };

  return (
    <div className="matches-page">
      {/* Sidebar for Inbox and AI Recommendations */}
      <div className="sidebar">
        <div className="inbox-section">
          <h2>Inbox</h2>
          <p>Your User ID: {userId}</p> {/* Display userId */}
          {/* Pass userId to the Inbox component */}
          <Inbox userId={userId} />
          {Object.keys(inbox).length > 0 ? (
            Object.keys(inbox).map((postCreator, index) => (
              <div key={index} className="inbox-message">
                <h4>Messages from {postCreator}:</h4>
                {renderMessages(postCreator)}
              </div>
            ))
          ) : (
            <p>No new messages</p>
          )}
        </div>
        <div className="recommendations-section">
          <h2>AI Collaborator Recommendations</h2>
          <ul>
            {recommendations.map((rec, index) => (
              <li key={index}>
                <p>{rec.name} - {rec.interest}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Feed */}
      <div className="main-feed">
        <div className="post-creation">
          <h2>Create a Collaboration Post</h2>
          <form onSubmit={handlePostSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <textarea
              placeholder="Describe your collaboration request..."
              value={postDescription}
              onChange={(e) => setPostDescription(e.target.value)}
              required
            />

            {/* Category selection */}
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="" disabled>Select Category</option>
              <option value="Sports">Sports</option>
              <option value="Education">Education</option>
              <option value="Hangout">Hangout</option>
            </select>

            {/* File input for image upload */}
            <input type="file" onChange={handleImageChange} accept="image/*" />

            {/* Image preview */}
            {imageFile && (
              <div className="image-preview">
                <img src={imageFile} alt="Image Preview" className="preview-image" />
              </div>
            )}

            <button type="submit" className="post-button">Post</button>
          </form>
        </div>

        <div className="feed">
          <h2>Collaboration Feed</h2>
          {posts.length > 0 ? (
            posts.map(post => (
              <div key={post.id} className="post-card">
                <h3>{post.name} - <span className="post-category">{post.category}</span></h3>
                <p>{post.description}</p>
                {post.image && <img src={post.image} alt="Collaboration Post" className="post-image" />}
                
                {/* Delete button for post creator */}
                <button className="delete-button" onClick={() => handleDeletePost(post.id)}>
                  Delete Post
                </button>

                {/* Reach Out button */}
                <button className="reachout-button" onClick={() => handleReachOut(post.id)}>
                  Reach Out
                </button>

                {/* Message form (visible when "Reach Out" is clicked) */}
                {activeMessage === post.id && (
                  <div className="message-form">
                    <textarea
                      placeholder="Type your message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                    />
                    <button onClick={() => sendMessageToInbox(post.name, post.id)}>
                      Send Message
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No collaboration posts yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Matches;
