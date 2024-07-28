import { Container, SortPopup, Title, TopBar } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Всі піцци" size="lg" className="font-extrabold" />

      
      </Container>
      <TopBar/>
    </>
  );
}
