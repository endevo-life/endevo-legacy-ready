const ProcessSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">Our Simple Process</h2>
          <p className="text-lead text-muted-foreground">
            Three steps to complete care
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Take the Peace of Mind Assessment</h3>
            <p className="text-muted-foreground">Quickly assess your preparedness for life's transitions, spot gaps, and gain clarity with a short summary of your readiness.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Download My Final Playbook app</h3>
            <p className="text-muted-foreground">My Final Playbook makes end-of-life planning simple with expert guidance, digital tools, and seamless in-app options to secure your legacy.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Listen to the Digital Legacy Podcast</h3>
            <p className="text-muted-foreground">The Digital Legacy Podcast shows you how to protect your online assets, avoid chaos, and give loved ones peace of mind.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;