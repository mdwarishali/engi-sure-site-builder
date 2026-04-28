import { motion } from "framer-motion";
import { FileWarning, Layers, Clock4, ScrollText } from "lucide-react";
import infraImage from "@/assets/infrastructure-boom.jpg";

const realities = [
  {
    icon: ScrollText,
    title: "Tender-driven coverage gaps",
    text: "Policies are often arranged in a rush to meet LOA timelines, leaving sums insured, escalation clauses and extensions inconsistent with actual contract terms.",
  },
  {
    icon: Layers,
    title: "Multi-agency execution risk",
    text: "Sub-contractors, hired plant, and parallel work fronts blur responsibility — and small ambiguities in the policy wording surface only at the time of a claim.",
  },
  {
    icon: Clock4,
    title: "Long project tails",
    text: "Maintenance periods, extensions of time, and DLP cover are routinely under-managed, exposing contractors well after physical completion.",
  },
  {
    icon: FileWarning,
    title: "Documentation-led claims",
    text: "Engineering claims are won or lost on records — JMRs, site reports, intimation timelines — long before a surveyor is appointed.",
  },
];

const InfrastructureBoomSection = () => {
  return (
    <section className="section-padding section-tint">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-xl overflow-hidden shadow-lg lg:sticky lg:top-28"
          >
            <img
              src={infraImage}
              alt="Civil engineers reviewing project risk documentation on an Indian infrastructure site"
              className="w-full h-[320px] md:h-[420px] object-cover"
              loading="lazy"
              width={1280}
              height={720}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-enggisure-purple mb-4">
              Where Project Risk Actually Sits
            </span>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-5 leading-tight text-balance">
              The risk isn't in buying a policy. It's in everything around it.
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Most engineering covers — CAR, EAR, CPM, contractor's liability — look similar on paper. The real exposure for a contractor sits in how the policy is structured against the contract, how it is serviced through the project lifecycle, and how claims are documented from day one on site.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {realities.map((item, i) => (
                <div
                  key={i}
                  className="bg-background border border-border rounded-lg p-5 h-full"
                >
                  <span className="inline-flex w-9 h-9 rounded-md bg-enggisure-purple-light items-center justify-center mb-3">
                    <item.icon size={18} className="text-enggisure-purple" />
                  </span>
                  <h3 className="text-sm font-semibold text-primary mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureBoomSection;
