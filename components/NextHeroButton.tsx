"use client";

import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { SlArrowDown } from "react-icons/sl";

const NextHeroIcon = () => {
  const [arrowHid, setArrowHid] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const distanceFromTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setArrowHid(distanceFromTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = useCallback(() => {
    buttonRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <button
      type="button"
      className={clsx(
        `absolute bottom-4 z-10 m-auto animate-bounce text-4xl text-white`,
        arrowHid && "opacity-0"
      )}
      aria-label="Click to scroll"
      ref={buttonRef}
      onClick={handleClick}
    >
      <SlArrowDown className="animate-appear-up" />
    </button>
  );
};

export default NextHeroIcon;
