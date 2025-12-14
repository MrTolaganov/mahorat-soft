import { Bot, Headphones, Smartphone } from "lucide-react";
import { serviceColumns } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 tech-grid opacity-20" />

      {/* Floating Icons */}
      <div className="absolute top-20 right-20 opacity-10">
        <Smartphone className="w-32 h-32 floating-animation" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10">
        <Bot
          className="w-28 h-28 floating-animation"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="box-container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">IT услуги</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Комплексные решения для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {serviceColumns.map((column, index) => {
            const Icon = column.icon;
            return (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-8 hover:bg-primary-foreground/15 transition-all duration-300 hover:neon-glow"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-6">{column.title}</h3>

                {/* Services List */}
                <ul className="space-y-4">
                  {column.services.map((service, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-3 text-primary-foreground/90"
                    >
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-8 py-4">
            <Headphones className="w-6 h-6 text-secondary" />
            <span className="text-lg font-medium">
              И многое другое — свяжитесь с нами для уточнения!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
