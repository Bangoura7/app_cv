import React from 'react';
import '../styles/Languages.css';

export default function Languages({ data, setData, editMode, onToggleEdit }) {
  const handleAddLanguage = () => {
    setData({
      ...data,
      languages: [...(data.languages || []), { language: '', level: 'Intermédiaire' }]
    });
  };

  const handleLanguageChange = (index, field, value) => {
    const newLanguages = [...(data.languages || [])];
    newLanguages[index] = { ...newLanguages[index], [field]: value };
    setData({ ...data, languages: newLanguages });
  };

  const handleDeleteLanguage = (index) => {
    setData({
      ...data,
      languages: data.languages.filter((_, i) => i !== index)
    });
  };

  if (!editMode) {
    return (
      <div className="languages-section">
        <div className="languages-header">
          <h2>Langues</h2>
          <button 
            type="button" 
            className="btn-edit" 
            onClick={onToggleEdit}
          >
            ✎ Modifier
          </button>
        </div>
        <div className="languages-display">
          {data.languages && data.languages.length > 0 ? (
            data.languages.map((lang, index) => (
              <div key={index} className="languages-entry-display">
                <p><strong>Langue :</strong> {lang.language}</p>
                <p><strong>Niveau :</strong> {lang.level}</p>
              </div>
            ))
          ) : (
            <p className="languages-empty">Aucune langue renseignée</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="languages-section">
      <div className="languages-header">
        <h2>Langues</h2>
      </div>
      {(data.languages || []).map((lang, index) => (
        <div key={index} className="languages-entry-edit">
          <div className="form-group">
            <label htmlFor={`language-${index}`}>Langue :</label>
            <input
              type="text"
              id={`language-${index}`}
              value={lang.language}
              onChange={(e) => handleLanguageChange(index, 'language', e.target.value)}
              placeholder="Ex: Français, Anglais, Espagnol..."
            />
          </div>
          <div className="form-group">
            <label htmlFor={`lang-level-${index}`}>Niveau :</label>
            <select
              id={`lang-level-${index}`}
              value={lang.level}
              onChange={(e) => handleLanguageChange(index, 'level', e.target.value)}
            >
              <option>Débutant</option>
              <option>Intermédiaire</option>
              <option>Avancé</option>
              <option>Bilingue</option>
              <option>Natif</option>
            </select>
          </div>
          <button type="button" onClick={() => handleDeleteLanguage(index)} className="btn-delete">
            🗑 Supprimer
          </button>
        </div>
      ))}
      <div className="languages-button-group">
        <button type="button" onClick={handleAddLanguage} className="btn-add">
          + Ajouter une langue
        </button>
        <button type="button" className="btn-submit" onClick={onToggleEdit}>
          ✓ Soumettre
        </button>
      </div>
    </div>
  );
}
