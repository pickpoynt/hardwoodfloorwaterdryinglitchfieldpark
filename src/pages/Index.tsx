import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import HardwoodDryingInfo from "@/components/landing/HardwoodDryingInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Hardwood floor water drying Litchfield Park | Litchfield Park Hardwood Drying Experts</title>
        <meta name="description" content="Hardwood floor water drying Litchfield Park. Professional wood floor moisture extraction, buckling repair, and water damage restoration in AZ. Call (380) 266-0944!" />
        <meta name="keywords" content="Hardwood floor water drying Litchfield Park, wood floor water damage restoration AZ, Litchfield Park hardwood moisture extraction, flooded hardwood repair Litchfield Park" />
        <link rel="canonical" href="https://litchfieldpark-hardwood-drying.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Litchfield Park Hardwood Drying Experts",
            "image": "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Litchfield Park",
              "addressRegion": "AZ",
              "postalCode": "85340",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.4925",
              "longitude": "-112.3557"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Litchfield Park, Arizona"
            },
            "priceRange": "$$$",
            "description": "Professional hardwood floor water drying and restoration services in Litchfield Park, AZ. We specialize in subfloor moisture extraction and preventing floor buckling."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Hardwood Floor Water Drying Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Litchfield Park Hardwood Drying Experts",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Litchfield Park, Arizona"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Hardwood Drying Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sub-Floor Moisture Extraction"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Structural Wood Drying"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Baseboard Water Removal"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Anti-Microbial Floor Sanitization"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Hardwood floor water drying Litchfield Park | Floor Drying Experts" />
        <meta property="og:description" content="Professional hardwood floor water drying in Litchfield Park, AZ. 24/7 moisture extraction and buckling repair. Call (380) 266-0944 for immediate service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://litchfieldpark-hardwood-drying.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Hardwood floor water drying Litchfield Park
              <span className="block text-blue-500 mt-2">Litchfield Park Hardwood Drying Experts: Save Your Floors</span>
            </>
          }
          subtitle="Don't let water ruin your expensive hardwood. Our specialized sub-floor extraction and high-velocity drying systems target moisture trapped beneath your boards—preventing buckling, cupping, and mold growth with Litchfield Park precision."
          image="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <HardwoodDryingInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;




