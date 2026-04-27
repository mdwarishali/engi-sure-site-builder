import { motion } from "framer-motion";
import { Target, Layers, ShieldCheck } from "lucide-react";
import whyImage from "@/assets/why-enggisure.jpg";

const pillars = [
  {
    icon: Target,
    title: "Specialist engineering insurance focus",
    description:
      "Dedicated focus on contractor and project risk — not a generic insurance desk handling engineering policies on the side.",
  },
  {
    icon: Layers,
    title: "Structured servicing & process support",
    description:
      "A defined process for endorsements, extensions, renewals and documentation, so policy servicing doesn't stall mid-project.",
  },
  {
    icon: ShieldCheck,
    title: "Claims advocacy & follow-through",
    description:
      "Hands-on claims guidance — from intimation and documentation to surveyor coordination and follow-up with the insurer.",
  },
];

const WhyEnggiSureSection = () => {
  return (
    <section id="why-enggisure" className="section-padding section-tint">
      <div className="container-content">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          {/* Content — 60% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-8 leading-tight text-balance">
              EnggiSure Brings Engineering Insurance Closer to How Contractors Actually Work
            </h2>

            <div className="space-y-4">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="bg-card rounded-lg border border-border p-5 flex gap-4 items-start"
                >
                  <div className="w-11 h-11 rounded-lg bg-enggisure-purple-light flex items-center justify-center shrink-0">
                    <p.icon size={20} className="text-enggisure-purple" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1.5 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image — 40% */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="rounded-xl overflow-hidden border border-border bg-card">
              <img
                src={whyImage}
                alt="Engineering insurance specialist and contractor reviewing project blueprint"
                className="w-full h-[360px] md:h-[440px] lg:h-[520px] object-cover"
                loading="lazy"
                width={1100}
                height={1400}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyEnggiSureSection;
