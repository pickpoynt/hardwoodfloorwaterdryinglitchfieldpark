import { Shield, Microscope, MapPin, Building2, ClipboardCheck, Wind, Award, Sparkles, Droplets } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Litchfield Park's Drying Leaders",
    description: "We are the leading specialists for hardwood water extraction in Litchfield Park, serving Arizona homeowners with surgical precision for over 15 years."
  },
  {
    icon: Microscope,
    title: "Thermal Moisture Analysis",
    description: "Every Litchfield Park project begins with a professional thermal assessment, identifying the exact migration path of trapped water."
  },
  {
    icon: Droplets,
    title: "Sub-Floor Extraction",
    description: "We use specialized high-pressure vacuum mats to pull water directly through the hardwood, often saving the floor from replacement."
  },
  {
    icon: ClipboardCheck,
    title: "Certified & Local",
    description: "Our Litchfield Park team is IICRC certified in water damage restoration and structural drying, meeting the highest industry standards."
  },
  {
    icon: Shield,
    title: "Certified Dry Guarantee",
    description: "We don't just 'air out' your home; we extract. If any moisture residue is found within 30 days, we'll return to your Litchfield Park property at zero cost."
  },
  {
    icon: Building2,
    title: "Arizona Home Heritage",
    description: "From luxury Litchfield Park estates to modern desert builds, we understand how to treat diverse flooring materials safely and effectively."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Litchfield Park's Choice for Floor Restoration
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the restoration team that Litchfield Park property owners trust. We specialize in turning a water-damaged environment into a dry, healthy home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;




