import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';
import ProfilePhoto from './ProfilePhoto';

export default function CVForm({ onDataChange }) {
  const [data, setData] = useState({
    nom: '',
    email: '',
    telephone: '',
    profilePhoto: null,
    education: [],
    experience: []
  });

  const [editModes, setEditModes] = useState({
    generalInfo: true,
    education: true,
    experience: true
  });

  const handleDataChange = (newData) => {
    setData(newData);
    if (onDataChange) {
      onDataChange(newData);
    }
  };

  const toggleEditMode = (section) => {
    setEditModes(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <form className="cv-form">
      <ProfilePhoto 
        data={data} 
        setData={handleDataChange}
      />
      <GeneralInfo 
        data={data} 
        setData={handleDataChange} 
        editMode={editModes.generalInfo}
        onToggleEdit={() => toggleEditMode('generalInfo')}
      />
      <Education 
        data={data} 
        setData={handleDataChange}
        editMode={editModes.education}
        onToggleEdit={() => toggleEditMode('education')}
      />
      <Experience 
        data={data} 
        setData={handleDataChange}
        editMode={editModes.experience}
        onToggleEdit={() => toggleEditMode('experience')}
      />
    </form>
  );
}
