import React from 'react';
import '../styles/GeneralInfo.css';

export default function GeneralInfo({ data, setData, editMode, onToggleEdit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  if (!editMode) {
    return (
      <div className="generalinfo-section">
        <div className="generalinfo-header">
          <h2>Informations Générales</h2>
          <button 
            type="button" 
            className="btn-edit" 
            onClick={onToggleEdit}
          >
            ✎ Modifier
          </button>
        </div>
        <div className="generalinfo-display">
          {data.nom && <p><strong>Nom :</strong> {data.nom}</p>}
          {data.email && <p><strong>Email :</strong> {data.email}</p>}
          {data.telephone && <p><strong>Téléphone :</strong> {data.telephone}</p>}
          {!data.nom && !data.email && !data.telephone && (
            <p className="generalinfo-empty">Aucune information renseignée</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="generalinfo-section">
      <div className="generalinfo-header">
        <h2>Informations Générales</h2>
      </div>
      <div className="form-group">
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={data.nom || ''}
          onChange={handleChange}
          placeholder="Votre nom complet"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email || ''}
          onChange={handleChange}
          placeholder="votre.email@example.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="telephone">Téléphone :</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={data.telephone || ''}
          onChange={handleChange}
          placeholder="06 XX XX XX XX"
        />
      </div>
      <button 
        type="button" 
        className="btn-submit" 
        onClick={onToggleEdit}
      >
        ✓ Soumettre
      </button>
    </div>
  );
}
