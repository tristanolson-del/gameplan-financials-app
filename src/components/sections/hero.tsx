import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="container flex flex-col md:flex-row items-center gap-8 px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary">
          Your Partner in Financial Success
        </h1>
        <p className="max-w-[600px] mx-auto md:mx-0 text-muted-foreground md:text-xl">
          Navigate the complexities of finance with confidence. Gameplan Financials provides expert guidance in taxes, business registration, and grant acquisition to fuel your growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button size="lg" asChild>
            <Link href="#contact">Schedule Consultation</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#services">Learn More</Link>
          </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image
          src="https://placehold.co/600x400.png"
          alt="Financial planning meeting"
          width={600}
          height={400}
          className="rounded-xl shadow-2xl"
          data-ai-hint="financial planning meeting"
        />
      </div>
    </section>
  );
}
