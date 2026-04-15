import { motion } from "framer-motion";
import infraImage from "@/assets/infrastructure-boom.jpg";

const InfrastructureBoomSection = () => {
  return (
    <section className="section-padding section-tint">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight text-balance">
              As India Builds Faster, Project Risk Becomes More Critical
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-4 max-w-lg">
              India's infrastructure and public project landscape is expanding at a remarkable pace. With rising government focus on roads, energy, utilities, public assets, industrial development, and large-scale execution, contractors are at the centre of this growth story.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-lg">
              But as project values rise and execution complexity increases, insurance cannot remain an afterthought. The right engineering policy is no longer just a compliance requirement. It is a critical part of protecting project value, managing uncertainty, and keeping execution financially resilient.
            </p>

            <p className="text-sm font-semibold text-enggisure-accent">
              When project scale grows, risk exposure grows with it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={infraImage}
              alt="India's expanding highway and infrastructure network at twilight"
              className="w-full h-[280px] md:h-[360px] object-cover"
              loading="lazy"
              width={1280}
              height={720}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureBoomSection;
