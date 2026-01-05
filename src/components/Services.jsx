import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";
import {
  FlaskConical,
  Truck,
  Headphones,
  FileCheck,
  Settings,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: FlaskConical,
    title: "Custom Formulation",
    description:
      "Tailored chemical formulations designed to meet your specific application requirements and performance goals.",
  },
  {
    icon: Truck,
    title: "Global Distribution",
    description:
      "Reliable worldwide logistics network ensuring timely delivery with proper handling and compliance.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description:
      "Expert guidance from our team of chemists and engineers throughout your project lifecycle.",
  },
  {
    icon: FileCheck,
    title: "Quality Assurance",
    description:
      "Rigorous testing and certification processes guarantee consistent product quality and safety.",
  },
  {
    icon: Settings,
    title: "Process Optimization",
    description:
      "Consultation services to enhance efficiency and reduce costs in your chemical processes.",
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    description:
      "Comprehensive training on safe handling, storage, and application of chemical products.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="py-24 bg-primary text-primary-foreground"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-bold text-4xl uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-3xl lg:text-3xl font-semibold text-gradient mt-4 mb-6">
            End-to-End Chemical Solutions
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Beyond products, we provide comprehensive services that add value at
            every stage of your operations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border-4 hover:border-green-600 transition-all duration-300 bg-primary-foreground/5"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl text-gradient1 font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
