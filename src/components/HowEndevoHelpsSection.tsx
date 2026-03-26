import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Network, Users } from "lucide-react";

const HowEndevoHelpsSection = () => {
  const cards = [
    {
      icon: Users,
      title: "Human-Centered Support",
      description:
        "ENDevo blends technology with compassionate guidance so employees feel supported through life's hardest moments without adding burden to managers or teams.",
    },
    {
      icon: Network,
      title: "Connected Marketplace",
      description:
        "When action is needed, employees are guided to trusted legal, financial, care, and digital professionals so the right support is available at the right time.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How ENDevo Helps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simpler, more human way to prepare for what matters most
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl"
            >
              <CardContent className="p-8 text-center space-y-5">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-orange/10 flex items-center justify-center">
                  <card.icon className="w-8 h-8 text-brand-orange" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/solution">
            <Button
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 py-3 text-base rounded-full group"
              style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowEndevoHelpsSection;
