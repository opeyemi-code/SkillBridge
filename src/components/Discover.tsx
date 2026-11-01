// Discovery.tsx
import { Check } from "lucide-react";
import TalentCard from "./TalentCard";
import professionals from "../data/professionals.json";
import { PROFESSIONALS_PER_PAGE } from "./Pagination";

type DiscoverProps = {
  currentPage: number;
};

function Discover({ currentPage }: DiscoverProps) {
  const startIndex = (currentPage - 1) * PROFESSIONALS_PER_PAGE;

  const endIndex = startIndex + PROFESSIONALS_PER_PAGE;

  const currentProfessionals = professionals.slice(startIndex, endIndex);

  return (
    <section className="my-4">
      <div className="flex flex-col gap-1.5 md:justify-between md:flex-row">
        <div className="flex items-center gap-1.5">
          <h4 className="text-[primary-text] font-semibold text-sm lg:text-base">
            Showing {professionals.length} verified professionals
          </h4>

          <div className="w-1 h-1 rounded-full bg-[#58605C]" />

          <p className="text-sm text-[#58605C] lg:text-base">Updated 10m ago</p>
        </div>

        <div>
          <p className="flex items-center gap-1.5 text-xs text-secondary-text lg:text-sm">
            <Check className="bg-primary text-white" size={14} />
            Available this month only
          </p>
        </div>
      </div>

      <ul className="my-4 flex flex-col gap-5">
        {currentProfessionals.map((professional) => (
          <li key={professional.id}>
            <article className="group transition-all duration-200 shadow-sm">
              <TalentCard
                name={professional.name}
                category={professional.category}
                hourlyRate={professional.hourlyRate}
                summary={professional.bio}
                skills={professional.skills}
                availability={professional.availability}
              />
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Discover;
