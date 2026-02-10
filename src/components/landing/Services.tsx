import { Wind, Shield, Sparkles, AlertTriangle, Zap, Activity, Filter, Thermometer, ShieldCheck, Droplets, Waves } from "lucide-react";

const services = [
  {
    icon: Waves,
    title: "Sub-Floor Extraction",
    description: "Removing water trapped beneath Litchfield Park hardwood using high-pressure vacuum mats. We save your floors without removing them.",
    link: "#hardwood-drying-info"
  },
  {
    icon: Thermometer,
    title: "Directed Heat Drying",
    description: "Speeding up evaporation in water-damaged AZ homes with controlled heat trailers. Essential for restoring dense hardwood grain.",
    link: "#hardwood-drying-info"
  },
  {
    icon: Activity,
    title: "Moisture Mapping",
    description: "Digital tracking of water migration in Litchfield Park properties using thermal imaging and deep-penetration moisture meters.",
    link: "#hardwood-drying-info"
  },
  {
    icon: Filter,
    title: "LGR Dehumidification",
    description: "Extracting gallons of moisture from the air to prevent secondary damage and mold growth in your Litchfield Park residence.",
    link: "#hardwood-drying-info"
  },
  {
    icon: Wind,
    title: "In-Place Drying",
    description: "Specialized techniques to dry hardwood in-place, eliminating the cost and mess of floor replacement in Litchfield Park.",
    link: "#hardwood-drying-info"
  },
  {
    icon: AlertTriangle,
    title: "Buckling Repair",
    description: "Advanced structural drying to pull cupped or buckled wood floors back down to the subfloor as moisture levels equalize.",
    link: "#hardwood-drying-info"
  },
  {
    icon: Sparkles,
    title: "Hardwood Sanitization",
    description: "Applying botanical anti-microbials to the underside of Litchfield Park flooring to prevent mold and bacteria after water leaks.",
    link: "#hardwood-drying-info"
  },
  {
    icon: ShieldCheck,
    title: "Certified Dry Guarantee",
    description: "Arizona's most thorough moisture inspection. We provide digital verification that your structure is 100% dry before we finish.",
    link: "#hardwood-drying-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Litchfield Park's Floor Drying Technology
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't tear up your investment. Our Litchfield Park restoration team uses advanced physics and directed air-flow to save water-damaged hardwood floors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <a href={service.link}>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;


