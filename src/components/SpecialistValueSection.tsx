import { motion } from "framer-motion";
import { Check } from "lucide-react";
import specialistImage from "@/assets/specialist-value.jpg";

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
                  <div className="w-5 h-5 rounded-full bg-enggisure-purple-light flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-enggisure-purple" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{d}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-xl overflow-hidden border border-border bg-card"
          >
            <img
              src={specialistImage}
              alt="Specialist reviewing engineering project blueprints and risk dashboard"
              className="w-full h-[320px] md:h-[420px] object-cover"
              loading="lazy"
              width={1100}
              height={900}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistValueSection;
