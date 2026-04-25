import { motion } from "framer-motion";
import missionImage from "@/assets/mission-india.jpg";

const MissionSection = () => {
  return (
    <section className="section-padding section-warm">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden order-last lg:order-first"
          >
            <img
              src={missionImage}
              alt="Map of India with infrastructure landmarks under a protective shield"
              className="w-full h-[300px] md:h-[400px] object-contain"
              loading="lazy"
              width={1280}
              height={800}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-enggisure-purple mb-4">
              Our Mission
            </span>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight text-balance">
              Helping Contractors Build India with Greater Confidence
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4 max-w-xl">
              EnggiSure exists to help contractors build India with greater confidence by simplifying engineering insurance and making protection more practical, more relevant, and more dependable.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              While contractors focus on execution, timelines, labour, equipment, and delivery, insurance should not become an unnecessary burden. Our mission is to reduce that friction and support contractors with better clarity, better servicing, and stronger protection support across the journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
