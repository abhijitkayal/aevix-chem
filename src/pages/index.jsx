// import Header from "@/components/Header";
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Products from "@/components/Products";
// import Services from "@/components/Services";
// import Sustainability from "@/components/Sustainability";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
import React from "react";
import { Contact } from "lucide-react";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Products from "../components/Product";
import Services from "../components/Services";
import Sustainability from "../components/Sustainability";
import Footer from "../components/Footer";
import Connection from "../components/Contact";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Products />
      <Services />
      <Sustainability />
      <Connection />
      <Footer />
    </div>
  );
};

export default Index;
