// src/components/ProjetCard.tsx
import React from 'react';

interface ProjetCardProps {
  title: string;
  context: string;
  objectifs: string[];
  technologies: string[];
  competences: string[];
}

const ProjetCard: React.FC<ProjetCardProps> = ({
  title,
  context,
  objectifs,
  technologies,
  competences,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{context}</p>

      <h4 className="text-lg font-semibold text-gray-700 mt-4">Objectifs :</h4>
      <ul className="list-disc pl-5 text-gray-600">
        {objectifs.map((objectif, index) => (
          <li key={index}>{objectif}</li>
        ))}
      </ul>

      <h4 className="text-lg font-semibold text-gray-700 mt-4">Technologies Utilisées :</h4>
      <ul className="list-disc pl-5 text-gray-600">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <h4 className="text-lg font-semibold text-gray-700 mt-4">Compétences Acquises :</h4>
      <ul className="list-disc pl-5 text-gray-600">
        {competences.map((competence, index) => (
          <li key={index}>{competence}</li>
        ))}
      </ul>

      
    </div>
  );
};

export default ProjetCard;
