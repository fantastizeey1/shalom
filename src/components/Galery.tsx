import { ParallaxScroll } from "./ui/parallax-scroll";

const images = [
  "/1.svg",
  "/2.svg",
  "/3.svg",
  "/4.svg",
  "/5.svg",
  "/6.svg",
  "/7.svg",
  "/8.svg",
  "/9.svg",
  "/10.svg",
  "/11.svg",
  "/12.svg",
  "/14.svg",
  "/15.svg",
  "/16.svg",
  "/17.svg",
];

const Galery = () => {
  return (
    <section id="gallery">
      <ParallaxScroll images={images} className="custom-class" />
    </section>
  );
};

export default Galery;
