"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";
import { useEffect } from "react";

export function World() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <section
      id="wishes"
      className=" mt-5 md:mt-0 py-10 md:py-40 dark:bg-black bg-white w-full"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Sending{" "}
          <span className="text-neutral-400">
            {"Birthday Wishes".split("").map((letter, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>{" "}
          from Around the World
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Celebrating your special day with love and joy sent across borders.
          Wishing you happiness and warm greetings no matter where you are!
        </p>
      </div>
      <WorldMap
        dots={[
          // Alaska to Nigeria
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -7.082, lng: 4.6753 }, // Nigeria (Lagos)
          },
          // Brazil to Nigeria
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: -7.082, lng: 4.6753 }, // Nigeria (Lagos)
          },
          // Lisbon to Nigeria
          {
            start: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            end: { lat: -7.082, lng: 4.6753 }, // Nigeria (Lagos)
          },
          // London to Nigeria
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: -7.082, lng: 4.6753 }, // Nigeria (Lagos)
          },
          // New Delhi to Nigeria
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -7.082, lng: 4.6753 }, // Nigeria (Lagos)
          },
          // Vladivostok to Nigeria
          {
            start: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            end: { lat: -7.082, lng: 4.6753 }, // Nigeria (Lagos)
          },
          // Nairobi to Nigeria
          {
            start: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            end: { lat: -7.082, lng: 4.6753 }, // Nigeria (Lagos)
          },
          // United States (Los Angeles) to Nigeria
          {
            start: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
            end: { lat: -7.082, lng: 4.6753 }, // Nigeria (Lagos)
          },
          // Australia (Sydney) to Nigeria
          {
            start: { lat: -33.8688, lng: 151.2093 }, // Sydney
            end: { lat: -7.082, lng: 4.6753 }, // Nigeria (Lagos)
          },
          // Tokyo to Nigeria
          {
            start: { lat: 35.6895, lng: 139.6917 }, // Tokyo
            end: { lat: -7.082, lng: 4.6753 }, // Nigeria (Lagos)
          },
          // Paris to Nigeria
          {
            start: { lat: 48.8566, lng: 2.3522 }, // Paris
            end: { lat: -7.082, lng: 4.6753 }, // Nigeria (Lagos)
          },
          // Cape Town to Nigeria
          {
            start: { lat: -33.9249, lng: 18.4241 }, // Cape Town
            end: { lat: -7.082, lng: 4.6753 }, // Nigeria (Lagos)
          },
          // Canada (Toronto) to Nigeria
          {
            start: { lat: 43.65107, lng: -79.347015 }, // Toronto
            end: { lat: -7.082, lng: 4.6753 }, // Nigeria (Lagos)
          },
          // Germany (Berlin) to Nigeria
          {
            start: { lat: 52.52, lng: 13.405 }, // Berlin
            end: { lat: -7.082, lng: 4.6753 }, // Nigeria (Lagos)
          },
          // Beijing to Nigeria
          {
            start: { lat: 39.9042, lng: 116.4074 }, // Beijing
            end: { lat: -7.082, lng: 4.6753 }, // Nigeria (Lagos)
          },
        ]}
      />
    </section>
  );
}
