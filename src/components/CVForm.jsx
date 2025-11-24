import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';

export default function CVForm({ onDataChange }) {
  const [data, setData] = useState({
    nom: '',
    email: '',
    telephone: '',
    education: [],
    experience: []
  });

  const handleDataChange = (newData) => {
    setData(newData);
    if (onDataChange) {
      onDataChange(newData);
    }
  };

  return (
    <form className="cv-form">
      <GeneralInfo data={data} setData={handleDataChange} />
      <Education data={data} setData={handleDataChange} />
      <Experience data={data} setData={handleDataChange} />
    </form>
  );
}
