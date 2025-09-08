const ProcessSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4 text-slate-800 drop-shadow-sm">Our Simple Process</h2>
          <p className="text-lead text-slate-600 drop-shadow-sm">
            Three steps to complete care
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-8 relative group">
              {/* Outer shadow ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full shadow-2xl"></div>
              {/* Main button */}
              <div className="absolute inset-1 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full shadow-inner">
                {/* Inner highlight */}
                <div className="absolute inset-1 bg-gradient-to-br from-blue-300/50 to-transparent rounded-full"></div>
                {/* Number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white drop-shadow-md">1</span>
                </div>
              </div>
              {/* Bottom shadow */}
              <div className="absolute top-2 inset-x-1 h-4 bg-black/20 rounded-full blur-sm"></div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Take the Peace of Mind Assessment</h3>
              <p className="text-slate-600">Quickly assess your preparedness for life's transitions, spot gaps, and gain clarity with a short summary of your readiness.</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-8 relative group">
              {/* Outer shadow ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full shadow-2xl"></div>
              {/* Main button */}
              <div className="absolute inset-1 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-full shadow-inner">
                {/* Inner highlight */}
                <div className="absolute inset-1 bg-gradient-to-br from-emerald-300/50 to-transparent rounded-full"></div>
                {/* Number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white drop-shadow-md">2</span>
                </div>
              </div>
              {/* Bottom shadow */}
              <div className="absolute top-2 inset-x-1 h-4 bg-black/20 rounded-full blur-sm"></div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Download My Final Playbook app</h3>
              <p className="text-slate-600">My Final Playbook makes end-of-life planning simple with expert guidance, digital tools, and seamless in-app options to secure your legacy.</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-8 relative group">
              {/* Outer shadow ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full shadow-2xl"></div>
              {/* Main button */}
              <div className="absolute inset-1 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-full shadow-inner">
                {/* Inner highlight */}
                <div className="absolute inset-1 bg-gradient-to-br from-purple-300/50 to-transparent rounded-full"></div>
                {/* Number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white drop-shadow-md">3</span>
                </div>
              </div>
              {/* Bottom shadow */}
              <div className="absolute top-2 inset-x-1 h-4 bg-black/20 rounded-full blur-sm"></div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Listen to the Digital Legacy Podcast</h3>
              <p className="text-muted-foreground">The Digital Legacy Podcast shows you how to protect your online assets, avoid chaos, and give loved ones peace of mind.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;