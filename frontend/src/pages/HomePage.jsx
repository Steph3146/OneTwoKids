import React from "react";
import "../assets/themes/index.css";
import logoOneTwoKids from "../assets/onetwokids_images/logoApp/logoOneTwoKids.png";
import NavBar from "../components/NavBar";

export default function HomePage() {
  return (
    <section className="bg-blue-500 w-screen h-screen font-[gloriahallelujah-regular]">
      <div className="fixed">
        <NavBar />
      </div>
      <div className="ml-[19vw]">
        {/* largeur de la navbar  */}
        <div className="mx-[20vw] items-center">
          <img src={logoOneTwoKids} alt="Logo OneTwoKids" />
          <p className="text-[4vw]">
            {" "}
            L'appli qui va te faire aimer l'anglais!
          </p>
        </div>
      </div>
    </section>
  );
}
