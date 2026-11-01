import { MapPin, Bookmark, Check } from "lucide-react";
import { Badge } from "./Badge";
import Card, { CardHeader, CardTitle, CardBody, CardDescription } from "./Card";
import { Button } from "./Button";

function ProfileCard() {
  return (
    <section>
      <Card className="border-0">
        <CardHeader className="p-0 flex flex-row justify-between items-start">
          <div className="relative w-16 h-16 bg-main-background  rounded-full flex justify-center items-center">
            <CardTitle className=" text-primary text-[1.25rem] font-semibold">
              AO
            </CardTitle>
            <Check
              size={18}
              className="absolute bottom-0.5 right-0.5 text-white bg-primary p-1 rounded-full"
            />
          </div>
          <Badge className="gap-1 bg-main-background" variant="secondary">
            <span className="bg-primary w-2 h-2 rounded-full block"></span>
            <h6 className="uppercase text-xs font-medium text-primary lg:text-sm">
              Available Q2
            </h6>
          </Badge>
        </CardHeader>
        <CardBody className="p-0">
          <CardTitle className="text-2xl font-semibold">Amara Okafor</CardTitle>
          <CardDescription className="text-sm my-1">
            Frontend Developer
          </CardDescription>
          <div className="flex gap-1 items-center">
            <CardDescription className="bg-main-background px-2 py-0.5 rounded-sm text-secondary-text">
              Development
            </CardDescription>
            <CardDescription className="flex items-center text-xs">
              <MapPin size={14} /> London, UK{" "}
              <span className="block w-0.5 h-0.5 bg-secondary-text rounded-full mx-0.5"></span>
              Remote
            </CardDescription>
          </div>
          <div className="bg-main-background my-3 flex justify-between px-2.5 py-3 rounded-lg">
            <div className="flex flex-col gap-0.5 w-40">
              <h4 className="text-xs font-semibold text-secondary-text">
                Experience
              </h4>
              <CardDescription className="text-base text-primary-text font-semibold">
                5+ Years
              </CardDescription>
            </div>
            <div className="flex flex-col gap-0.5 w-40">
              <h4 className="text-xs font-semibold text-secondary-text">
                Specialism
              </h4>
              <CardDescription className="text-base text-primary-text font-semibold">
                Design System
              </CardDescription>
            </div>
          </div>
          <Button
            type="button"
            className="bg-main-background text-primary text-sm font-medium w-full flex justify-center hover:bg-[#E5F1EA]"
          >
            <Bookmark size={16} />
            Save profile
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}
export default ProfileCard;
