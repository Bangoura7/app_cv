import React from 'react';
import '../styles/Hobbies.css';

export default function Hobbies({ data, setData, editMode, onToggleEdit }) {
  const handleAddHobby = () => {
    setData({
      ...data,
      hobbies: [...(data.hobbies || []), { hobby: '' }]
    });
  };

  const handleHobbyChange = (index, value) => {
    const newHobbies = [...(data.hobbies || [])];
    newHobbies[index] = { hobby: value };
    setData({ ...data, hobbies: newHobbies });
  };

  const handleDeleteHobby = (index) => {
    setData({
      ...data,
      hobbies: data.hobbies.filter((_, i) => i !== index)
    });
  };

  if (!editMode) {
    return (
      <div className="hobbies-section">
        <div className="hobbies-header">
          <h2>Loisirs</h2>
          <button 
            type="button" 
            className="btn-edit" 
            onClick={onToggleEdit}
          >
            ✎ Modifier
          </button>
        </div>
        <div className="hobbies-display">
          {data.hobbies && data.hobbies.length > 0 ? (
            <div className="hobbies-list">
              {data.hobbies.map((hobby, index) => (
                <span key={index} className="hobby-tag">{hobby.hobby}</span>
              ))}
            </div>
          ) : (
            <p className="hobbies-empty">Aucun loisir renseigné</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="hobbies-section">
      <div className="hobbies-header">
        <h2>Loisirs</h2>
      </div>
      {(data.hobbies || []).map((hobby, index) => (
        <div key={index} className="hobbies-entry-edit">
          <div className="form-group">
            <label htmlFor={`hobby-${index}`}>Loisir :</label>
            <input
              type="text"
              id={`hobby-${index}`}
              value={hobby.hobby}
              onChange={(e) => handleHobbyChange(index, e.target.value)}
              placeholder="Ex: Lecture, Musique, Sport..."
            />
          </div>
          <button type="button" onClick={() => handleDeleteHobby(index)} className="btn-delete">
            🗑 Supprimer
          </button>
        </div>
      ))}
      <div className="hobbies-button-group">
        <button type="button" onClick={handleAddHobby} className="btn-add">
          + Ajouter un loisir
        </button>
        <button type="button" className="btn-submit" onClick={onToggleEdit}>
          ✓ Soumettre
        </button>
      </div>
    </div>
  );
}
