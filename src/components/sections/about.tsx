import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const teamMembers = [
  {
    name: "Tristan Olson",
    role: "CEO & Lead Tax Strategist",
    avatar: "https://placehold.co/96x96.png",
  },
];

export default function About() {
  return (
    <section id="about" className="container px-4 md:px-6 py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">About Gameplan Financials</h2>
          <p className="text-muted-foreground">
            Gameplan Financials LLC was founded with a single mission: to provide small businesses and individuals with the high-quality financial expertise they need to thrive. We believe that a solid financial strategy is the bedrock of success, and we're passionate about helping our clients build their futures with confidence.
          </p>
          <p className="text-muted-foreground">
            Our team is comprised of seasoned professionals with deep experience across the financial spectrum. We are more than just consultants; we are your partners, dedicated to understanding your unique situation and crafting tailored solutions.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://placehold.co/500x500.png"
            alt="Office team"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
            data-ai-hint="modern office collaboration"
          />
        </div>
      </div>
      
      <div className="mt-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">Meet Our Team</h3>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            The experts dedicated to your financial success.
          </p>
        </div>
        <div className="mx-auto grid gap-8 sm:grid-cols-1 lg:grid-cols-1 mt-12 max-w-sm">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center flex flex-col items-center justify-start p-6">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardHeader className="p-0">
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-1">
                <p className="text-primary font-semibold">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
