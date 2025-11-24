import React from 'react';
import '../styles/Education.css';

export default function Education({ data, setData, editMode, onToggleEdit }) {
  const handleAddEducation = () => {
    setData({
      ...data,
      education: [...(data.education || []), { etablissement: '', diplome: '', dateDebut: '', dateFin: '' }]
    });
  };

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...(data.education || [])];
    newEducation[index] = { ...newEducation[index], [field]: value };
    setData({ ...data, education: newEducation });
  };

  const handleDeleteEducation = (index) => {
    setData({
      ...data,
      education: data.education.filter((_, i) => i !== index)
    });
  };

  if (!editMode) {
    return (
      <div className="education-section">
        <div className="education-header">
          <h2>Parcours Scolaire</h2>
          <button 
            type="button" 
            className="btn-edit" 
            onClick={onToggleEdit}
          >
            ✎ Modifier
          </button>
        </div>
        <div className="education-display">
          {data.education && data.education.length > 0 ? (
            data.education.map((edu, index) => (
              <div key={index} className="education-entry-display">
                {edu.diplome && <p><strong>Diplôme :</strong> {edu.diplome}</p>}
                {edu.etablissement && <p><strong>Établissement :</strong> {edu.etablissement}</p>}
                {(edu.dateDebut || edu.dateFin) && (
                  <p><strong>Dates :</strong> {edu.dateDebut} {edu.dateDebut && edu.dateFin && ' - '} {edu.dateFin}</p>
                )}
              </div>
            ))
          ) : (
            <p className="education-empty">Aucune formation renseignée</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="education-section">
      <div className="education-header">
        <h2>Parcours Scolaire</h2>
      </div>
      {(data.education || []).map((edu, index) => (
        <div key={index} className="education-entry-edit">
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
            🗑 Supprimer
          </button>
        </div>
      ))}
      <div className="education-button-group">
        <button type="button" onClick={handleAddEducation} className="btn-add">
          + Ajouter une formation
        </button>
        <button type="button" className="btn-submit" onClick={onToggleEdit}>
          ✓ Soumettre
        </button>
      </div>
    </div>
  );
}
