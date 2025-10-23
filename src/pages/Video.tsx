import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import LearnListenFooter from "@/components/LearnListenFooter";

const Video = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNavbar />
      
      <main className="container max-w-7xl mx-auto px-4 py-12 pt-28">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-8">Video</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Watch our video content exploring death and dying in the digital age.
            </p>
            
            <div className="grid gap-8 md:grid-cols-2">
              {/* Video content will be added here */}
              <div className="bg-card p-6 rounded-lg border">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Video Placeholder</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Title 1</h3>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Video Placeholder</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Title 2</h3>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <LearnListenFooter />
    </div>
  );
};

export default Video;