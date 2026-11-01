import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "../components/Button";
import ProfileCard from "../components/ProfileCard";
import Featured from "../components/Featured";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";

function ProfessionalDetailedPage() {
  return (
    <main className="p-4 flex-1">
      <ButtonLink
        href="/"
        variant="link"
        className="hover:no-underline px-0 my-2"
      >
        <ArrowLeft />
        Back to Professionals
      </ButtonLink>

      <ProfileCard />
      <Featured />
      <About />
      <Technologies />
      <Experience />
      <Portfolio />
    </main>
  );
}
export default ProfessionalDetailedPage;
