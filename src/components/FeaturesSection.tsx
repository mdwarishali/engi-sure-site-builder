import { motion } from "framer-motion";
import { Focus, Upload, Eye, UserCheck, Settings, Scale } from "lucide-react";

const features = [
  {
    icon: Focus,
    title: "Specialized Engineering Insurance Focus",
    desc: "EnggiSure is built around contractor and project risk, not generic insurance journeys. This makes policy guidance more relevant to execution realities.",
  },
  {
    icon: Upload,
    title: "Faster, More Structured Onboarding",
    desc: "Upload key project information such as the LOA, let the system capture important details, and move faster toward the right insurance journey.",
  },
  {
    icon: Eye,
    title: "Better Risk Understanding",
    desc: "Coverage decisions should reflect actual project exposure, not broad assumptions. EnggiSure is designed to reduce confusion and help avoid weak coverage alignment.",
  },
  {
    icon: UserCheck,
    title: "Dedicated RM Support",
    desc: "Where specialist help is needed, contractors get access to dedicated support for coordination, servicing assistance, and issue handling.",
  },
  {
    icon: Settings,
    title: "Servicing Support Beyond Policy Issuance",
    desc: "Insurance is not a one-time event. EnggiSure supports ongoing needs such as endorsement assistance, extension requests, claim intimation, claim tracking, and policy copy access.",
  },
  {
    icon: Scale,
    title: "Stronger Claims Support Philosophy",
    desc: "EnggiSure does not stop at policy placement. We work to support clients through the claims process and help them pursue rightful claim settlement with stronger coordination and advocacy.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
            Why Contractors Choose EnggiSure
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="card-premium"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                <f.icon size={20} className="text-enggisure-accent" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
