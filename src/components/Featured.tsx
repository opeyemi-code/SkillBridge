import Card, { CardBody, CardDescription, CardHeader, CardTitle } from "./Card";
import article from "../assets/images/article.avif";

function Featured() {
  return (
    <section className="my-4">
      <Card className="border-0">
        <CardHeader className="p-0 flex-row justify-between">
          <CardTitle className="font-semiBold text-base font-geist">
            Featured Artifact
          </CardTitle>
          <CardDescription className="text-xs font-semiBold">
            Design System Audit
          </CardDescription>
        </CardHeader>
        <CardBody className="p-0 my-2 relative">
          <img className="rounded-lg block " src={article} alt="" />
          <CardDescription className="font-semiBold text-xs absolute bottom-3 left-3">
            Design token governance system for 40+ multi-brand responsive
            products
          </CardDescription>
        </CardBody>
      </Card>
    </section>
  );
}
export default Featured;
