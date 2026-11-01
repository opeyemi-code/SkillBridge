import { Button } from "./Button";
import Card, { CardBody, CardDescription, CardHeader, CardTitle } from "./Card";

function Technologies() {
  return (
    <section className="my-3">
      <Card className="border-0">
        <CardHeader className="p-0 flex-row justify-between">
          <CardTitle className="font-geist font-semibold">
            Skills & Technologies
          </CardTitle>
          <CardDescription className="text-xs font-semibold">
            <span>8</span> Core Focuses
          </CardDescription>
        </CardHeader>
        <CardBody className="p-0 flex gap-1.5 flex-wrap">
          <Button className="bg-main-background text-sm font-medium px-2.5 py-1">
            React
          </Button>
          <Button className="bg-main-background text-sm font-medium px-2.5 py-1">
            React
          </Button>
          <Button className="bg-main-background text-sm font-medium px-2.5 py-1">
            React
          </Button>
          <Button className="bg-main-background text-sm font-medium px-2.5 py-1">
            React
          </Button>
          <Button className="bg-main-background text-sm font-medium px-2.5 py-1">
            React
          </Button>
          <Button className="bg-main-background text-sm font-medium px-2.5 py-1">
            React
          </Button>
          <Button className="bg-main-background text-sm font-medium px-2.5 py-1">
            React
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}
export default Technologies;
