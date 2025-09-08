import { Button } from "@/components/ui/button";
const VideoSection = () => {
  return <section className="py-8 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">See Legacy Readiness in Action</h2>
          <p className="text-lead max-w-3xl mx-auto">
            Watch how organizations transform their legacy systems with our proven framework. 
            Discover the strategies that reduce risk while accelerating modernization.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
            {/* Placeholder for video - can be replaced with actual video */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-navy to-brand-orange">
              <div className="text-center text-white">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5,3 19,12 5,21" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-lg font-medium">Upload your video here</p>
                <p className="text-sm opacity-80">Click to add video content</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            
          </div>
        </div>
      </div>
    </section>;
};
export default VideoSection;