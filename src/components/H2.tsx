import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function H2({ children }: Props) {
  return <h2 className="text-xl font-bold underline mb-4">{children}</h2>;
}
