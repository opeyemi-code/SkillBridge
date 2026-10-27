import { ArrowRight, BadgeCheck, Bookmark } from "lucide-react";
import avatar from "../assets/images/avatar.jpg";
import { Badge } from "./Badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardBody,
} from "./Card";
import { ButtonLink, Button } from "./Button";

type ProfessionalCardProp = {
  name: string;
  category: string;
  hourlyRate: number;
  summary: string;
  skills: string[];
  availability: string;
  href: string;
};

function ProfessionalCard({
  name,
  category,
  hourlyRate,
  summary,
  skills,
  availability,
  href,
}: ProfessionalCardProp) {
  return (
    <Card className="rounded-xl border-0 p-5">
      <CardHeader className="flex-row justify-between items-center p-0">
        {" "}
        <div className="flex items-center gap-2">
          <img
            className="w-12 h-12 rounded-full object-cover lg:w-14 lg:h-14"
            src={avatar}
            alt={name}
          />
          <div>
            <CardTitle className="flex items-center text-sm font-semibold gap-1.5 lg:text-base">
              {name}
              <span>
                <BadgeCheck
                  className="bg-primary text-white rounded-full"
                  size={14}
                />
              </span>
            </CardTitle>
            <p className="text-sm text-secondary-text">{category}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <p className="text-sm">
            $<span>{hourlyRate}</span>/hr
          </p>
          <Button
            type="button"
            variant="ghost"
            className="hover:bg-main-background px-1"
            size="sm"
          >
            <Bookmark className="text-[#58605C] hover:text-primary" size={18} />
          </Button>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <CardDescription className="my-2 text-sm text-primary-text lg:text-base">
          {summary}
        </CardDescription>
        <ul className="flex items-center flex-wrap gap-1.5 mt-3">
          {skills.slice(0, 4).map((skill, index) => (
            <li
              key={`${skill}-${index}`}
              className="bg-main-background text-primary-text font-semibold text-xs rounded-md px-2 py-1 lg:text-sm"
            >
              {skill}
            </li>
          ))}
          {skills.length > 4 && (
            <li className="bg-main-background text-xs rounded-md px-2 py-1 lg:text-sm">
              +{skills.length - 3} more
            </li>
          )}
        </ul>
      </CardBody>

      <CardFooter className="justify-between items-center mt-4 p-0">
        <Badge className="bg-transparent" variant="secondary">
          <p className="flex items-center gap-1 text-xs text-primary font-semibold lg:text-sm">
            <span className="inline-block bg-primary w-1.5 h-1.5 rounded-full lg:h-2 lg:w-2"></span>
            {availability}
          </p>
        </Badge>
        <ButtonLink
          variant="link"
          className="flex items-center gap-1 text-primary text-sm hover:no-underline lg:text-base"
          href={href}
        >
          View profile <ArrowRight size={18} />
        </ButtonLink>
      </CardFooter>
    </Card>
  );
}
export default ProfessionalCard;
