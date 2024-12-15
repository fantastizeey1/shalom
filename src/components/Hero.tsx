import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundLines } from "@/components/ui/background-lines";
import Wishcombo from "./Wishcombo";
import confetti from "canvas-confetti";

const Hero = () => {
  const heroRef = useRef(null);

  // Initialize GSAP animation using useGSAP
  useGSAP(() => ({
    targets: heroRef.current, // Target element
    animation: {
      from: { opacity: 0, y: 50 }, // Initial state
      to: { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, // Final state
    },
    scrollTrigger: {
      trigger: heroRef.current,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  }));

  // Mousemove tilt animation
  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      const { clientX, clientY } = e;
      const tiltX = (clientX / window.innerWidth - 0.5) * 10;
      const tiltY = (clientY / window.innerHeight - 0.5) * 10;

      gsap.to(heroRef.current, {
        rotationY: tiltX,
        rotationX: -tiltY,
        duration: 0.5,
        transformPerspective: 1000, // Adds a 3D perspective
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Trigger confetti every 30 seconds
  useEffect(() => {
    const confettiInterval = setInterval(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 10000); // 10 seconds

    // Cleanup on component unmount
    return () => {
      clearInterval(confettiInterval);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="text-pink-600 bg-black min-h-screen flex items-center justify-center px-4 sm:px-6 "
      id="home"
    >
      <BackgroundBeamsWithCollision>
        <BackgroundLines className="bg-black h-full">
          <div className="flex flex-col  items-center justify-center h-full py-8 space-y-6">
            <Wishcombo />
          </div>
        </BackgroundLines>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default Hero;
