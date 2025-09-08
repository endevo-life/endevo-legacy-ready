import { ClipboardCheck, Smartphone, Headphones } from "lucide-react";

const ProcessSection = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-4 text-gray-700">Our Simple Process</h2>
          <p className="text-lead text-gray-600">
            Three steps to complete care
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-gray-200 rounded-full flex items-center justify-center relative"
                 style={{
                   boxShadow: '9px 9px 16px #a3a3a3, -9px -9px 16px #ffffff'
                 }}>
              <ClipboardCheck className="w-8 h-8 text-gray-600" />
            </div>
            <div className="bg-gray-200 rounded-3xl p-8 relative"
                 style={{
                   boxShadow: 'inset 8px 8px 16px #a3a3a3, inset -8px -8px 16px #ffffff'
                 }}>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Take the Peace of Mind Assessment</h3>
              <p className="text-gray-600 leading-relaxed">Quickly assess your preparedness for life's transitions, spot gaps, and gain clarity with a short summary of your readiness.</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-gray-200 rounded-full flex items-center justify-center relative"
                 style={{
                   boxShadow: '9px 9px 16px #a3a3a3, -9px -9px 16px #ffffff'
                 }}>
              <Smartphone className="w-8 h-8 text-gray-600" />
            </div>
            <div className="bg-gray-200 rounded-3xl p-8 relative"
                 style={{
                   boxShadow: 'inset 8px 8px 16px #a3a3a3, inset -8px -8px 16px #ffffff'
                 }}>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Download My Final Playbook app</h3>
              <p className="text-gray-600 leading-relaxed">My Final Playbook makes end-of-life planning simple with expert guidance, digital tools, and seamless in-app options to secure your legacy.</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-gray-200 rounded-full flex items-center justify-center relative"
                 style={{
                   boxShadow: '9px 9px 16px #a3a3a3, -9px -9px 16px #ffffff'
                 }}>
              <Headphones className="w-8 h-8 text-gray-600" />
            </div>
            <div className="bg-gray-200 rounded-3xl p-8 relative"
                 style={{
                   boxShadow: 'inset 8px 8px 16px #a3a3a3, inset -8px -8px 16px #ffffff'
                 }}>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Listen to the Digital Legacy Podcast</h3>
              <p className="text-gray-600 leading-relaxed">The Digital Legacy Podcast shows you how to protect your online assets, avoid chaos, and give loved ones peace of mind.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;