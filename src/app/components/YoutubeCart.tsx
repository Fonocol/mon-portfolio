"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface ProjectProps {
  title: string;
  description: string;
  videoUrl: string;
  technologies: string[];
}

const YoutubeCart: React.FC<ProjectProps> = ({ title, description, videoUrl, technologies }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>

      {/* Vidéo */}
      <div className="mt-4 rounded-lg overflow-hidden border border-gray-300">
        <ReactPlayer url={videoUrl} width="100%" height="200px" />
      </div>

      {/* Technologies */}
      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-700">Technologies Utilisées :</h4>
        <ul className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <li key={index} className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-md">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      
    </div>
  );
};

export default YoutubeCart;
