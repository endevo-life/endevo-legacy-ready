import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import consultationImage from "@/assets/business-consultation.jpg";

const ConsultationSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-20 bg-muted/20">
      <div ref={elementRef as any} className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}>
            Let&apos;s Start Your <span className="text-brand-orange">Legacy Journey</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}>
            Ready to protect your family&apos;s future? Contact us today for a confidential consultation.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Consultation Form */}
          <div className={`bg-card rounded-xl shadow-lg p-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: isVisible ? '0.6s' : '0s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-4">Schedule Your Consultation</h3>
            <p className="text-muted-foreground mb-6">Fill out the form below and we&apos;ll be in touch within 24 hours.</p>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="needs" className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your needs
                </label>
                <textarea
                  id="needs"
                  name="needs"
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors resize-vertical"
                  placeholder="Briefly describe your legacy planning goals and any specific concerns…"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 hover-scale"
              >
                Schedule My Consultation
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info + Image */}
          <div className={`space-y-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: isVisible ? '0.8s' : '0s' }}>
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
                  <h4 className="font-semibold text-foreground mb-2">📞 Phone</h4>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Monday–Friday, 9AM–6PM</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">✉️ Email</h4>
                  <p className="text-muted-foreground">info@endevo.com</p>
                  <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">📍 Address</h4>
                  <p className="text-muted-foreground">123 Main Street, Suite 400</p>
                  <p className="text-muted-foreground">Financial District, NY 10001</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🗓️ Scheduling</h4>
                  <p className="text-muted-foreground">Flexible Scheduling</p>
                  <p className="text-sm text-muted-foreground">Evening & weekend appointments available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Urgent Matter Box */}
        <div className={`bg-brand-orange rounded-xl p-8 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '1s' : '0s' }}>
          <h3 className="text-2xl font-bold text-white mb-4">Urgent Matter?</h3>
          <p className="text-white/90 mb-6">For time-sensitive legacy planning matters</p>
          <div className="max-w-md mx-auto">
            <textarea
              className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-foreground"
              rows={3}
              placeholder="Describe your urgent matter and we'll prioritize your request..."
            />
            <button className="mt-4 bg-white text-brand-orange font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-300 hover-scale">
              Submit Urgent Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;