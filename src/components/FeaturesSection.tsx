import { motion } from "framer-motion";
import { Focus, Upload, Eye, UserCheck, Settings, Scale } from "lucide-react";
import featuresImage from "@/assets/features-process.jpg";

const features = [
  {
    icon: Focus,
    title: "Specialized Engineering Insurance Focus",
    desc: "Built around contractor and project risk, not generic insurance journeys, so policy guidance stays relevant to execution realities.",
  },
  {
    icon: Upload,
    title: "Faster, More Structured Onboarding",
    desc: "Upload key project information such as the LOA, let the system capture important details, and move faster toward the right insurance journey.",
  },
  {
    icon: Eye,
    title: "Better Risk Understanding",
    desc: "Coverage decisions should reflect actual project exposure, not broad assumptions. Designed to reduce confusion and avoid weak coverage alignment.",
  },
  {
    icon: UserCheck,
    title: "Dedicated RM Support",
    desc: "Where specialist help is needed, contractors get access to dedicated support for coordination, servicing, and issue handling.",
  },
  {
    icon: Settings,
    title: "Servicing Beyond Policy Issuance",
    desc: "Insurance is not a one-time event. Support continues for endorsements, extensions, claim intimation, tracking, and policy copy access.",
  },
  {
    icon: Scale,
    title: "Stronger Claims Support Philosophy",
    desc: "We work to support clients through the claims process and help them pursue rightful claim settlement with stronger coordination and advocacy.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-12">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-enggisure-purple mb-3">
              Why Contractors Choose EnggiSure
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance leading-tight">
              Built Around the Way Contractors Actually Work
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              From onboarding to claims, every part of the journey is structured around project realities — not generic insurance flows.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-xl overflow-hidden border border-border bg-enggisure-light">
              <img
                src={featuresImage}
                alt="Engineering insurance process flow from LOA to quotation"
                className="w-full h-[220px] md:h-[260px] object-cover"
                loading="lazy"
                width={1100}
                height={900}
              />
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="card-premium h-full flex flex-col"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-10 h-10 rounded-lg bg-enggisure-purple-light flex items-center justify-center mb-4">
                <f.icon size={20} className="text-enggisure-purple" />
              </div>
              <h3 className="text-base font-semibold text-primary mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
