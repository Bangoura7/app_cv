import React from 'react';
import '../styles/CVPreview.css';

export default function CVPreview({ data }) {
  return (
    <div className="cv-preview">
      <div className="cv-header">
        <div className="cv-header-content">
          {data.profilePhoto && (
            <img src={data.profilePhoto} alt="Profile" className="cv-profile-photo" />
          )}
          <div className="cv-header-text">
            <h1>{data.nom || 'Votre Nom'}</h1>
            <p className="cv-contact-info">
              {data.email && <span>{data.email}</span>}
              {data.email && data.telephone && <span> • </span>}
              {data.telephone && <span>{data.telephone}</span>}
            </p>
          </div>
        </div>
      </div>

      {data.education && data.education.length > 0 && (
        <div className="cv-section">
          <h2>Parcours Scolaire</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="cv-entry">
              <div className="cv-entry-header">
                <h3>{edu.diplome}</h3>
                <span className="cv-dates">
                  {edu.dateDebut && edu.dateDebut} {edu.dateDebut && edu.dateFin && ' - '} {edu.dateFin && edu.dateFin}
                </span>
              </div>
              <p className="cv-company">{edu.etablissement}</p>
            </div>
          ))}
        </div>
      )}

      {data.experience && data.experience.length > 0 && (
        <div className="cv-section">
          <h2>Expérience Professionnelle</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="cv-entry">
              <div className="cv-entry-header">
                <h3>{exp.poste}</h3>
                <span className="cv-dates">
                  {exp.dateDebut && exp.dateDebut} {exp.dateDebut && exp.dateFin && ' - '} {exp.dateFin && exp.dateFin}
                </span>
              </div>
              <p className="cv-company">{exp.entreprise}</p>
              <p className="cv-description">{exp.responsabilites}</p>
            </div>
          ))}
        </div>
      )}

      {data.skills && data.skills.length > 0 && (
        <div className="cv-section">
          <h2>Compétences Informatiques</h2>
          {data.skills.map((skill, index) => (
            <div key={index} className="cv-entry">
              <div className="cv-entry-header">
                <h3>{skill.skill}</h3>
                <span className="cv-level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {data.languages && data.languages.length > 0 && (
        <div className="cv-section">
          <h2>Langues</h2>
          {data.languages.map((lang, index) => (
            <div key={index} className="cv-entry">
              <div className="cv-entry-header">
                <h3>{lang.language}</h3>
                <span className="cv-level">{lang.level}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {data.hobbies && data.hobbies.length > 0 && (
        <div className="cv-section">
          <h2>Loisirs</h2>
          <div className="cv-hobbies-list">
            {data.hobbies.map((hobby, index) => (
              <span key={index} className="cv-hobby-tag">{hobby.hobby}</span>
            ))}
          </div>
        </div>
      )}

      {data.references && data.references.length > 0 && (
        <div className="cv-section">
          <h2>Références</h2>
          {data.references.map((ref, index) => (
            <div key={index} className="cv-entry">
              <h3>{ref.name}</h3>
              <p className="cv-company">{ref.position}</p>
              <p className="cv-description">{ref.contact}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
