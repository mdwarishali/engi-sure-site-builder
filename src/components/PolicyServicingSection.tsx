import { motion } from "framer-motion";
import { FileText, RefreshCw, Bell, BarChart3, Copy } from "lucide-react";

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

          {/* Portal mockup placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card rounded-xl border border-border shadow-lg overflow-hidden"
          >
            <div className="bg-primary/5 px-6 py-3 border-b border-border flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-enggisure-accent/30" />
              <div className="w-3 h-3 rounded-full bg-enggisure-steel/20" />
              <div className="w-3 h-3 rounded-full bg-enggisure-steel/20" />
              <span className="ml-3 text-xs text-muted-foreground font-medium">Policy Dashboard</span>
            </div>
            <div className="p-6 space-y-4">
              {/* Simulated UI rows */}
              <div className="flex items-center justify-between p-3 bg-accent/50 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-enggisure-accent/15 flex items-center justify-center">
                    <FileText size={14} className="text-enggisure-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">CAR Policy — NH-48 Expansion</div>
                    <div className="text-[11px] text-muted-foreground">Active · Expires Dec 2026</div>
                  </div>
                </div>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-enggisure-accent/10 text-enggisure-accent">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-accent/50 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-enggisure-accent/15 flex items-center justify-center">
                    <RefreshCw size={14} className="text-enggisure-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">Extension Request — Solar Plant Phase 2</div>
                    <div className="text-[11px] text-muted-foreground">Submitted · Under review</div>
                  </div>
                </div>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-enggisure-warm text-foreground">Pending</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-accent/50 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-enggisure-accent/15 flex items-center justify-center">
                    <Bell size={14} className="text-enggisure-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">Claim Intimation — Metro Line 4</div>
                    <div className="text-[11px] text-muted-foreground">Initiated · Documentation pending</div>
                  </div>
                </div>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-enggisure-accent/10 text-enggisure-accent">In Progress</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PolicyServicingSection;
