import React from 'react';
import '../styles/Skills.css';

export default function Skills({ data, setData, editMode, onToggleEdit }) {
  const handleAddSkill = () => {
    setData({
      ...data,
      skills: [...(data.skills || []), { skill: '', level: 'Intermédiaire' }]
    });
  };

  const handleSkillChange = (index, field, value) => {
    const newSkills = [...(data.skills || [])];
    newSkills[index] = { ...newSkills[index], [field]: value };
    setData({ ...data, skills: newSkills });
  };

  const handleDeleteSkill = (index) => {
    setData({
      ...data,
      skills: data.skills.filter((_, i) => i !== index)
    });
  };

  if (!editMode) {
    return (
      <div className="skills-section">
        <div className="skills-header">
          <h2>Compétences Informatiques</h2>
          <button 
            type="button" 
            className="btn-edit" 
            onClick={onToggleEdit}
          >
            ✎ Modifier
          </button>
        </div>
        <div className="skills-display">
          {data.skills && data.skills.length > 0 ? (
            data.skills.map((skill, index) => (
              <div key={index} className="skills-entry-display">
                <p><strong>Compétence :</strong> {skill.skill}</p>
                <p><strong>Niveau :</strong> {skill.level}</p>
              </div>
            ))
          ) : (
            <p className="skills-empty">Aucune compétence renseignée</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="skills-section">
      <div className="skills-header">
        <h2>Compétences Informatiques</h2>
      </div>
      {(data.skills || []).map((skill, index) => (
        <div key={index} className="skills-entry-edit">
          <div className="form-group">
            <label htmlFor={`skill-${index}`}>Compétence :</label>
            <input
              type="text"
              id={`skill-${index}`}
              value={skill.skill}
              onChange={(e) => handleSkillChange(index, 'skill', e.target.value)}
              placeholder="Ex: JavaScript, React, Python..."
            />
          </div>
          <div className="form-group">
            <label htmlFor={`level-${index}`}>Niveau :</label>
            <select
              id={`level-${index}`}
              value={skill.level}
              onChange={(e) => handleSkillChange(index, 'level', e.target.value)}
            >
              <option>Débutant</option>
              <option>Intermédiaire</option>
              <option>Avancé</option>
              <option>Expert</option>
            </select>
          </div>
          <button type="button" onClick={() => handleDeleteSkill(index)} className="btn-delete">
            🗑 Supprimer
          </button>
        </div>
      ))}
      <div className="skills-button-group">
        <button type="button" onClick={handleAddSkill} className="btn-add">
          + Ajouter une compétence
        </button>
        <button type="button" className="btn-submit" onClick={onToggleEdit}>
          ✓ Soumettre
        </button>
      </div>
    </div>
  );
}
