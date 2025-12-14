import { getFeaturedProjects } from "@/actions/project.action";
import ProjectCard from "@/app/admin/_components/project-card";
import PortfolioTitle from "./portfolio-title";

export default async function PortfolioSection() {
  let featuredProjects = [];
  
  try {
    featuredProjects = await getFeaturedProjects();
  } catch (error) {
    // Database bo'lmasa yoki xato bo'lsa, section ko'rinmaydi
    console.error("Error fetching featured projects:", error);
    return null;
  }

  if (featuredProjects.length === 0) return null;

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="box-container mx-auto">
        <PortfolioTitle />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
