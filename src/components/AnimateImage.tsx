import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

type AnimatedImagesProps = {
  images: string[];
  containerClass?: string;
};

const AnimatedImages: React.FC<AnimatedImagesProps> = ({
  images,
  containerClass,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "right bottom",
          end: "center center",
          toggleActions: "play none none reverse",
          scrub: 5, // Smooth transition based on scroll
        },
      });

      timeline.fromTo(
        ".animated-image",
        {
          opacity: 0,
          y: 100, // Start below the viewport
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0, // Float into the viewport
          scale: 1,
          ease: "power2.out",
          stagger: 0.8,
        }
      );

      timeline.to(
        ".animated-image",
        {
          opacity: 0,
          y: -50, // Float away
          scale: 1.2,
          ease: "power3.in",
          stagger: 0.8,
        },
        "+=0.8" // Delay after fully entering
      );
    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx("animated-images-container", containerClass)}
    >
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Animated ${index}`}
            className="animated-image w-32 h-32 object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedImages;
