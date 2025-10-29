"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky flex top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 mx-auto items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Image
            src="/Codvix-black.svg"
            alt="Codvix Logo"
            width={170}
            height={32}
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/#products"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Products
          </Link>
          <Link
            href="/#founders"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Founders
          </Link>
          <Link
            href="/#careers"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Careers
          </Link>
          <Link
            href="/talent-pool"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Join Us
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex">
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8 p-4">
                <Link
                  href="#about"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="#products"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="#founders"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Founders
                </Link>
                <Link
                  href="#careers"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="/talent-pool"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Join Us
                </Link>

                <Button className="mt-4">
                  <Link
                    href="#contact"
                    className="text-lg font-medium transition-colors"
                  >
                    Contact
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
