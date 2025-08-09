import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, Briefcase, Award } from "lucide-react";

const services = [
  {
    icon: <Landmark className="h-10 w-10 text-primary" />,
    title: "Tax Services",
    description: "Comprehensive tax planning and preparation services to optimize your financial position and ensure compliance.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Business Registration",
    description: "Streamlined assistance with LLC formation, EIN acquisition, and other essential business registration processes.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Grant Acquisition",
    description: "Expert support in identifying, applying for, and securing grants to fund your business ventures and projects.",
  },
];

export default function Services() {
  return (
    <section id="services" className="container px-4 md:px-6 py-12 md:py-24 bg-card">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Core Services</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We provide a range of expert financial services to help you achieve your goals.
        </p>
      </div>
      <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center p-6">
            <CardHeader className="p-0">
              {service.icon}
              <CardTitle className="mt-4">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-2">
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
