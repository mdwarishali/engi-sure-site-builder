import { motion } from "framer-motion";
import { FileText, RefreshCw, Bell, BarChart3, Copy } from "lucide-react";
import servicingImage from "@/assets/servicing-support.jpg";

const servicingFeatures = [
  { icon: FileText, label: "Endorsement support" },
  { icon: RefreshCw, label: "Extension request support" },
  { icon: Bell, label: "Claim intimation" },
  { icon: BarChart3, label: "Claim tracking" },
  { icon: Copy, label: "Policy copy access" },
];

const PolicyServicingSection = () => {
  return (
    <section className="section-padding section-tint">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight text-balance">
              Insurance Support Should Continue After the Policy Is Issued
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-lg">
              For contractors, policy issuance is only one part of the insurance journey. Projects evolve, timelines shift, values change, and servicing needs continue throughout execution. EnggiSure is designed to support practical servicing requirements so contractors can manage key actions with greater clarity and less friction.
            </p>

            <div className="space-y-3 mb-6">
              {servicingFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center shrink-0">
                    <f.icon size={16} className="text-enggisure-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{f.label}</span>
                </div>
              ))}
            </div>

            <p className="text-sm font-semibold text-enggisure-accent">
              The objective is not just policy placement. It is smoother policy support during the life of the project.
            </p>
          </motion.div>

          {/* Servicing illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-xl overflow-hidden border border-border bg-card"
          >
            <img
              src={servicingImage}
              alt="Contractor and relationship manager coordinating policy servicing tasks"
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

export default PolicyServicingSection;
