import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NewsAndEvents = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ResponsiveNavbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-20 px-4" style={{ backgroundColor: "#08123A" }}>
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              News &amp; Events
            </h1>
            <p className="text-lg text-white/80">
              Stay up to date with the latest from ENDevo — announcements,
              upcoming events, and industry news.
            </p>
          </div>
        </section>

        {/* Content placeholder */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl mx-auto text-center">
            <p className="text-muted-foreground text-lg mb-8">
              We're building this page. Check back soon for upcoming events,
              press releases, and ENDevo news.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors duration-300 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsAndEvents;
