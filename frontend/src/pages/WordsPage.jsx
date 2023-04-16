import React from "react";
import NavBar from "../components/NavBar";

export default function WordsPage() {
  return (
    <section className="bg-blue-500 w-screen h-screen">
      <div className="">
        <NavBar />
      </div>
      <div className="ml-[22vw]">
        <p>Les mots/The Words</p>
      </div>
    </section>
  );
}
