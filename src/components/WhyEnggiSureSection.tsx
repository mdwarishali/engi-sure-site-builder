import { motion } from "framer-motion";
import { Target, Layers, ShieldCheck } from "lucide-react";

const pillars = [
  { icon: Target, label: "Specialist engineering insurance focus" },
  { icon: Layers, label: "Structured servicing & process support" },
  { icon: ShieldCheck, label: "Claims advocacy & follow-through" },
];

const WhyEnggiSureSection = () => {
  return (
    <section id="why-enggisure" className="section-padding section-tint">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight text-balance">
              EnggiSure Brings Engineering Insurance Closer to How Contractors Actually Work
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4 max-w-lg">
              EnggiSure is designed to simplify engineering insurance for contractors who operate in high-value, time-sensitive, execution-heavy environments. It combines specialist understanding of contractor risk with a more structured, practical, and support-led experience.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-lg">
              The goal is simple: help contractors move forward with better insurance clarity, stronger servicing support, and greater confidence that their project is not being protected on guesswork.
            </p>

            <p className="text-sm font-semibold text-enggisure-accent max-w-lg">
              Specialized engineering insurance support, with a more structured path from policy selection to servicing and claims assistance.
            </p>
          </motion.div>

          {/* Value pillars visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5"
          >
            {pillars.map((p, i) => (
              <div
                key={i}
                className="card-elevated flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <p.icon size={22} className="text-enggisure-accent" />
                </div>
                <span className="text-base font-medium text-foreground">{p.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyEnggiSureSection;
