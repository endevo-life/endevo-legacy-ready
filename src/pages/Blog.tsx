import Header from "@/components/Header";
import LearnListenFooter from "@/components/LearnListenFooter";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-4 py-12">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-8">Blog</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Read our latest articles and insights about death and dying in the digital age.
            </p>
            
            <div className="space-y-8">
              {/* Blog posts will be added here */}
              <article className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold mb-4">Blog Post Title 1</h2>
                <p className="text-muted-foreground mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>Published on March 15, 2024</span>
                </div>
              </article>
              
              <article className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold mb-4">Blog Post Title 2</h2>
                <p className="text-muted-foreground mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>Published on March 10, 2024</span>
                </div>
              </article>
              
              <article className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold mb-4">Blog Post Title 3</h2>
                <p className="text-muted-foreground mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>Published on March 5, 2024</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
      
      <LearnListenFooter />
    </div>
  );
};

export default Blog;