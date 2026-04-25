import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer>
      {/* Footer CTA strip */}
      <div className="bg-primary py-10 px-6 md:px-8">
        <div className="container-content flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-1">
              Engineering Insurance, Built Around Project Reality
            </h3>
            <p className="text-sm text-primary-foreground/70">
              Specialized support for contractor-led engineering insurance requirements.
            </p>
          </div>
          <Button className="bg-enggisure-accent text-primary-foreground hover:bg-enggisure-accent/90 px-8 font-semibold shrink-0">
            Get a Quote
          </Button>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-enggisure-dark text-primary-foreground py-14 px-6 md:px-8">
        <div className="container-content">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div>
              <h4 className="font-heading text-xl font-bold mb-3">EnggiSure</h4>
              <p className="text-sm opacity-60 leading-relaxed">
                Specialist engineering insurance support for contractors who build India's critical infrastructure.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h5 className="text-sm font-semibold mb-3 opacity-80">Quick Links</h5>
              <ul className="space-y-2 text-sm opacity-60">
                <li><a href="#why-enggisure" className="hover:opacity-100 transition-opacity">Why EnggiSure</a></li>
                <li><a href="#how-it-works" className="hover:opacity-100 transition-opacity">How It Works</a></li>
                <li><a href="#claims" className="hover:opacity-100 transition-opacity">Claims Support</a></li>
                <li><a href="#faq" className="hover:opacity-100 transition-opacity">FAQs</a></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h5 className="text-sm font-semibold mb-3 opacity-80">Coverage</h5>
              <ul className="space-y-2 text-sm opacity-60">
                <li><a href="#products" className="hover:opacity-100 transition-opacity">Contractors' All Risks</a></li>
                <li><a href="#products" className="hover:opacity-100 transition-opacity">Erection All Risks</a></li>
                <li><a href="#products" className="hover:opacity-100 transition-opacity">Workmen Compensation</a></li>
                <li><a href="#products" className="hover:opacity-100 transition-opacity">Surety Bonds</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-sm font-semibold mb-3 opacity-80">Get in Touch</h5>
              <ul className="space-y-2 text-sm opacity-60">
                <li><a href="mailto:support@enggisure.com" className="hover:opacity-100 transition-opacity">support@enggisure.com</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs opacity-40">© {new Date().getFullYear()} EnggiSure. All rights reserved.</p>
            <div className="flex gap-4 text-xs opacity-40">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
