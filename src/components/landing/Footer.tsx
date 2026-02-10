import { Phone, Mail, MapPin, Droplets, ShieldCheck } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Litchfield Park Drying Experts
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Litchfield Park's leading specialists in advanced hardwood water drying and restoration. We save your flooring using scientific moisture extraction and structural drying technology.
            </p>
            <div className="flex items-center gap-4">
              <a href="tel:3802660944" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Restoration Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Sub-floor Extraction</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Wood Moisture Mapping</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Structural Wood Drying</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Anti-Microbial Prep</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Buckling Floor Repair</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Litchfield Park Area</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Historic Litchfield Park</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Verrado & Victory</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> PebbleCreek Communities</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Goodyear & Palm Valley</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Surprise & West Valley</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Litchfield Park Drying Line</h4>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div className="text-blue-400 font-bold text-sm uppercase mb-2">AZ Licensed & Bonded</div>
              <a href="tel:3802660944" className="text-2xl font-heading font-bold text-white hover:text-blue-400 transition-colors">
                (380) 266-0944
              </a>
              <div className="flex items-center gap-2 mt-4 text-slate-400 text-sm">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Licensed & Insured #LPWOOD1
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 text-center md:text-left flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} Litchfield Park Hardwood Drying Experts. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-600 italic">Hardwood floor water drying Litchfield Park</div>
            <div className="w-2 h-2 rounded-full bg-blue-600/30" />
            <div className="text-xs text-slate-600 italic">AZ Floor Restoration</div>
          </div>
        </div>
      </div>

      {/* Structured Data for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Litchfield Park Hardwood Drying Experts",
          "telephone": "+1-380-266-0944",
          "url": "https://litchfieldpark-hardwood-drying.com/",
          "logo": "https://litchfieldpark-hardwood-drying.com/logo.png",
          "image": "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80",
          "description": "Professional hardwood floor water drying and restoration services in Litchfield Park, AZ. We specialize in scientific structural drying and sub-floor extraction.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Serving Litchfield Park and the West Valley",
            "addressLocality": "Litchfield Park",
            "addressRegion": "AZ",
            "postalCode": "85340",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 33.4925,
            "longitude": -112.3557
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        })}
      </script>
    </footer>
  );
};

export default Footer;

