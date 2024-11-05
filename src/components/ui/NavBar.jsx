import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });


  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "#DDDDD5" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

        toggleActions: "restart reverse restart reverse",
      });
    });

  });

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      {/* logo */}
      <a href="#hero" aria-label="Logo" className="z-50">
        <svg
          ref={logo}
          width="80"
          height="45"
          viewBox="0 0 121 45"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M845 1761 c-7 -12 1 -17 43 -26 l32 -7 0 -278 c0 -318 7 -354 82
-436 60 -65 123 -88 243 -89 90 0 106 3 158 29 38 18 69 43 88 69 53 74 59
113 59 416 l0 276 40 17 c65 27 50 38 -55 38 -73 0 -95 -3 -95 -13 0 -8 18
-20 40 -27 l40 -13 0 -276 c0 -286 -5 -325 -43 -381 -36 -54 -88 -75 -188 -75
-75 0 -90 3 -122 25 -20 13 -46 43 -59 65 -22 39 -23 48 -26 347 l-3 307 35 7
c21 3 36 12 36 20 0 11 -29 14 -149 14 -83 0 -152 -4 -156 -9z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M845 1761 c-7 -12 1 -17 43 -26 l32 -7 0 -278 c0 -318 7 -354 82
            -436 60 -65 123 -88 243 -89 90 0 106 3 158 29 38 18 69 43 88 69 53 74 59
            113 59 416 l0 276 40 17 c65 27 50 38 -55 38 -73 0 -95 -3 -95 -13 0 -8 18
            -20 40 -27 l40 -13 0 -276 c0 -286 -5 -325 -43 -381 -36 -54 -88 -75 -188 -75
            -75 0 -90 3 -122 25 -20 13 -46 43 -59 65 -22 39 -23 48 -26 347 l-3 307 35 7
            c21 3 36 12 36 20 0 11 -29 14 -149 14 -83 0 -152 -4 -156 -9z"
          />
        </svg>
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span>about</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block">
          <span>services</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        {/* <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Let&apos;s Talk.</span>
          </span>
        </a> */}
        <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="/src/assets/images/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Resume</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
