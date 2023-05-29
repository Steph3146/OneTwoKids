import React from "react";
import "../assets/themes/index.css";
import { Link } from "react-router-dom";
import logoOneTwoKids from "../assets/onetwokids_images/logoApp/logoOneTwoKids.png";

export default function NavBar() {
  return (
    <nav className=" flex flex-col border-gray-200 w-[19vw] bg-gray-800 h-screen overflow-visible fixed">
      <div className="flex flex-col font-gloriahallelujah-regular items-center mt-4 text-white">
        <img src={logoOneTwoKids} alt="Logo One Two Kids" />
        <Link to="/">
          <button
            type="button"
            className="mb-8 cursor-pointer hover:text-red-400"
          >
            Accueil/Welcome page
          </button>
        </Link>
        <Link to="/login">
          <button
            type="button"
            className="mb-8 cursor-pointer hover:text-red-400"
          >
            Se connecter/Login
          </button>
        </Link>
        <Link to="/register">
          <button
            type="button"
            className="mb-8 cursor-pointer hover:text-red-400"
          >
            Créer un compte/Create your account
          </button>
        </Link>
        <Link to="/videos">
          <button
            type="button"
            className="mb-8 cursor-pointer hover:text-red-400"
          >
            Apprends l'anglais avec des comptines! <br />
            Learn English with nursery rhymes!
          </button>
        </Link>
        <Link to="/words">
          <button
            type="button"
            className="mb-8 cursor-pointer hover:text-red-400"
          >
            Les mots/The words
          </button>
        </Link>
        <Link to="/numbers">
          <button
            type="button"
            className="mb-8 cursor-pointer hover:text-red-400"
          >
            Les nombres/The numbers
          </button>
        </Link>
      </div>
    </nav>
  );
}
