const CriticalQuestion = () => {
  return (
    <section className="py-4 bg-muted/30 animate-fade-in">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-lead font-bold text-brand-navy mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          If your company lost a key leader or critical knowledge tomorrow...
        </h2>
        <p className="text-lead text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Would your employees, stakeholders, and investors know what to do next?
        </p>
      </div>
    </section>
  );
};

export default CriticalQuestion;