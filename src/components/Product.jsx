import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";
import {
  Beaker,
  Droplets,
  Zap,
  Factory,
  Sparkles,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Beaker,
    title: "Industrial Chemicals",
    description:
      "High-purity chemicals for manufacturing, processing, and industrial applications.",
    items: ["Solvents", "Acids & Bases", "Catalysts"],
  },
  {
    icon: Droplets,
    title: "Specialty Fluids",
    description:
      "Advanced fluid solutions for precision applications and high-performance systems.",
    items: ["Hydraulic Fluids", "Heat Transfer", "Lubricants"],
  },
  {
    icon: Zap,
    title: "Performance Additives",
    description:
      "Enhance product properties with our cutting-edge additive technologies.",
    items: ["Stabilizers", "Antioxidants", "Plasticizers"],
  },
  {
    icon: Factory,
    title: "Process Chemicals",
    description:
      "Optimize your manufacturing processes with our specialized chemical solutions.",
    items: ["Surfactants", "Emulsifiers", "Coagulants"],
  },
  {
    icon: Sparkles,
    title: "Coating Solutions",
    description:
      "Protective and decorative coating chemicals for diverse industries.",
    items: ["Resins", "Pigments", "Hardeners"],
  },
  {
    icon: Leaf,
    title: "Green Chemistry",
    description:
      "Environmentally sustainable alternatives for eco-conscious applications.",
    items: ["Bio-based", "Biodegradable", "Low-VOC"],
  },
];

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-bold text-3xl uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-3xl md:text-2xl lg:text-3xl font-semibold text-gradient mt-4 mb-6">
            Comprehensive Chemical Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From industrial-grade chemicals to specialized formulations, we offer
            a complete range of products designed to meet the most demanding
            requirements.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center mb-6 transition-colors">
                <product.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>

              <h3 className="text-xl font-semibold text-gradient1 mb-3">
                {product.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {product.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button size="lg" className="bg-primary hover:bg-navy-light">
            View Full Product Catalog
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
