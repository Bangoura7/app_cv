import React from 'react';
import '../styles/Experience.css';

export default function Experience({ data, setData, editMode, onToggleEdit }) {
  const handleAddExperience = () => {
    setData({
      ...data,
      experience: [...(data.experience || []), { entreprise: '', poste: '', responsabilites: '', dateDebut: '', dateFin: '' }]
    });
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...(data.experience || [])];
    newExperience[index] = { ...newExperience[index], [field]: value };
    setData({ ...data, experience: newExperience });
  };

  const handleDeleteExperience = (index) => {
    setData({
      ...data,
      experience: data.experience.filter((_, i) => i !== index)
    });
  };

  if (!editMode) {
    return (
      <div className="experience-section">
        <div className="experience-header">
          <h2>Expérience Professionnelle</h2>
          <button 
            type="button" 
            className="btn-edit" 
            onClick={onToggleEdit}
          >
            ✎ Modifier
          </button>
        </div>
        <div className="experience-display">
          {data.experience && data.experience.length > 0 ? (
            data.experience.map((exp, index) => (
              <div key={index} className="experience-entry-display">
                {exp.poste && <p><strong>Poste :</strong> {exp.poste}</p>}
                {exp.entreprise && <p><strong>Entreprise :</strong> {exp.entreprise}</p>}
                {(exp.dateDebut || exp.dateFin) && (
                  <p><strong>Dates :</strong> {exp.dateDebut} {exp.dateDebut && exp.dateFin && ' - '} {exp.dateFin}</p>
                )}
                {exp.responsabilites && <p><strong>Responsabilités :</strong> {exp.responsabilites}</p>}
              </div>
            ))
          ) : (
            <p className="experience-empty">Aucune expérience renseignée</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="experience-section">
      <div className="experience-header">
        <h2>Expérience Professionnelle</h2>
      </div>
      {(data.experience || []).map((exp, index) => (
        <div key={index} className="experience-entry-edit">
          <div className="form-group">
            <label htmlFor={`entreprise-${index}`}>Entreprise :</label>
            <input
              type="text"
              id={`entreprise-${index}`}
              value={exp.entreprise}
              onChange={(e) => handleExperienceChange(index, 'entreprise', e.target.value)}
              placeholder="Nom de l'entreprise"
            />
          </div>
          <div className="form-group">
            <label htmlFor={`poste-${index}`}>Intitulé du poste :</label>
            <input
              type="text"
              id={`poste-${index}`}
              value={exp.poste}
              onChange={(e) => handleExperienceChange(index, 'poste', e.target.value)}
              placeholder="Votre titre de poste"
            />
          </div>
          <div className="form-group">
            <label htmlFor={`responsabilites-${index}`}>Responsabilités :</label>
            <textarea
              id={`responsabilites-${index}`}
              value={exp.responsabilites}
              onChange={(e) => handleExperienceChange(index, 'responsabilites', e.target.value)}
              placeholder="Décrivez vos principales responsabilités"
              rows="4"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor={`dateDebut-${index}`}>Date de début :</label>
              <input
                type="month"
                id={`dateDebut-${index}`}
                value={exp.dateDebut}
                onChange={(e) => handleExperienceChange(index, 'dateDebut', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor={`dateFin-${index}`}>Date de fin :</label>
              <input
                type="month"
                id={`dateFin-${index}`}
                value={exp.dateFin}
                onChange={(e) => handleExperienceChange(index, 'dateFin', e.target.value)}
              />
            </div>
          </div>
          <button type="button" onClick={() => handleDeleteExperience(index)} className="btn-delete">
            🗑 Supprimer
          </button>
        </div>
      ))}
      <div className="experience-button-group">
        <button type="button" onClick={handleAddExperience} className="btn-add">
          + Ajouter une expérience
        </button>
        <button type="button" className="btn-submit" onClick={onToggleEdit}>
          ✓ Soumettre
        </button>
      </div>
    </div>
  );
}
