import { motion } from "framer-motion";
import { Upload, ClipboardCheck, FileCheck2 } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Project Details",
    desc: "Share LOA or basic project information to begin the insurance quotation process.",
    num: "01",
  },
  {
    icon: ClipboardCheck,
    title: "Review Key Risk Inputs",
    desc: "Project details are structured for engineering insurance review, including scope, location, value, and execution details.",
    num: "02",
  },
  {
    icon: FileCheck2,
    title: "Get Quotation Support",
    desc: "Receive clear insurance support to compare options, understand terms, and proceed with the suitable quotation.",
    num: "03",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-enggisure-light">
      <div className="container-content">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-enggisure-purple mb-3">
            How It Works
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
            A Practical Way to Start Your Engineering Insurance Process
          </h2>
          <p className="text-base text-enggisure-charcoal/75 leading-relaxed">
            Three structured steps designed around how contractors actually work — from project documentation to quotation review.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
            >
              <div className="bg-card rounded-xl border border-border p-7 md:p-8 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {step.num}
                  </span>
                  <span className="w-10 h-10 rounded-full bg-enggisure-purple-light flex items-center justify-center">
                    <step.icon size={18} className="text-enggisure-purple" />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2.5">{step.title}</h3>
                <p className="text-sm text-enggisure-charcoal/75 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
