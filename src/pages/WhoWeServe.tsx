import Header from "@/components/Header";
import Footer from "@/components/Footer";
import individualsIcon from "@/assets/individuals-icon.png";
import serviceProvidersIcon from "@/assets/service-providers-icon.png";
import employersIcon from "@/assets/employers-icon.png";
import whoWeServeTeam from "@/assets/who-we-serve-team.png";
import familyOverwhelmed from "@/assets/family-overwhelmed.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const WhoWeServe = () => {
  return <div className="min-h-screen">
      <Header />
      
      {/* Who We Serve Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{
            fontFamily: 'serif'
          }}>
              Who We Serve
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At ENDevo, we help companies, organizations, and individuals prepare with clarity and confidence so their legacy, digital footprint, and critical operations remain protected, resilient, and continuous. Our AI-powered platform bridges the gap between personal planning and workplace readiness, making Legacy Readiness and Digital Preparedness accessible and actionable.
            </p>
          </div>

          {/* Two Column Layout */}
          
        </div>
      </section>

      {/* Our Edge: Where AI Meets Empathy Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl text-foreground">
                Our Edge: Where{" "}
                <span className="font-bold text-brand-orange">AI Meets Empathy</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ENDevo isn't just another platform. It is a new standard for preparedness, where technology meets humanity, blending innovation with empathy to create solutions you can trust. Our edge is what makes us different and what makes planning simpler, smarter, and more human.
              </p>
            </div>

            {/* Right Column - Accordion */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="market-need" className="bg-white rounded-lg shadow-sm px-6 py-2 border-none">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🌍</span>
                      <span className="font-semibold text-foreground">$126B Market Need</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Legacy readiness & digital preparedness are urgent and costly gaps for families and businesses. ENDevo addresses the crisis head-on with scalable, human-centered solutions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ai-guidance" className="bg-white rounded-lg shadow-sm px-6 py-2 border-none">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🤖</span>
                      <span className="font-semibold text-foreground">Empathetic AI Guidance</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Our AI isn't just about automation. It's supportive, compassionate, and tailored to individuals, families, and employees.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="comprehensive" className="bg-white rounded-lg shadow-sm px-6 py-2 border-none">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🛠️</span>
                      <span className="font-semibold text-foreground">Comprehensive Offerings</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Plan across every domain, beliefs, legal, financial, physical, and digital, all in one unified platform.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="marketplace" className="bg-white rounded-lg shadow-sm px-6 py-2 border-none">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🛒</span>
                      <span className="font-semibold text-foreground">Marketplace Integration</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Seamless connections to trusted providers like Trust&Will and Presidio for diverse planning needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="education" className="bg-white rounded-lg shadow-sm px-6 py-2 border-none">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📚</span>
                      <span className="font-semibold text-foreground">Human-Centered Education</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Workshops and resources blend technology with empathy, making complex planning simple and approachable.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="security" className="bg-white rounded-lg shadow-sm px-6 py-2 border-none">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔒</span>
                      <span className="font-semibold text-foreground">Secure & Reliable</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Enterprise-grade safeguards protect sensitive data and digital footprints.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="values" className="bg-white rounded-lg shadow-sm px-6 py-2 border-none">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">❤️</span>
                      <span className="font-semibold text-foreground">Built on Values (C.L.A.R.I.T.Y.)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Compassion, Clarity, Resilience, and Innovation guide every step of our work.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default WhoWeServe;