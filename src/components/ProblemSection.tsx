import { motion } from "framer-motion";
import { HelpCircle, ShieldAlert, PhoneOff, Clock } from "lucide-react";
import problemImage from "@/assets/problem-confusion.jpg";

const problems = [
  {
    icon: HelpCircle,
    title: "Confusion in Engineering Insurance",
    desc: "Choosing between engineering covers, understanding policy scope, and matching coverage with project realities can become unnecessarily difficult.",
  },
  {
    icon: ShieldAlert,
    title: "Risk of Being Underinsured",
    desc: "A policy may exist on paper, but that does not always mean the project is adequately protected. Incorrect values, weak structuring, or wrong assumptions can create serious gaps.",
  },
  {
    icon: PhoneOff,
    title: "Weak Claims Support",
    desc: "Claims are where policy quality and servicing quality truly get tested. Many contractors struggle when timely and effective support is needed most.",
  },
  {
    icon: Clock,
    title: "Poor Servicing After Policy Issuance",
    desc: "Endorsements, extensions, claim intimation, tracking, and policy support should be manageable. Instead, they often become slow and frustrating.",
  },
];

const ProblemSection = () => {
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-5 text-balance">
            Engineering Insurance Often Becomes a Bottleneck Instead of Protection
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            For many contractors, the challenge is not understanding the need for insurance. The real challenge is getting the right policy, in the right structure, with the right support when it matters.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          <motion.div
            className="lg:col-span-2 order-last lg:order-first"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-xl overflow-hidden border border-border bg-enggisure-light">
              <img
                src={problemImage}
                alt="Contractor reviewing complex insurance documents with magnifying glass"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1100}
                height={900}
              />
            </div>
          </motion.div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                className="card-premium h-full"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-lg bg-enggisure-purple-light flex items-center justify-center mb-4">
                  <p.icon size={20} className="text-enggisure-purple" />
                </div>
                <h3 className="text-base font-semibold text-primary mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          className="text-center text-base font-semibold text-primary mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Contractors need more than insurance booking. They need insurance that works with the reality of project execution.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
