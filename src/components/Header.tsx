import Link from "next/link";
import React from "react";
import H1 from "./H1";
import HeaderNav from "./HeaderNav";
export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 flex items-center justify-between p-4 h-full">
      <Link href="/">
        <H1>C🍪🍪kie Shop</H1>
      </Link>
      <HeaderNav />
    </header>
  );
}
