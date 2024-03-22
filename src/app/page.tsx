import CookieCard from "@/components/CookieCard";
import CookieCarousel from "@/components/CookieCarousel";
import CookieList from "@/components/CookieList";
import H1 from "@/components/H1";
import H2 from "@/components/H2";
import { Button } from "@/components/ui/button";
export default function Home() {
  const products: { title: string; description: string; imageSrc: string }[] = [
    {
      title: "Produit 1",
      description: "Description du produit 1",
      imageSrc: "/cookie.jpg",
    },
    {
      title: "Produit 2",
      description: "Description du produit 2",
      imageSrc: "/cookie.jpg",
    },
    {
      title: "Produit 3",
      description: "Description du produit 3",
      imageSrc: "/cookie.jpg",
    },
    {
      title: "Produit 1",
      description: "Description du produit 1",
      imageSrc: "/cookie.jpg",
    },
    {
      title: "Produit 2",
      description: "Description du produit 2",
      imageSrc: "/cookie.jpg",
    },
    {
      title: "Produit 3",
      description: "Description du produit 3",
      imageSrc: "/cookie.jpg",
    },
    {
      title: "Produit 1",
      description: "Description du produit 1",
      imageSrc: "/cookie.jpg",
    },
    {
      title: "Produit 2",
      description: "Description du produit 2",
      imageSrc: "/cookie.jpg",
    },
    {
      title: "Produit 3",
      description: "Description du produit 3",
      imageSrc: "/cookie.jpg",
    },
    {
      title: "Produit 1",
      description: "Description du produit 1",
      imageSrc: "/cookie.jpg",
    },
    {
      title: "Produit 2",
      description: "Description du produit 2",
      imageSrc: "/cookie.jpg",
    },
  ];
  return (
    <main className="flex flex-col items-center justify-center p-8">
      <H1>Cookie Shop</H1>
      <H2>Cookies</H2>
      <CookieCarousel products={products} />
      <CookieList products={products} />
    </main>
  );
}
