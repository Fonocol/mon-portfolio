import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-300 py-4 shadow-md"> 
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          Fono Colince
        </div>
        <div className="flex space-x-8">
          <Link
            href="#about"
            className="hover:text-white transition duration-300"
          >
            À propos
          </Link>
          <Link
            href="#projets"
            className="hover:text-white transition duration-300"
          >
            Projets
          </Link>
          <Link
            href="#youtube"
            className="hover:text-white transition duration-300"
          >
            YouTube
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
