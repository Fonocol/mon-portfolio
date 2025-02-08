// src/app/page.tsx
import Image from "next/image";
import AboutMe from "./components/AboutMe";  // Import du composant AboutMe
import YoutubeCart from "./components/YoutubeCart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjetCard from './components/ProjetCard';

export default function Home() {

  const projets = [
    {
        nom: "Analyse Exploratoire des Données (EDA)",
        contexte: "Exploration et préparation des données brutes, nettoyage et formulation d'hypothèses.",
        objectifs: [
            "Comprendre la structure et la distribution des données.",
            "Identifier les relations entre les variables.",
            "Produire des visualisations."
        ],
        problemes: [
            { domaine: "Banque", description: "Identifier des schémas de fraude dans les transactions bancaires", dataset: "https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud" },
            { domaine: "Marketing", description: "Identifier les segments de clients rentables", dataset: "https://www.kaggle.com/datasets/rodsaldanha/arketing-campaign/data" }
        ],
        technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Shiny", "Streamlit", "Dash"],
        competences: [
            "Manipulation, nettoyage, et visualisation des données"
        ]
    },
    {
        nom: "A/B Testing",
        contexte: "Comparer deux versions d'un produit pour déterminer la meilleure.",
        objectifs: [
            "Mettre en place une expérimentation contrôlée pour comparer deux groupes",
            "Analyser les résultats avec des statistiques pour choisir la version gagnante"
        ],
        problemes: [
            { domaine: "Marketing", description: "Comparer la performance de deux versions d'une landing page", dataset: "https://www.kaggle.com/datasets/zhangluyuan/ab-testing" }
        ],
        technologies: ["Python", "Pandas", "Scipy", "Matplotlib", "Seaborn"],
        competences: [
            "Tests statistiques", 
            "Analyse des résultats", 
            "Visualisation pour la prise de décision"
        ]
    },
    {
        nom: "Clustering et Réduction de Dimensions",
        contexte: "Segmenter des données en groupes homogènes à l'aide de techniques de clustering.",
        objectifs: [
            "Appliquer des techniques de clustering",
            "Utiliser des techniques de réduction de dimensions pour visualiser les résultats"
        ],
        problemes: [
            { domaine: "Marketing", description: "Segmenter les clients en fonction de leurs comportements d'achat", dataset: "https://www.kaggle.com/datasets/kaushiksureshfi47/customer-segmentation" }
        ],
        technologies: ["Python", "Scikit-learn (KMeans, PCA)", "t-SNE"],
        competences: [
            "Clustering", 
            "Réduction de dimension", 
            "Visualisation interactive des clusters"
        ]
    },
    {
        nom: "Régression",
        contexte: "Prédire des valeurs continues en construisant des modèles de régression.",
        objectifs: [
            "Comparer et optimiser les modèles de régression"
        ],
        problemes: [
            { domaine: "Marketing", description: "Prédire les ventes futures", dataset: "https://www.kaggle.com/datasets/yasserh/advertising-sales-dataset/data" },
            { domaine: "Immobilier", description: "Prédire le prix de vente d'une maison", dataset: "https://www.kaggle.com/c/house-prices-advanced-regression-techniques" }
        ],
        technologies: ["Python", "Scikit-learn", "Flask/FastAPI", "Docker"],
        competences: [
            "Régression linéaire", 
            "Random Forest", 
            "XGBoost", 
            "Déploiement d'API de régression"
        ]
    },
    {
        nom: "Modélisation Prédictive avec un Classificateur",
        contexte: "Utiliser des données pour prédire des événements futurs tels que les défauts de paiement.",
        objectifs: [
            "Créer un modèle prédictif",
            "Comparer les performances de différents modèles de classification"
        ],
        problemes: [
            { domaine: "Banque", description: "Prédire les clients risquant de faire défaut sur leurs prêts", dataset: "https://www.kaggle.com/datasets/itsmesunil/bank-loan-modelling" },
            { domaine: "Santé", description: "Prédire la réadmission des patients à l’hôpital", dataset: "https://www.kaggle.com/datasets/redwankarimsony/heart-disease-data" },
            { domaine: "Télécommunications", description: "Prédire le churn des clients", dataset: "https://www.kaggle.com/datasets/blastchar/telco-customer-churn" }
        ],
        technologies: ["Python", "Scikit-learn", "Flask/FastAPI", "Docker"],
        competences: [
            "Régression logistique", 
            "SVM", 
            "Random Forest", 
            "XGBoost", 
            "Déploiement d'API prédictive"
        ]
    },
    {
        nom: "Analyse des Séries Temporelles",
        contexte: "Modélisation de données dépendantes du temps pour prédire les tendances futures.",
        objectifs: [
            "Prédire les tendances futures à partir de données temporelles"
        ],
        problemes: [
            { domaine: "Banque", description: "Prédire le volume des transactions bancaires", dataset: "https://www.kaggle.com/datasets/mczielinski/bitcoin-historical-data" }
        ],
        technologies: ["Python", "Statsmodels (ARIMA, SARIMA)", "Prophet", "XGBoost", "LSTM", "Flask/FastAPI"],
        competences: [
            "Prévision des séries temporelles avec ARIMA, LSTM",
            "Déploiement d'API de prévision"
        ]
    }
];


  return (
    
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">

      {/* Header */}
      <Header />

      {/* Section AboutMe (Présentation) */}
      <AboutMe />
    

      {/* Section Projets */}
      <section className="container mx-auto px-6 py-12" id="youtube">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Ma Chaîne YouTube</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <YoutubeCart
            title="Régression Linéaire de Zéro : Implémentation et Explications Complètes "
            description="Les bases théoriques de la régression linéaire L'implémentation pas-à-pas en Python Le calcul du gradient et de la descente de gradient Comment optimiser les prédictions et minimiser l’erreur"
            videoUrl="https://youtu.be/le5BeCwWz18?si=FF1avj6l7lfWr80E"
            technologies={["Python", "Pandas", "Matplotlib", "Seaborn", "Mathematique","théoriques"]}

          />
          <YoutubeCart
            title="Ridge Regression from Scratch : Implémentation de A à Z"
            description="Comment la régularisation L2 fonctionne pour réduire l'overfitting et contrôler la complexité du modèle. Nous construisons chaque étape en Python, en utilisant la descente de gradient pour ajuster les paramètres et optimiser le modèle"
            videoUrl="https://youtu.be/3fBMSfDTDf4?si=-PwM0T2J0hjf1QTr"
            technologies={["Python", "Pandas", "Matplotlib", "Mathematique"]}
          />

          <YoutubeCart
            title="Implémenter la Dérivée d'une Image en Python : Pas à Pas"
            description="Dans cette vidéo, nous mettons en pratique la théorie des dérivées d'images à l'aide de Python et de bibliothèques populaires comme NumPy, SciPy et Matplotlib"
            videoUrl="https://youtu.be/I2AjbQcElEQ?si=BU6dL_33hmsVLLb7"
            technologies={["Python", "Pandas", "Matplotlib", "Mathematique"]}

          />
          <YoutubeCart
            title="Algorithme Minimax Alpha-Bêta: Implémentation et Démonstration"
            description=" Dans cette vidéo, je te montre comment coder from scratch un jeu stratégique inspiré du traditionnel Mefon, une variante du Nine Men's Morris, en utilisant un algorithme Minimax optimisé par Alpha-Bêta."
            videoUrl="https://youtu.be/0rXXn1D8neU?si=n_zJGTrS_NTNJgR-"
            technologies={["Python","POO"]}
          />

          <YoutubeCart
            title="Projet de Classification d'Images avec un Modèle CNN"
            description="Dans cette série, nous allons explorer toutes les étapes nécessaires pour construire un modèle de classification d'images basé sur un réseau de neurones convolutionnels (CNN)."
            videoUrl="https://youtu.be/r0OfjIqq50g?si=UK3fYvPJA-1Z-KjD"
            technologies={["Python", "Pandas", "Matplotlib", "TensorFlow", "numpy","CNN"]}

          />
          <YoutubeCart
            title="Créer un Agent IA : Démo et Introduction à ma Série sur l'Apprentissage par Renforcement "
            description="Dans cette vidéo, je te présente une démo captivante de mon agent d'intelligence artificielle, conçu avec l'apprentissage par renforcement ! Cet agent apprend à naviguer dans un terrain complexe, éviter des obstacles et atteindre ses objectifs grâce à un modèle d'IA entraîné avec PyTorch."
            videoUrl="https://youtu.be/-w6cwyo5EA4?si=bSwkHSZIUcRWg0wb"
            technologies={["Python", "PyTorch", "pygame", "nn",'apprentissage par renforcement']}
          />

          <YoutubeCart
            title="Projets Machine Learning : De la Régression aux API Flask"
            description="Dans cette vidéo, je vous présente un résumé rapide de mes projets en machine learning et intelligence artificielle ! "
            videoUrl="https://youtu.be/Px94zrbCogc?si=8In9gLdR_P1F5qZa"
            technologies={["Python", "Pandas", "Matplotlib", "Seaborn", "Streamlit",'API','Flask']}

          />
          <YoutubeCart
            title="Introduction à la Vraisemblance et Régression Logistique Bernoulli"
            description="Nous plongeons dans les bases fondamentales de la vraisemblance et de la régression logistique binaire, en expliquant les concepts mathématiques sous-jacents, les formules et leur importance dans le développement de modèles de machine learning. "
            videoUrl="https://youtu.be/now_H8fmM9I?si=T7p2_k5lZfgLWHfG"
            technologies={["Python", "Vraisemblance", "Régression"]}
          />

          <YoutubeCart
            title="Créer Images Réalistes avec GANs (Generative Adversarial Networks) | Introduction au Deep Learning"
            description="Dans cette vidéo, je vous introduis aux Generative Adversarial Networks (GANs), une technologie révolutionnaire utilisée pour générer des images réalistes à partir de bruit aléatoire."
            videoUrl="https://youtu.be/Jq67smO3eDI?si=ZkOt0-GRlCEMMzTP"
            technologies={["Python", "GANs", "Pandas", "Matplotlib", "TensorFlow", "numpy",]}
          />
        </div>
      </section>


      
      {/* Section Projets */}
      <section className="container mx-auto px-6 py-12" id="projets">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Mes Projets</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projets.map((projet, index) => (
                  <ProjetCard
                    key={index}
                    title={projet.nom}
                    context={projet.contexte}
                    objectifs={projet.objectifs}
                    technologies={projet.technologies}
                    competences={projet.competences}
                  />
                ))}
              </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}


