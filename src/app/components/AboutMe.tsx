import Image from "next/image";
import { Mail, Phone, Download, Linkedin, Youtube } from "lucide-react";
import profilePic from "../../../public/images/photo.jpg";

export default function AboutMe() {
  return (
    <section className="bg-white py-12 px-6 md:px-20 lg:px-32 flex flex-col items-center w-full">
      {/* Image de profil */}
      <div className="flex flex-col items-center w-full md:flex-row md:items-start md:space-x-12">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <Image
            src={profilePic}
            alt="Photo de profil"
            width={200}
            height={200}
            className="rounded-full shadow-xl border border-gray-300"
          />
        </div>

        {/* Informations */}
        <div className="text-center md:text-left max-w-3xl w-full">
          <h1 className="text-4xl font-bold text-gray-900">Fono Colince</h1>
          <h2 className="text-xl font-semibold text-gray-700 mt-2">
            Étudiant en ingénierie Data et IA à l&apos;École d&apos;Ingénieurs du Littoral Côte d&apos;Opale, à la recherche d&apos;un stage ou d&apos;une alternance à partir de juin 2025.
          </h2>

          {/* Contacts */}
          <div className="mt-6 space-y-3 text-lg">
              {/* Email */}
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="text-blue-600" size={20} />
                <a href="mailto:fonocolince@gmail.com" className="text-gray-700 hover:underline">
                  fonocolince@gmail.com
                </a>
              </div>

              {/* Téléphone */}
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="text-blue-600" size={20} />
                <span className="text-gray-700">+33 6 59 15 28 04</span>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Linkedin className="text-blue-600" size={20} />
                <a href="https://www.linkedin.com/in/fono-colince-b3a111273/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">
                  LinkedIn
                </a>
              </div>

              {/* YouTube */}
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Youtube className="text-red-600" size={20} />
                <a href="https://www.youtube.com/@Coder-en-Dur" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">
                  YouTube
                </a>
              </div>
            </div>

          {/* Informations supplémentaires */}
          {/*<div className="mt-8 space-y-4 text-lg">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Briefcase className="text-blue-600" size={20} />
              <span className="text-gray-700">Formation en Data Science et IA</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Code className="text-blue-600" size={20} />
              <span className="text-gray-700">Travaille sur des modèles de Data Science et algorithmes d&apos;IA</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Users className="text-blue-600" size={20} />
              <span className="text-gray-700">Ouvert aux collaborations en Data Science et IA</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <BookOpen className="text-blue-600" size={20} />
              <span className="text-gray-700">Apprend : Reinforcement Learning et techniques avancées</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaFutbol className="text-blue-600" size={20} />
              <span className="text-gray-700">Passionné de football</span>
            </div>
          </div>*/}

          {/* Bouton Télécharger CV */}
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="/COLINCE_FONO_CV.pdf"
              download
              className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition text-lg"
            >
              <Download size={20} className="mr-2" />
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
