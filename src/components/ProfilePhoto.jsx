import React, { useState } from 'react';
import '../styles/ProfilePhoto.css';

export default function ProfilePhoto({ data, setData }) {
  const [preview, setPreview] = useState(data.profilePhoto || null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setData({
          ...data,
          profilePhoto: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-photo-section">
      <div className="photo-container">
        {preview ? (
          <img src={preview} alt="Profile" className="profile-photo" />
        ) : (
          <div className="photo-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        )}
      </div>
      <label htmlFor="photo-upload" className="upload-btn">
        📷 Ajouter une photo
      </label>
      <input
        type="file"
        id="photo-upload"
        accept="image/*"
        onChange={handlePhotoChange}
        className="photo-input"
      />
    </div>
  );
}
