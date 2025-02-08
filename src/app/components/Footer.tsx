export default function Footer() {
  return (
    <div className="bg-gray-900 text-gray-300 text-center p-6 mt-12">
      <p>&copy; {new Date().getFullYear()} Fono Colince</p>
      <p className="mt-2">Fait avec 💓 pour vous</p>
      <p className="mt-2">
        Connecte-toi avec moi sur{" "}
        <a
          href="https://www.linkedin.com/in/fono-colince-b3a111273/"
          className="text-gray-400 hover:text-white transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}
