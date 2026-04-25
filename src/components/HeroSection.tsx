import { motion } from "framer-motion";
import { Shield, Zap, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-contractors.jpg";

const trustPoints = [
  { icon: Shield, text: "Built for project-based contractor risks" },
  { icon: Zap, text: "Specialized engineering insurance support" },
  { icon: Headphones, text: "Servicing assistance beyond policy issuance" },
];

const HeroSection = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-8 bg-background overflow-hidden">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-enggisure-purple mb-4">
              Specialist Engineering Insurance
            </span>

            <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.25rem] font-bold leading-[1.1] text-primary mb-6 text-balance tracking-tight">
              Clear Engineering Insurance Support for Contractors
            </h1>

            <p className="text-base md:text-lg text-enggisure-charcoal/80 leading-relaxed max-w-xl mb-4">
              India's infrastructure and public project landscape is expanding rapidly, with contractors playing a central role in roads, energy, utilities, public assets, industrial development, and large-scale execution.
            </p>
            <p className="text-base md:text-lg text-enggisure-charcoal/80 leading-relaxed max-w-xl mb-8">
              As project values rise and execution complexity increases, engineering insurance should not remain an afterthought. EnggiSure helps contractors approach project insurance with greater clarity, speed, and confidence — supporting better coverage decisions for project-based risks.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-enggisure-navy-light px-8 text-base font-semibold">
                Get a Quote
              </Button>
            </div>

            <p className="text-sm text-enggisure-charcoal/70 mb-8 font-medium">
              Upload LOA · Auto-fill key project details · Review &amp; Confirm · Get the right premium.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-enggisure-purple-light flex items-center justify-center shrink-0 mt-0.5">
                    <point.icon size={14} className="text-enggisure-purple" />
                  </span>
                  <span className="text-xs text-enggisure-charcoal/80 leading-snug">{point.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-border bg-enggisure-light">
              <img
                src={heroImage}
                alt="Civil contractors reviewing blueprints at an Indian infrastructure construction site with bridge, cranes and excavator"
                className="w-full h-[320px] md:h-[440px] lg:h-[520px] object-cover"
                width={1280}
                height={960}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
