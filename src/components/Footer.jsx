import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";
import React from "react";

const footerLinks = {
  products: [
    { label: "Industrial Chemicals", href: "#" },
    { label: "Specialty Fluids", href: "#" },
    { label: "Performance Additives", href: "#" },
    { label: "Green Chemistry", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "News & Media", href: "#" },
    { label: "Investor Relations", href: "#" },
  ],
  resources: [
    { label: "Product Catalog", href: "#" },
    { label: "Safety Data Sheets", href: "#" },
    { label: "Technical Documents", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Compliance", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-semibold">Aevix</span>
            </div>

            <p className="text-primary-foreground/70 text-sm mb-6 max-w-xs">
              Pioneering sustainable chemical solutions for a better tomorrow.
              Trusted by industries worldwide since 1974.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 capitalize">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Aevix Chemical Company. All rights reserved.
          </p>
          <div className="flex gap-6 text-primary-foreground/60 text-sm">
            <span>ISO 9001:2015 Certified</span>
            <span>ISO 14001:2015 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
