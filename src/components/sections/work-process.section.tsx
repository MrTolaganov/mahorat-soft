import { steps } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

export default function WorkProcessSection() {
  return (
    <section id="work-process" className="py-24 bg-background">
      <div className="box-container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Этапы работы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Прозрачный процесс от идеи до запуска
          </p>
        </div>

        <div className="grid md:grid-cols-6 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecting Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30" />
              )}

              {/* Card */}
              <div className="min-h-60 relative bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-md hover:neon-glow hover:shadow-primary">
                {/* Number Badge */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 neon-glow">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>

                {/* Check Icon */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle2 className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
