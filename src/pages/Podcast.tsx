import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import LearnListenFooter from "@/components/LearnListenFooter";

const Podcast = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNavbar />
      
      <main className="container max-w-7xl mx-auto px-4 py-12">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-8">Podcast</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Explore our podcast episodes covering various topics about death and dying in the digital age.
            </p>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Podcast episodes will be added here */}
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Episode 1</h3>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Episode 2</h3>
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Episode 3</h3>
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

export default Podcast;