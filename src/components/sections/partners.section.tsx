import { partners } from "@/lib/constants";

export default function PartnersSection() {
  return (
    <section className="py-16 bg-tech-darker text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Партнёры</h2>
      </div>

      {/* Infinite Scrolling Partners */}
      <div className="relative">
        <div className="flex animate-infinite-scroll space-x-16">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 py-6 bg-primary-foreground/5 backdrop-blur-sm border border-primary/20 rounded-lg hover:border-secondary transition-colors duration-300"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
