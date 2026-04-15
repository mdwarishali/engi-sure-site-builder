import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const ClaimsAdvocacySection = () => {
  return (
    <section id="claims" className="section-padding section-dark">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-balance">
              When a Claim Happens, Support Matters More Than Promises
            </h2>

            <p className="text-base leading-relaxed mb-4 opacity-80 max-w-lg">
              A claim is the moment when policy structure, documentation, coordination, and follow-through all become critical. Contractors need support that is timely, practical, and aligned to the seriousness of the situation.
            </p>

            <p className="text-base leading-relaxed mb-8 opacity-80 max-w-lg">
              EnggiSure's approach to claims is not limited to passive processing. We work to support clients through the claim journey and help them pursue the rightful claim settlement they are entitled to, with stronger coordination and a more accountable support philosophy.
            </p>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-enggisure-navy-light/40 border border-enggisure-navy-light/30">
              <ShieldCheck size={20} className="text-enggisure-accent shrink-0" />
              <span className="text-sm font-semibold">
                Built with a claims-support mindset, not just a policy-booking mindset.
              </span>
            </div>
          </motion.div>

          {/* Claims visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-sm aspect-square rounded-2xl bg-enggisure-navy-light/30 border border-enggisure-navy-light/20 flex flex-col items-center justify-center p-10 text-center">
              <div className="w-20 h-20 rounded-full bg-enggisure-accent/15 flex items-center justify-center mb-6">
                <ShieldCheck size={36} className="text-enggisure-accent" />
              </div>
              <p className="text-lg font-semibold mb-2">Claims Advocacy</p>
              <p className="text-sm opacity-60 leading-relaxed">
                Stronger coordination, practical follow-through, and support aligned to your project reality.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClaimsAdvocacySection;
