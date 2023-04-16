import React from "react";
import "../index.css";
import logoOneTwoKids from "@assets/onetwokids_images/logoApp/logoOneTwoKids.png";

export default function NavBar() {
  return (
    <nav className="flex flex-col border-gray-200 md:w-1/5 bg-gray-800 h-screen overflow-visible fixed">
      <div className="flex flex-col items-center mt-4 text-white">
        <img src={logoOneTwoKids} alt="Logo One Two Kids" />
        <p className="mb-8 cursor-pointer hover:text-red-400">Se connecter</p>
        <p className="mb-8 cursor-pointer hover:text-red-400">
          Créer un compte
        </p>
        <p className="mb-8 cursor-pointer hover:text-red-400">
          Apprends l'anglais avec les comptines!
        </p>
        <p className="mb-8 cursor-pointer hover:text-red-400">Les mots</p>
        <p className="mb-8 cursor-pointer hover:text-red-400">Les nombres</p>
      </div>
    </nav>
  );
}
