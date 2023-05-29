import React from "react";
import "../assets/themes/index.css";
import NavBar from "../components/NavBar";

export default function HomePage() {
  return (
    <section className="bg-blue-500 w-screen h-screen">
      <div className="fixed">
        <NavBar />
      </div>
    </section>
  );
}
