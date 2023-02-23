import React from "react";
import "../index.css";
import NavBar from "./NavBar";

export default function HomePage() {
  return (
    <section className="bg-blue-500 w-full h-screen p-6">
      <div>
        <NavBar />
        Hello!
      </div>
    </section>
  );
}
