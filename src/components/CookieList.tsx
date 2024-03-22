import CookieCard from "./CookieCard";
import { Button } from "./ui/button";

type CookieListProps = {
  products: { title: string; description: string; imageSrc: string }[];
};

export default function CookieList({ products }: CookieListProps) {
  return (
    <div className="w-full max-w-lg grid grid-cols-1 gap-3 m-3 md:grid-cols-3">
      {products.map((product, index) => (
        <CookieCard
          key={index}
          title={product.title}
          description={product.description}
          imageSrc={product.imageSrc}
        >
          <Button>Commander</Button>
        </CookieCard>
      ))}
    </div>
  );
}
