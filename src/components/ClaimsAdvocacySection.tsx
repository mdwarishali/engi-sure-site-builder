import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import claimsImage from "@/assets/claims-advocacy.jpg";

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

          {/* Claims illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl overflow-hidden border border-enggisure-navy-light/30"
          >
            <img
              src={claimsImage}
              alt="Insurance specialist supporting contractor through claim documentation"
              className="w-full h-[320px] md:h-[420px] object-cover"
              loading="lazy"
              width={1100}
              height={1100}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClaimsAdvocacySection;
