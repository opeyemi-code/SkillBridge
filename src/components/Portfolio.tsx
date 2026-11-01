import { Globe, SquareArrowOutUpRight } from "lucide-react";
import Card, { CardBody, CardDescription, CardHeader, CardTitle } from "./Card";
import { ButtonLink } from "./Button";

function Portfolio() {
  return (
    <section className="my-3">
      <Card className="border-0">
        <CardHeader className="p-0">
          <CardTitle className="font-geist font-semibold">Portfolio</CardTitle>
        </CardHeader>
        <CardBody className="p-0">
          <ButtonLink
            href="#"
            className="group my-2 bg-main-background p-3.5 rounded-lg w-full h-15 justify-between hover:bg-main-background"
          >
            <div className="flex gap-2 items-center h-9">
              <span className="bg-[#E5F1EA] p-3 rounded-md group-hover:bg-primary">
                <Globe
                  size={16}
                  className="text-primary group-hover:text-white"
                />
              </span>
              <div>
                <h4 className="text-sm font-medium group-hover:text-primary">
                  View portfolio
                </h4>
                <CardDescription className="text-xs">
                  amaraokafor.dev
                </CardDescription>
              </div>
            </div>
            <SquareArrowOutUpRight
              size={16}
              className="text-secondary-text group-hover:text-primary"
            />
          </ButtonLink>
        </CardBody>
      </Card>
    </section>
  );
}
export default Portfolio;
