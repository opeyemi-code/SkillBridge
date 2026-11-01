import Card, { CardContent, CardDescription, CardTitle } from "./Card";

function About() {
  return (
    <section className="my-2">
      <Card className="border-0">
        <CardTitle className="text-base font-geist">About</CardTitle>
        <CardContent className="mt-0.5">
          <CardDescription className="text-sm text-secondary-text leading-5.5">
            Frontend developer with over 5 years of experience crafting
            accessible, high- performance web applications. Passionate about
            design systems, clean code architectures, and delightful
            micro-interactions. Committed to standard-compliant WCAG 2.1 AA
            accessibility.
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  );
}
export default About;
