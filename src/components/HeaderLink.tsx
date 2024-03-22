import Link from "next/link";
import { ReactNode } from "react";

interface HeaderLinkProps {
  href: string;
  icon: ReactNode;
  text: string;
}

export default function HeaderLink({ href, icon, text }: HeaderLinkProps) {
  return (
    <Link href={href}>
      <div className="flex items-center gap-2 cursor-pointer">
        {icon}
        <span className="hidden sm:inline">{text}</span>
      </div>
    </Link>
  );
}
