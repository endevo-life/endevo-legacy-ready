import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import consultationImage from "@/assets/consultation-image.jpg";
const ConsultationSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  return (
    <section className="py-20 bg-muted/20">
      <div ref={elementRef} className="container max-w-7xl mx-auto px-4">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-stretch">
          {/* Left Column - Consultation Form */}
          <div
            className={`bg-card rounded-xl shadow-lg flex flex-col transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            style={{
              transitionDelay: isVisible ? "0.6s" : "0s",
            }}
          >
            <div className="flex-1 min-h-[679px] overflow-hidden">
              <iframe
                src="https://link.endevo.life/widget/form/klbP5ZsVH8lpWmnctFP6"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "3px",
                  overflow: "hidden",
                }}
                id="inline-klbP5ZsVH8lpWmnctFP6"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website - Schedule Your Consultation"
                data-height="679"
                data-layout-iframe-id="inline-klbP5ZsVH8lpWmnctFP6"
                data-form-id="klbP5ZsVH8lpWmnctFP6"
                title="Website - Schedule Your Consultation"
              />
            </div>
          </div>
          <script src="https://link.endevo.life/js/form_embed.js"></script>

          {/* Right Column - Contact Info + Image */}
          <div
            className={`space-y-8 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            style={{
              transitionDelay: isVisible ? "0.8s" : "0s",
            }}
          >
            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={consultationImage}
                alt="Professional business consultation meeting"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Contact Info Box */}
            <div className="bg-card rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    📞 Phone
                  </h4>
                  <a
                    href="tel:4845454327"
                    className="text-muted-foreground underline hover:text-brand-orange transition-colors"
                  >
                    484-545-4327
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Monday–Friday, 8AM - 8PM ET
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    ✉️ Email
                  </h4>
                  <a
                    href="mailto:hello@endevo.life"
                    className="text-muted-foreground underline hover:text-brand-orange transition-colors"
                  >
                    hello@endevo.life
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ConsultationSection;
