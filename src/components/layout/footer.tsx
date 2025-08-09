"use client"

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer({ year }: { year: number }) {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image
            src="https://placehold.co/24x24.png"
            alt="Tristan Olson"
            width={24}
            height={24}
            className="rounded-full"
            data-ai-hint="headshot"
          />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {year} Gameplan Financials LLC. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
