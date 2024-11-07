import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";

export default function home(){
  return (
  <div>
    <Header />
    <main>
       <Hero /> 
    </main>
  </div>
  );
  }