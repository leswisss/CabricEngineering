"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AnimatedPhrase = () => {
  const phrase =
    "WITH A VISION FOR THE CITY AND THE FUTURE, CABRIC ENGINEERING IS HARMONIZING ARCHITECTURE WITH NATURE, CREATING SUSTAINABLE, ENERGY-EFFICIENT STRUCTURES WHILE EMPLOYING ADVANCED TECHNIQUES TO DELIVER INNOVATIVE, VISUALLY STUNNING DESIGNS THAT EMBODY STRUCTURAL INTEGRITY, DEMONSTRATING OUR COMMITMENT TO NOT JUST BUILDING FOT TODAY BUT PRESERVING FOR TOMORROW.";

  const refs = useRef<HTMLSpanElement[]>([]);
  const refsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimations();
  }, []);

  const createAnimations = () => {
    gsap.to(refs.current, {
      opacity: 1,
      ease: "none",
      stagger: 0.1,
      scrollTrigger: {
        trigger: refsContainer.current,
        start: "top+=50px bottom",
        end: "bottom+=500px bottom",
        scrub: true,
      },
    });
  };

  const splitwords = () => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={`word-${i}`}>{letters}</p>);
    });

    return body;
  };

  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = [];
    word.split("").forEach((letter, index) => {
      letters.push(
        <span ref={(el) => el && refs.current.push(el)} key={`letter-${index}`}>
          {letter}
        </span>
      );
    });

    return letters;
  };
  return (
    <div ref={refsContainer} className="split__words">
      {splitwords()}
    </div>
  );
};

export default AnimatedPhrase;
