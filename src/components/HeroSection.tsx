import { motion } from "framer-motion";
import { Shield, Zap, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-infrastructure.jpg";

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
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-enggisure-accent mb-4">
              Specialist Engineering Insurance
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.15] text-primary mb-6 text-balance">
              Engineering Insurance Built for Contractors Who Cannot Afford Wrong Coverage
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
              From project-specific risk guidance to claims support and servicing assistance, EnggiSure helps contractors secure the right engineering insurance with greater clarity, speed, and confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-enggisure-navy-light px-8 text-base font-semibold">
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-accent px-8 text-base font-semibold">
                Get the Right Policy
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Upload LOA · Auto-fill key project details · Confirm · Get started faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-2">
                  <point.icon size={16} className="text-enggisure-accent mt-0.5 shrink-0" />
                  <span className="text-xs text-muted-foreground leading-snug">{point.text}</span>
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
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Large-scale infrastructure construction project with cranes and engineering teams"
                className="w-full h-[320px] md:h-[440px] lg:h-[500px] object-cover"
                width={1280}
                height={896}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-enggisure-dark/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
