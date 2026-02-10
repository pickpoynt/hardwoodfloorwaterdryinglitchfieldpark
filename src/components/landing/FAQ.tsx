import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can water-damaged hardwood floors actually be saved in Litchfield Park?",
    answer: "Yes. Using specialized Litchfield Park sub-floor extraction mats, we can often pull moisture out of the planks and subfloor before permanent warping occurs. The key is rapid response—ideally within the first 24-48 hours."
  },
  {
    question: "What is 'cupping' and can it be reversed?",
    answer: "Cupping happens when the bottom of the wood plank is wetter than the top, causing the edges to rise. Our directed-heat drying systems in Litchfield Park equalize moisture levels across the entire plank, pulling boards back down to their flat state."
  },
  {
    question: "How long does the drying process take in the Arizona climate?",
    answer: "While Arizona's air is dry, the moisture trapped under hardwood is insulated. Typically, our Litchfield Park drying cycles take 3 to 5 days. We use digital monitoring to ensure the 'Dry Standard' is met before equipment is removed."
  },
  {
    question: "Will my insurance cover hardwood floor drying in Litchfield Park?",
    answer: "Most homeowner policies cover water damage from 'sudden and accidental' leaks. Drying floors is often significantly cheaper than replacement, making it a preferred option for insurance adjusters. We provide full digital documentation."
  },
  {
    question: "Is it safe to stay in my home during the drying process?",
    answer: "Generally, yes. Our Litchfield Park equipment, including LGR dehumidifiers and HEPA air scrubbers, actually improves indoor air quality. We use botanical-based treatments that are safe for pets and children."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Litchfield Park Floor Drying FAQ
          </h2>
          <p className="text-lg text-slate-600">
            Professional restoration expertise for Litchfield Park homeowners and property managers.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl px-4 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-blue-600 py-6 transition-colors font-semibold leading-relaxed">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;




