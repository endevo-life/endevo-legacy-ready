import familyOverwhelmed from "@/assets/family-overwhelmed.png";

const HiddenCostSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <img 
              src={familyOverwhelmed} 
              alt="Family overwhelmed by paperwork and digital security concerns" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              The Hidden Cost of Being Unprepared
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Most people and most companies are not ready for life's inevitable events. The result? Families face chaos. Employers lose billions. Legacies are left incomplete.
            </p>

            {/* Key statistics & impacts */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Only 1 in 3 adults have a plan
                </h3>
                <p className="text-muted-foreground">
                  Most Americans are unprepared. Without a plan, families face chaos, expensive legal issues, unclear asset distribution, disputes, locked accounts, and even lost business revenue.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Companies Lose $33B Each Year
                </h3>
                <p className="text-muted-foreground">
                  Unpreparedness leads to lost productivity as employees juggle end-of-life and caregiving responsibilities, causing absenteeism, presenteeism, interruptions, and higher turnover.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Digital Assets Are Lost Forever
                </h3>
                <p className="text-muted-foreground">
                  Avoidance driven by procrastination, overwhelm, and fear leaves accounts and assets locked away, often never recovered.
                </p>
              </div>
            </div>

            {/* Closing emphasis */}
            <div className="pt-4">
              <h3 className="text-xl md:text-2xl font-bold text-brand-orange mb-3 text-center">
                ENDevo Brings Clarity, Confidence, and Continuity
              </h3>
              <p className="text-muted-foreground italic mb-6 text-center">
                With AI-powered tools and compassionate guidance, we help individuals, families, and workplaces safeguard their legacy and prepare for the future without the overwhelm.
              </p>
              
              {/* CTA button */}
              <div className="text-center">
                <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300">
                  Learn How We Solve It
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiddenCostSection;