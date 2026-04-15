import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="section-padding section-warm">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-enggisure-accent mb-4">
            Our Mission
          </span>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight text-balance">
            Helping Contractors Build India with Greater Confidence
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
            EnggiSure exists to help contractors build India with greater confidence by simplifying engineering insurance and making protection more practical, more relevant, and more dependable.
          </p>

          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            While contractors focus on execution, timelines, labour, equipment, and delivery, insurance should not become an unnecessary burden. Our mission is to reduce that friction and support contractors with better clarity, better servicing, and stronger protection support across the journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
