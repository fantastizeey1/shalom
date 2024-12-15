import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

type Product = {
  title: string;
  thumbnail: string;
};

type HeroParallaxProps = {
  products: Product[];
};

export const HeroParallax: React.FC<HeroParallaxProps> = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 30, damping: 30, bounce: 100 };

  // Spring animations for each effect
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  // Infinite scroll animations for each row
  const infiniteAnimation = {
    animate: {
      x: [0, -1000], // Move left
    },
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  };

  const infiniteAnimationReverse = {
    animate: {
      x: [0, 1000], // Move right
    },
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  };

  return (
    <div
      ref={ref}
      className="h-[380vh] py-40 overflow-hidden relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        {/* First Row */}
        <motion.div
          className="flex flex-row-reverse space-x-reverse space-x-20 mb-20"
          {...infiniteAnimationReverse}
        >
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>

        {/* Second Row */}
        <motion.div
          className="flex flex-row mb-20 space-x-20"
          {...infiniteAnimation}
        >
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>

        {/* Third Row */}
        <motion.div
          className="flex flex-row-reverse space-x-reverse space-x-20"
          {...infiniteAnimationReverse}
        >
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header: React.FC = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-0 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold uppercase">
        <b className="special-font">
          H<b>a</b>ppy <b>B</b>ir<b>T</b>hd<b>a</b>y, <br /> my <b>D</b>
          <b>E</b>
          <b>a</b>
          <b>R</b>est <b>f</b>riend!
        </b>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8">
        You light up every room with your kindness and joy. Today is all about
        celebrating the amazing person you are, and all the beautiful memories
        we've shared. Wishing you a day filled with love, laughter, and endless
        happiness.
      </p>
    </div>
  );
};

type ProductCardProps = {
  product: Product;
  translate: MotionValue<number>;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  translate,
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <img
        src={product.thumbnail}
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={product.title}
      />

      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
