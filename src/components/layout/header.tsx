"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
  ]
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image 
              src="https://placehold.co/40x40.png" 
              alt="Tristan Olson"
              width={40}
              height={40}
              className="rounded-full"
              data-ai-hint="headshot"
            />
            <span className="hidden font-bold sm:inline-block">Gameplan Financials</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <Image 
                    src="https://placehold.co/40x40.png"
                    alt="Tristan Olson"
                    width={40}
                    height={40}
                    className="rounded-full"
                    data-ai-hint="headshot"
                  />
                  <span className="font-bold">Gameplan Financials</span>
                </Link>
                <div className="grid gap-4 py-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Link href="/" className="flex items-center space-x-2 md:hidden">
            <Image
              src="https://placehold.co/40x40.png"
              alt="Tristan Olson"
              width={40}
              height={40}
              className="rounded-full"
              data-ai-hint="headshot"
            />
            <span className="font-bold">Gameplan</span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
             <Button>Schedule Consultation</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
