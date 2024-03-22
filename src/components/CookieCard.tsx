import Image from "next/image";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface CookieCardProps {
  title: string;
  description: string;
  imageSrc: string;
  children?: React.ReactNode;
}

const CookieCard: React.FC<CookieCardProps> = ({
  title,
  description,
  imageSrc,
  children,
}) => {
  return (
    <Card className="p-4 flex flex-col">
      <Image
        src={imageSrc}
        width={200}
        height={200}
        alt="a cookie"
        className="w-full"
      />
      <p className="text-xl my-4">{title}</p>
      <p>{description}</p>
      {children}
    </Card>
  );
};

export default CookieCard;
