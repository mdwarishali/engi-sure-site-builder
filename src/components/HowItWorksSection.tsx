import { motion } from "framer-motion";
import { Upload, ClipboardList, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload Project Details", desc: "Start by sharing core project information, including the LOA and other relevant details.", num: "01" },
  { icon: ClipboardList, title: "Key Information Gets Organized", desc: "Important project inputs are captured in a more structured way to reduce repetitive back-and-forth and improve clarity.", num: "02" },
  { icon: CheckCircle, title: "Confirm the Requirement", desc: "Review the captured details and confirm the insurance requirement for the project.", num: "03" },
  { icon: ArrowRight, title: "Move Toward the Right Quote", desc: "Based on the project requirement, the process moves forward toward a more relevant engineering insurance quote journey.", num: "04" },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-content">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
            A More Practical Way to Start the Insurance Process
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
            >
              <div className="card-elevated text-center h-full">
                <span className="text-3xl font-bold text-enggisure-accent/20 font-heading block mb-3">
                  {step.num}
                </span>
                <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <step.icon size={20} className="text-enggisure-accent" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>

              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight size={16} className="text-enggisure-steel/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-sm text-muted-foreground mt-10 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Upload LOA → Review key details → Confirm requirement → Get started on the quote path
        </motion.p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
