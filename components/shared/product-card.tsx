import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  //ingredients: Ingredient[];
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div  className={cn("p-5", className)}>
      <Link href={`product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">Chichen, cheese, sous</p>

        <div className="flex justify-between items-center mt-4">
            <span className="text-[20px]">
                від <b> {price}uah</b>
            </span>

            <Button>
                <Plus className="w-5 h-5 mr-1">
                   
                </Plus>
                Додати
            </Button>


        </div>
      </Link>
    </div>
  );
};
