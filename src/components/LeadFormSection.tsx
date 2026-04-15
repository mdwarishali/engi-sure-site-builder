import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, CheckCircle2 } from "lucide-react";

const LeadFormSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="lead-form" className="section-padding section-tint">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-card border border-border rounded-xl p-12 max-w-xl mx-auto"
          >
            <CheckCircle2 size={48} className="text-enggisure-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary mb-3">Thank You</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your project details have been submitted. Our team will review the requirement and take the next step toward the quote process.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="section-padding section-tint">
      <div className="container-content">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-balance">
              Share Project Details
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Start with the key project information so the insurance requirement can be understood more clearly.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your information is used only to understand your requirement and support the quote process.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm space-y-6">
              {/* Group 1: Contact */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="fullName" className="text-sm font-medium text-foreground">Full Name</Label>
                  <Input id="fullName" placeholder="Your full name" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-sm font-medium text-foreground">Company Name</Label>
                  <Input id="company" placeholder="Company name" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="mobile" className="text-sm font-medium text-foreground">Mobile Number</Label>
                  <Input id="mobile" type="tel" placeholder="+91" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@company.com" required />
                </div>
              </div>

              {/* Group 2: Project */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="projectName" className="text-sm font-medium text-foreground">Project Name</Label>
                  <Input id="projectName" placeholder="e.g. NH-48 Expansion Phase 2" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="projectType" className="text-sm font-medium text-foreground">Project Type</Label>
                  <Select>
                    <SelectTrigger id="projectType">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="highway">Highway / Road</SelectItem>
                      <SelectItem value="bridge">Bridge / Flyover</SelectItem>
                      <SelectItem value="power">Power / Energy</SelectItem>
                      <SelectItem value="industrial">Industrial / Manufacturing</SelectItem>
                      <SelectItem value="building">Building / Commercial</SelectItem>
                      <SelectItem value="water">Water / Irrigation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="policyRequired" className="text-sm font-medium text-foreground">Policy Required</Label>
                  <Select>
                    <SelectTrigger id="policyRequired">
                      <SelectValue placeholder="Select policy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="car">Contractors' All Risks (CAR)</SelectItem>
                      <SelectItem value="ear">Erection All Risks (EAR)</SelectItem>
                      <SelectItem value="wc">Workmen Compensation</SelectItem>
                      <SelectItem value="surety">Surety Bond</SelectItem>
                      <SelectItem value="cpm">Contractors' Plant & Machinery</SelectItem>
                      <SelectItem value="other">Other / Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="projectValue" className="text-sm font-medium text-foreground">Project Value / Sum Insured</Label>
                  <Input id="projectValue" placeholder="e.g. ₹50 Cr" />
                </div>
              </div>

              {/* Group 3: Additional */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="location" className="text-sm font-medium text-foreground">Project Location</Label>
                  <Input id="location" placeholder="City, State" />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-sm font-medium text-foreground">Upload LOA</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-enggisure-accent/40 transition-colors">
                    <Upload size={20} className="text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground mt-1">Upload LOA or relevant project document to help capture core project details.</p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="notes" className="text-sm font-medium text-foreground">Additional Notes</Label>
                  <Textarea id="notes" placeholder="Any other details relevant to your requirement..." rows={3} />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-enggisure-navy-light text-base font-semibold">
                Submit Project Details
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
