import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-teal-50/30 to-emerald-50/40 backdrop-blur-md border-b border-border/50 shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">
                A
              </span>
            </div>
            <span className="text-2xl font-semibold text-foreground">
              Aevix
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-xl font-medium transition-all px-4 py-2 rounded-xl relative ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={
                    isActive
                      ? {
                          background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, #0d9488, #059669, #0891b2) border-box",
                          border: "2px solid transparent",
                        }
                      : {}
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm" className="bg-primary">
              Get Quote
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-border"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 px-3 text-lg font-medium rounded-xl ${
                    isActive
                      ? "text-foreground"
                      : "text-foreground hover:text-accent"
                  }`}
                  style={
                    isActive
                      ? {
                          background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, #0d9488, #059669, #0891b2) border-box",
                          border: "2px solid transparent",
                        }
                      : {}
                  }
                >
                  {item.label}
                </a>
              );
            })}

            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="outline" className="w-full">
                Login
              </Button>
              <Button className="w-full bg-primary">
                Get Quote
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
