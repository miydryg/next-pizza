import {
  Container,
  Filters,
  SortPopup,
  Title,
  TopBar,
} from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Всі піцци" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={"Піци"}
                items={[
                  {
                    id: 1,
                    name: "CheeseBurger Pizza",
                    price: 400,
                    imageUrl:
                      "https://gorillazz.pizza/image/cache/catalog/tovari/pizza/05-214x214.png",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 12,
                    name: "CheeseBurger Pizza",
                    price: 400,
                    imageUrl:
                      "https://gorillazz.pizza/image/cache/catalog/tovari/pizza/05-214x214.png",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 13,
                    name: "CheeseBurger Pizza",
                    price: 400,
                    imageUrl:
                      "https://gorillazz.pizza/image/cache/catalog/tovari/pizza/05-214x214.png",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 14,
                    name: "CheeseBurger Pizza",
                    price: 400,
                    imageUrl:
                      "https://gorillazz.pizza/image/cache/catalog/tovari/pizza/05-214x214.png",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 15,
                    name: "CheeseBurger Pizza",
                    price: 400,
                    imageUrl:
                      "https://gorillazz.pizza/image/cache/catalog/tovari/pizza/05-214x214.png",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 16,
                    name: "CheeseBurger Pizza",
                    price: 400,
                    imageUrl:
                      "https://gorillazz.pizza/image/cache/catalog/tovari/pizza/05-214x214.png",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title={"Комбо"}
                items={[
                  {
                    id: 1,
                    name: "CheeseBurger Pizza",
                    price: 400,
                    imageUrl:
                      "https://gorillazz.pizza/image/cache/catalog/tovari/pizza/05-214x214.png",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 12,
                    name: "CheeseBurger Pizza",
                    price: 400,
                    imageUrl:
                      "https://gorillazz.pizza/image/cache/catalog/tovari/pizza/05-214x214.png",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 13,
                    name: "CheeseBurger Pizza",
                    price: 400,
                    imageUrl:
                      "https://gorillazz.pizza/image/cache/catalog/tovari/pizza/05-214x214.png",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 14,
                    name: "CheeseBurger Pizza",
                    price: 400,
                    imageUrl:
                      "https://gorillazz.pizza/image/cache/catalog/tovari/pizza/05-214x214.png",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 15,
                    name: "CheeseBurger Pizza",
                    price: 400,
                    imageUrl:
                      "https://gorillazz.pizza/image/cache/catalog/tovari/pizza/05-214x214.png",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 61,
                    name: "CheeseBurger Pizza",
                    price: 400,
                    imageUrl:
                      "https://gorillazz.pizza/image/cache/catalog/tovari/pizza/05-214x214.png",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
