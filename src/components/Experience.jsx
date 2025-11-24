import React from 'react';

export default function Experience({ data, setData }) {
  const handleAddExperience = () => {
    setData(prev => ({
      ...prev,
      experience: [...(prev.experience || []), { entreprise: '', poste: '', responsabilites: '', dateDebut: '', dateFin: '' }]
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    setData(prev => {
      const newExperience = [...(prev.experience || [])];
      newExperience[index] = { ...newExperience[index], [field]: value };
      return { ...prev, experience: newExperience };
    });
  };

  const handleDeleteExperience = (index) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="section">
      <h2>Expérience Professionnelle</h2>
      {(data.experience || []).map((exp, index) => (
        <div key={index} className="entry">
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
          <button onClick={() => handleDeleteExperience(index)} className="btn-delete">
            Supprimer
          </button>
        </div>
      ))}
      <button onClick={handleAddExperience} className="btn-add">
        + Ajouter une expérience
      </button>
    </div>
  );
}
