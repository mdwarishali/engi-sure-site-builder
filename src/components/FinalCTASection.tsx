import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="section-padding section-dark">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-balance">
            Get Started with the Right Engineering Insurance Journey
          </h2>

          <p className="text-base leading-relaxed opacity-80 mb-8 max-w-2xl mx-auto">
            If your project needs engineering insurance support, start with a more structured approach. Share your project details, reduce confusion, and move toward the right policy with specialist support behind the process.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Button size="lg" className="bg-enggisure-accent text-primary-foreground hover:bg-enggisure-accent/90 px-8 text-base font-semibold">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 text-base font-semibold">
              Get the Right Policy
            </Button>
          </div>

          <p className="text-sm font-semibold opacity-70">
            Built for contractors who need more than generic insurance support.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
