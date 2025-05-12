import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";

function PageFooter() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10 w-full">
      <div className="flex justify-center items-center space-x-6">
        <a
          href="https://github.com/RepoioSmith"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.instagram.com/marcoleon._/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <FaInstagram size={24} />
        </a>
      </div>
      <p className="text-center text-sm mt-2">&copy; 2025 DnD App. Todos los derechos reservados.</p>
    </footer>
  );
}

export default PageFooter;
