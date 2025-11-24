import React from 'react';
import '../styles/References.css';

export default function References({ data, setData, editMode, onToggleEdit }) {
  const handleAddReference = () => {
    setData({
      ...data,
      references: [...(data.references || []), { name: '', position: '', contact: '' }]
    });
  };

  const handleReferenceChange = (index, field, value) => {
    const newReferences = [...(data.references || [])];
    newReferences[index] = { ...newReferences[index], [field]: value };
    setData({ ...data, references: newReferences });
  };

  const handleDeleteReference = (index) => {
    setData({
      ...data,
      references: data.references.filter((_, i) => i !== index)
    });
  };

  if (!editMode) {
    return (
      <div className="references-section">
        <div className="references-header">
          <h2>Références</h2>
          <button 
            type="button" 
            className="btn-edit" 
            onClick={onToggleEdit}
          >
            ✎ Modifier
          </button>
        </div>
        <div className="references-display">
          {data.references && data.references.length > 0 ? (
            data.references.map((ref, index) => (
              <div key={index} className="references-entry-display">
                {ref.name && <p><strong>Nom :</strong> {ref.name}</p>}
                {ref.position && <p><strong>Poste :</strong> {ref.position}</p>}
                {ref.contact && <p><strong>Contact :</strong> {ref.contact}</p>}
              </div>
            ))
          ) : (
            <p className="references-empty">Aucune référence renseignée</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="references-section">
      <div className="references-header">
        <h2>Références</h2>
      </div>
      {(data.references || []).map((ref, index) => (
        <div key={index} className="references-entry-edit">
          <div className="form-group">
            <label htmlFor={`ref-name-${index}`}>Nom :</label>
            <input
              type="text"
              id={`ref-name-${index}`}
              value={ref.name}
              onChange={(e) => handleReferenceChange(index, 'name', e.target.value)}
              placeholder="Nom complet"
            />
          </div>
          <div className="form-group">
            <label htmlFor={`ref-position-${index}`}>Poste :</label>
            <input
              type="text"
              id={`ref-position-${index}`}
              value={ref.position}
              onChange={(e) => handleReferenceChange(index, 'position', e.target.value)}
              placeholder="Ex: Manager, Directeur..."
            />
          </div>
          <div className="form-group">
            <label htmlFor={`ref-contact-${index}`}>Contact :</label>
            <input
              type="text"
              id={`ref-contact-${index}`}
              value={ref.contact}
              onChange={(e) => handleReferenceChange(index, 'contact', e.target.value)}
              placeholder="Email ou téléphone"
            />
          </div>
          <button type="button" onClick={() => handleDeleteReference(index)} className="btn-delete">
            🗑 Supprimer
          </button>
        </div>
      ))}
      <div className="references-button-group">
        <button type="button" onClick={handleAddReference} className="btn-add">
          + Ajouter une référence
        </button>
        <button type="button" className="btn-submit" onClick={onToggleEdit}>
          ✓ Soumettre
        </button>
      </div>
    </div>
  );
}
