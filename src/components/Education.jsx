import React from 'react';

export default function Education({ data, setData }) {
  const handleAddEducation = () => {
    setData(prev => ({
      ...prev,
      education: [...(prev.education || []), { etablissement: '', diplome: '', dateDebut: '', dateFin: '' }]
    }));
  };

  const handleEducationChange = (index, field, value) => {
    setData(prev => {
      const newEducation = [...(prev.education || [])];
      newEducation[index] = { ...newEducation[index], [field]: value };
      return { ...prev, education: newEducation };
    });
  };

  const handleDeleteEducation = (index) => {
    setData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="section">
      <h2>Parcours Scolaire</h2>
      {(data.education || []).map((edu, index) => (
        <div key={index} className="entry">
          <div className="form-group">
            <label htmlFor={`etablissement-${index}`}>Établissement :</label>
            <input
              type="text"
              id={`etablissement-${index}`}
              value={edu.etablissement}
              onChange={(e) => handleEducationChange(index, 'etablissement', e.target.value)}
              placeholder="Nom de l'établissement"
            />
          </div>
          <div className="form-group">
            <label htmlFor={`diplome-${index}`}>Diplôme :</label>
            <input
              type="text"
              id={`diplome-${index}`}
              value={edu.diplome}
              onChange={(e) => handleEducationChange(index, 'diplome', e.target.value)}
              placeholder="Intitulé du diplôme"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor={`dateDebut-${index}`}>Date de début :</label>
              <input
                type="month"
                id={`dateDebut-${index}`}
                value={edu.dateDebut}
                onChange={(e) => handleEducationChange(index, 'dateDebut', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor={`dateFin-${index}`}>Date de fin :</label>
              <input
                type="month"
                id={`dateFin-${index}`}
                value={edu.dateFin}
                onChange={(e) => handleEducationChange(index, 'dateFin', e.target.value)}
              />
            </div>
          </div>
          <button onClick={() => handleDeleteEducation(index)} className="btn-delete">
            Supprimer
          </button>
        </div>
      ))}
      <button onClick={handleAddEducation} className="btn-add">
        + Ajouter une formation
      </button>
    </div>
  );
}
