import { HeroParallax } from "@/components/ui/hero-parallax";

export function NewHero() {
  return (
    <section id="Features">
      <HeroParallax products={products} />
    </section>
  );
}
export const products = [
  {
    title: "Beautiful",
    thumbnail: "/1.svg",
  },
  {
    title: "Lovely",
    thumbnail: "/2.svg",
  },
  {
    title: "Kind",
    thumbnail: "/3.svg",
  },
  {
    title: "Caring",
    thumbnail: "/4.svg",
  },
  {
    title: "Sweet",
    thumbnail: "/5.svg",
  },
  {
    title: "Graceful",
    thumbnail: "/6.svg",
  },
  {
    title: "Charming",
    thumbnail: "/7.svg",
  },
  {
    title: "Radiant",
    thumbnail: "/8.svg",
  },
  {
    title: "Thoughtful",
    thumbnail: "/9.svg",
  },
  {
    title: "Cheerful",
    thumbnail: "/10.svg",
  },
  {
    title: "Adorable",
    thumbnail: "/11.svg",
  },
  {
    title: "Inspiring",
    thumbnail: "/12.svg",
  },
  {
    title: "Joyful",
    thumbnail: "/13.svg",
  },
  {
    title: "Brilliant",
    thumbnail: "/14.svg",
  },
  {
    title: "Amazing",
    thumbnail: "/15.svg",
  },
];
