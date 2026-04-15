import { motion } from "framer-motion";
import { Check } from "lucide-react";

const differentiators = [
  "More aligned to project-based contractor risk",
  "Built around engineering insurance realities",
  "Structured for servicing support beyond booking",
  "Supported by specialist thinking and practical coordination",
];

const SpecialistValueSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight text-balance">
              Why a Specialist Approach Matters in Engineering Insurance
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Engineering insurance decisions cannot always be made with generic logic. Project type, execution structure, duration, contractor responsibility, equipment exposure, labour risk, and site conditions all influence what good coverage should look like. EnggiSure is designed for this more specialized environment.
            </p>

            <div className="space-y-3">
              {differentiators.map((d, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-enggisure-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-enggisure-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{d}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Abstract visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-accent rounded-xl p-6 flex flex-col items-center justify-center h-40">
                <span className="text-3xl font-bold text-primary font-heading">100%</span>
                <span className="text-xs text-muted-foreground mt-1 text-center">Engineering Insurance Focused</span>
              </div>
              <div className="bg-enggisure-accent-light rounded-xl p-6 flex flex-col items-center justify-center h-40">
                <span className="text-3xl font-bold text-primary font-heading">24/7</span>
                <span className="text-xs text-muted-foreground mt-1 text-center">Servicing Support Access</span>
              </div>
              <div className="bg-enggisure-accent-light rounded-xl p-6 flex flex-col items-center justify-center h-40">
                <span className="text-3xl font-bold text-primary font-heading">End-to-End</span>
                <span className="text-xs text-muted-foreground mt-1 text-center">From Policy to Claims</span>
              </div>
              <div className="bg-accent rounded-xl p-6 flex flex-col items-center justify-center h-40">
                <span className="text-3xl font-bold text-primary font-heading">RM-Led</span>
                <span className="text-xs text-muted-foreground mt-1 text-center">Dedicated Support Model</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistValueSection;
