import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8 ">
      <div className="container flex mx-auto flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <Image
              src="/Codvix-black.svg"
              alt="Codvix Logo"
              width={170}
              height={32}
            />
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 Codvix Tech Private Limited. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-6">
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm font-medium hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-condition"
              className="text-sm font-medium hover:underline"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
