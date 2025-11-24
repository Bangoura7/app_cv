import React from 'react';

export default function GeneralInfo({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="section">
      <h2>Informations Générales</h2>
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
    </div>
  );
}
