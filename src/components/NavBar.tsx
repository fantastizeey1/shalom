import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdHistoryEdu } from "react-icons/md";

interface NavItem {
  name: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  { name: "Nexus", icon: <AiOutlineHome /> },
  { name: "Features", icon: <FaRegLightbulb /> },
  { name: "Story", icon: <MdHistoryEdu /> },
  { name: "About", icon: <AiOutlineInfoCircle /> },
  { name: "Contact", icon: <FiPhoneCall /> },
];

const NavBar: React.FC = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  const { y: currentScrollY } = useWindowScroll();

  // Function to toggle audio playback
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Effect to handle audio playback
  useEffect(() => {
    if (audioElementRef.current) {
      audioElementRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
  }, []); // Run on component mount

  // Effect to manage audio state
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current?.play();
    } else {
      audioElementRef.current?.pause();
    }
  }, [isAudioPlaying]);

  // Scroll effect to show/hide navigation
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // Animation effect for navigation visibility
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full text-white -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/logofan.png" alt="logo" className="w-10" />
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.name.toLowerCase()}`}
                  className="nav-hover-btn"
                  aria-label={item.name}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex space-x-6 md:hidden">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.name.toLowerCase()}`}
                  className="text-xl text-white"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
              aria-label={isAudioPlaying ? "Pause audio" : "Play audio"}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/Happyb.mp3"
                loop
              />

              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
