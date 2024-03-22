import HeaderLink from "./HeaderLink";
import { Home, Cookie, ShoppingBasket, LogIn } from "lucide-react";

type Props = {};

export default function HeaderNav({}: Props) {
  const headerLink = [
    { href: "/", icon: <Home />, text: "Accueil" },
    { href: "/cookie", icon: <Cookie />, text: "Cookies" },
    { href: "/cart", icon: <ShoppingBasket />, text: "Mon Panier" },
    { href: "/login", icon: <LogIn />, text: "Connexion" },
  ];

  return (
    <div className="flex gap-4">
      {headerLink.map((link, index) => (
        <HeaderLink
          key={index}
          href={link.href}
          icon={link.icon}
          text={link.text}
        />
      ))}
    </div>
  );
}
