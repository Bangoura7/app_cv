import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';
import ProfilePhoto from './ProfilePhoto';
import Skills from './Skills';
import Languages from './Languages';
import Hobbies from './Hobbies';
import References from './References';

export default function CVForm({ onDataChange }) {
  const [data, setData] = useState({
    nom: '',
    email: '',
    telephone: '',
    profilePhoto: null,
    education: [],
    experience: [],
    skills: [],
    languages: [],
    hobbies: [],
    references: []
  });

  const [editModes, setEditModes] = useState({
    generalInfo: true,
    education: true,
    experience: true,
    skills: true,
    languages: true,
    hobbies: true,
    references: true
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
      <Skills 
        data={data} 
        setData={handleDataChange}
        editMode={editModes.skills}
        onToggleEdit={() => toggleEditMode('skills')}
      />
      <Languages 
        data={data} 
        setData={handleDataChange}
        editMode={editModes.languages}
        onToggleEdit={() => toggleEditMode('languages')}
      />
      <Hobbies 
        data={data} 
        setData={handleDataChange}
        editMode={editModes.hobbies}
        onToggleEdit={() => toggleEditMode('hobbies')}
      />
      <References 
        data={data} 
        setData={handleDataChange}
        editMode={editModes.references}
        onToggleEdit={() => toggleEditMode('references')}
      />
    </form>
  );
}
