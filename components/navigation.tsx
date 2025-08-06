"use client";

import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navigation() {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBackgroundColor("white");
      } else {
        setBackgroundColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`w-full z-50 transition-colors duration-300 fixed top-0 left-0 right-0 ${
        backgroundColor === "white" ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Image
          src={
            backgroundColor !== "white"
              ? "/logos/white-logo.png"
              : "/logos/black-logo.png"
          }
          alt="Dovartz Smart Home logo"
          width={150}
          height={150}
        />
        <Link
          href="#contact"
          className={`text-gray-700 hover:text-gray-900 font-medium ${
            backgroundColor !== "white" ? "text-white" : "text-gray-700"
          }`}
        >
          Contato
        </Link>
      </div>
    </nav>
  );
}
