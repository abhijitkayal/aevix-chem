import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";
import {
  Leaf,
  Recycle,
  Wind,
  Droplet,
  Sun,
  TreePine,
} from "lucide-react";

const initiatives = [
  {
    icon: Recycle,
    label: "Zero Waste Goal",
    value: "85%",
    description: "Waste reduction achieved",
  },
  {
    icon: Wind,
    label: "Carbon Neutral",
    value: "2030",
    description: "Target year",
  },
  {
    icon: Droplet,
    label: "Water Recycled",
    value: "90%",
    description: "In manufacturing",
  },
  {
    icon: Sun,
    label: "Renewable Energy",
    value: "60%",
    description: "Of total power use",
  },
];

const Sustainability = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sustainability" className="py-24 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-8 rounded-full gradient-accent opacity-20" />

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 rounded-full border-2 border-dashed border-accent/30"
                />
                <div className="absolute w-24 h-24 rounded-full gradient-accent flex items-center justify-center">
                  <Leaf className="w-12 h-12 text-accent-foreground" />
                </div>
              </div>

              {/* Orbiting Icons */}
              {[TreePine, Recycle, Wind, Droplet].map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="absolute w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center"
                  style={{
                    top: `${50 + 40 * Math.sin((index * Math.PI) / 2)}%`,
                    left: `${50 + 40 * Math.cos((index * Math.PI) / 2)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Icon className="w-6 h-6 text-accent" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Sustainability
            </span> */}

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mt-4 mb-6">
              Chemistry in Harmony with{" "}
              <span className="text-gradient">Nature</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Aevix, sustainability isn't just a goal—it's woven into our DNA.
              We're pioneering green chemistry practices that minimize
              environmental impact while maximizing performance and value.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {initiatives.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-card p-5 rounded-xl shadow-card"
                >
                  <item.icon className="w-8 h-8 text-accent mb-3" />
                  <div className="text-2xl font-bold text-foreground">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
