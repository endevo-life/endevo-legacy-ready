import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Podcast, BookOpen, Calendar, Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LearnAndListen = () => {
  const podcasts = [
    {
      title: "Digital Legacy Essentials",
      description: "Understanding the basics of digital asset protection and legacy planning",
      duration: "28 min",
      date: "Dec 2024"
    },
    {
      title: "Protecting Your Online Identity",
      description: "How to secure your digital footprint for future generations",
      duration: "35 min", 
      date: "Nov 2024"
    },
    {
      title: "Family Digital Preparedness",
      description: "Creating a comprehensive digital estate plan your family can understand",
      duration: "42 min",
      date: "Nov 2024"
    }
  ];

  const blogs = [
    {
      title: "The Ultimate Digital Legacy Checklist",
      description: "A comprehensive guide to organizing your digital assets before it's too late",
      readTime: "8 min read",
      date: "Dec 2024"
    },
    {
      title: "Why Your Social Media Accounts Need a Legacy Plan",
      description: "What happens to your digital presence when you're gone, and how to plan for it",
      readTime: "6 min read",
      date: "Dec 2024"
    },
    {
      title: "Digital Assets vs. Digital Legacy: Understanding the Difference",
      description: "Learn how to distinguish between valuable digital assets and meaningful digital legacy",
      readTime: "10 min read",
      date: "Nov 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h1 className="heading-hero mb-6 text-primary">
            Learn & Listen
          </h1>
          <p className="text-lead text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore our comprehensive resources on digital legacy planning, end-of-life preparedness, 
            and protecting what matters most. From expert podcasts to in-depth guides, we're here 
            to help you navigate life's final chapter with confidence.
          </p>
        </div>
      </section>

      {/* Podcasts Section */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-12">
            <Podcast className="w-8 h-8 text-primary mr-4" />
            <h2 className="heading-section text-primary">Digital Legacy Podcast</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {podcasts.map((podcast, index) => (
              <Card key={index} className="hover-scale transition-transform duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{podcast.date}</span>
                    <span className="text-sm text-brand-orange font-medium">{podcast.duration}</span>
                  </div>
                  <CardTitle className="text-lg">{podcast.title}</CardTitle>
                  <CardDescription>{podcast.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Play className="w-4 h-4 mr-2" />
                    Listen Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="secondary" size="lg">
              View All Episodes
            </Button>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-12">
            <BookOpen className="w-8 h-8 text-primary mr-4" />
            <h2 className="heading-section text-primary">Blogs & Guides</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {blogs.map((blog, index) => (
              <Card key={index} className="hover-scale transition-transform duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{blog.date}</span>
                    <span className="text-sm text-brand-orange font-medium">{blog.readTime}</span>
                  </div>
                  <CardTitle className="text-lg">{blog.title}</CardTitle>
                  <CardDescription>{blog.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="secondary" size="lg">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-12">
            <Calendar className="w-8 h-8 text-primary mr-4" />
            <h2 className="heading-section text-primary">Upcoming Events</h2>
          </div>
          
          <div className="bg-card rounded-lg p-8 text-center border">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Digital Legacy Planning Workshop</h3>
            <p className="text-muted-foreground mb-6">
              Join our interactive workshop to learn how to create a comprehensive digital legacy plan. 
              This hands-on session will guide you through the essential steps to protect and preserve 
              your digital assets for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <div className="text-brand-orange font-semibold">January 25, 2025</div>
              <div className="text-muted-foreground">2:00 PM - 4:00 PM EST</div>
              <div className="text-muted-foreground">Virtual Event</div>
            </div>
            <Button variant="cta" size="lg">
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Action?</h2>
          <p className="text-lg mb-8 opacity-90">
            Start your digital legacy journey today with our comprehensive assessment.
          </p>
          <a href="https://jbigogmrgex.typeform.com/to/qBsak5CQ" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Take the Peace of Mind Assessment
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LearnAndListen;