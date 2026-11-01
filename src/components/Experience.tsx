import { Gauge, ShieldCheck } from "lucide-react";
import Card, {
  CardBody,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./Card";

function Experience() {
  return (
    <section>
      <Card className="border-0">
        <CardHeader className="p-0">
          <CardTitle className="font-geist font-semibold">Experience</CardTitle>
        </CardHeader>
        <CardBody className="p-0">
          <CardContent>
            <CardDescription className="my-2 text-sm leading-5.5">
              5+ years building production applications for independent studios
              and digital agencies. Focused on component library architecture,
              frontend performance audits, and end-to-end design token
              pipelines.
            </CardDescription>
            <div className="flex flex-col space-y-2">
              <div className="flex gap-2 bg-main-background p-2.5 rounded-lg">
                <ShieldCheck className="text-primary" size={28} />
                <div>
                  <CardTitle className="text-sm font-medium">
                    Accessibility Standards Compliance
                  </CardTitle>
                  <CardDescription className="text-xs leading-4.5">
                    Verified WCAG 2.1 AA screen-reader and semantic HTML
                    implementation track record.
                  </CardDescription>
                </div>
              </div>
              <div className="flex gap-2 bg-main-background p-2.5 rounded-lg">
                <Gauge className="text-primary" size={24} />
                <div>
                  <CardTitle className="text-sm font-medium">
                    Performance Focused
                  </CardTitle>
                  <CardDescription className="text-xs leading-4.5">
                    Consistent 95+ Core Web Vitals across delivered web
                    applications.
                  </CardDescription>
                </div>
              </div>
            </div>
          </CardContent>
        </CardBody>
      </Card>
    </section>
  );
}
export default Experience;
