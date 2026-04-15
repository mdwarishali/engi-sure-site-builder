import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Which policy is right for my project?",
    a: "The right policy depends on the nature of the project, project scope, contract requirements, execution model, equipment exposure, labour involvement, and other risk factors. EnggiSure helps structure the requirement more clearly so the insurance journey starts in the right direction.",
  },
  {
    q: "Do you help with endorsements and extensions?",
    a: "Yes. EnggiSure is intended to support practical policy servicing needs such as endorsement assistance and extension request support during the policy lifecycle.",
  },
  {
    q: "Do you support claims after policy issuance?",
    a: "Yes. EnggiSure follows a support-led approach and works to assist clients through the claims journey, with the aim of helping them pursue rightful claim settlement through stronger coordination and follow-through.",
  },
  {
    q: "Can you help if I already have an existing policy?",
    a: "Yes. If there is an active policy in place, EnggiSure can still support relevant servicing and claim-related coordination depending on the case and requirement.",
  },
  {
    q: "Is this suitable for PSU and infrastructure projects?",
    a: "EnggiSure is designed with contractor-led and project-based engineering insurance needs in mind, including those commonly seen in infrastructure and execution-driven environments.",
  },
  {
    q: "How quickly can the process start?",
    a: "The process can begin as soon as the required project details are shared. The more complete and accurate the initial inputs are, the faster the insurance journey can move forward.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-sm md:text-base font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
