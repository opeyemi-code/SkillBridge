import { Badge } from "./Badge";

function Hero() {
  return (
    <section className="lg:flex justify-between">
      <div>
        <Badge className="gap-1 bg-transparent" variant="secondary">
          <span className="bg-primary w-2 h-2 rounded-full block animate-pulse"></span>
          <h6 className="uppercase text-xs font-medium text-primary lg:text-sm">
            Verified Network
          </h6>
        </Badge>
        <h1 className="my-1 font-geist text-[2rem] font-semibold tracking-tight leading-10 lg:text-[2.25rem]">
          Find your next collaborator.
        </h1>
        <p className="my-3 text-secondary-text lg:text-lg">
          Discover professionals with the skills you need.
        </p>
      </div>
      <div className="bg-[#E5F1EA] flex items-center gap-4 px-4 py-2 rounded-2xl  md:self-end">
        <div>
          <h6 className="text-secondary-text font-semibold text-xs lg:text-sm">
            Match Rate
          </h6>
          <p className="text-primary-text font-semibold">98.4%</p>
        </div>
        <div className="bg-[#dcdddc] w-px h-10"></div>
        <div>
          <h6 className="text-secondary-text font-semibold text-xs lg:text-sm">
            Vetted Pool
          </h6>
          <p className="text-primary-text font-semibold">1,420</p>
        </div>
      </div>
    </section>
  );
}
export default Hero;
