import CategoryComponent from "@/components/categories/CategoryComponent";
import HeroSection from "@/components/herosection/HeroSection";
import PopularProduct from "@/components/popularProduct/PopularProduct";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoryComponent />
    </div>
  );
}
