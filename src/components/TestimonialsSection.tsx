import { Card, CardContent } from "@/components/ui/card";
const TestimonialsSection = () => {
  const videos = [
    {
      title: "Jeff Monger",
      videoUrl: "https://www.youtube.com/embed/B7dWaPlK76s",
      description: "Realtor"
    },
    {
      title: "Mary Cioffi", 
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Business Coach"
    }
  ];
  return <section id="testimonials" className="py-12 bg-muted/30 animate-fade-in">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in" style={{
        animationDelay: '0.2s'
      }}>
          <h2 className="heading-section text-primary">Our Clients Stories</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <CardContent className="p-0">
                <div className="aspect-video bg-muted">
                  <iframe
                    src={video.videoUrl}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{video.title}</h3>
                  <p className="text-muted-foreground">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        
      </div>
    </section>;
};
export default TestimonialsSection;