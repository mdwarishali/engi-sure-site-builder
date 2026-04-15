import { motion } from "framer-motion";
import { HardHat, Wrench, Users, FileCheck, Cog, Zap, Monitor, Gauge } from "lucide-react";

const primaryProducts = [
  { icon: HardHat, title: "Contractors' All Risks (CAR)", desc: "For construction projects requiring broader protection against accidental loss or damage during execution." },
  { icon: Wrench, title: "Erection All Risks (EAR)", desc: "For erection, installation, and related engineering works where equipment, assembly, and testing phases create critical exposure." },
  { icon: Users, title: "Workmen Compensation", desc: "For labour-related liability support where worker risk and statutory exposure need careful handling." },
  { icon: FileCheck, title: "Surety Bond & Performance Guarantee", desc: "For project and contractual requirements where financial commitment and performance backing are essential." },
];

const secondaryProducts = [
  { icon: Cog, title: "Contractors' Plant & Machinery (CPM)", desc: "For project machinery and equipment exposed to site-level operational risks." },
  { icon: Zap, title: "Machinery Breakdown", desc: "For insured equipment vulnerable to internal mechanical or electrical breakdown." },
  { icon: Monitor, title: "Electronic Equipment Insurance", desc: "For valuable electronic systems and equipment that need dedicated protection." },
  { icon: Gauge, title: "Boiler & Pressure Plant", desc: "For high-value boiler and pressure-related risks requiring more specific coverage treatment." },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding section-tint">
      <div className="container-content">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
            Engineering Insurance Solutions for Contractor-Led Projects
          </h2>
          <p className="text-base text-muted-foreground">
            EnggiSure focuses on project-linked insurance needs commonly relevant to contractors, infrastructure execution, and engineering risk.
          </p>
        </motion.div>

        {/* Primary */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {primaryProducts.map((p, i) => (
            <motion.div
              key={i}
              className="card-elevated border-l-4 border-l-enggisure-accent"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <p.icon size={20} className="text-enggisure-accent" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {secondaryProducts.map((p, i) => (
            <motion.div
              key={i}
              className="card-premium"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <p.icon size={18} className="text-enggisure-steel mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-1">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The right policy depends on the project, scope, exposure, and execution model. EnggiSure helps align coverage more carefully to real project needs.
        </motion.p>
      </div>
    </section>
  );
};

export default ProductsSection;
