import { cards } from "@/lib/constants";

export default function AttractiveBlocksSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tech-grid opacity-5" />

      <div className="box-container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Привлекательные секции
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Современные решения для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:neon-glow group hover:shadow-md shadow-primary"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
