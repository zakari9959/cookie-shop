import { Key } from "react";
import CookieCard from "./CookieCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import React from "react";

type CookieCarouselProps = {
  products: { title: string; description: string; imageSrc: string }[];
};

export default function CookieCarousel({ products }: CookieCarouselProps) {
  return (
    <div className="max-w-52 md:max-w-xs">
      <Carousel>
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index} className="text-center">
              <CookieCard
                title={product.title}
                description={product.description}
                imageSrc={product.imageSrc}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
