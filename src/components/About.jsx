import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Globe, TrendingUp } from "lucide-react";
import React from "react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in everything we do, from research to delivery.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with clients to develop tailored solutions that exceed expectations.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Serving industries worldwide with localized expertise and global capabilities.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "Continuously investing in R&D to pioneer breakthrough chemical technologies.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-bold text-xl uppercase tracking-wider">
              About Aevix
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Shaping the Future of{" "}
              <span className="text-gradient">Chemical Innovation</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For over five decades, Aevix Chemical has been at the forefront of
              chemical manufacturing and innovation. We combine cutting-edge
              research with sustainable practices to deliver solutions that
              power industries around the globe.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our commitment to quality, safety, and environmental responsibility
              sets us apart as a trusted partner for businesses seeking reliable
              chemical solutions.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-16 h-1 bg-accent rounded-full" />
              <span className="text-foreground font-medium">
                ISO 9001:2015 Certified
              </span>
            </div>
          </motion.div>

          {/* Right Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                }}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent-foreground" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
