"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";

const NextHeroIcon = () => {
  const [arrowHid, setArrowHid] = useState(false);

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

  return (
    <SlArrowDown
      className={clsx(
        `absolute bottom-4 z-10 m-auto animate-bounce text-4xl `,
        arrowHid && "opacity-0"
      )}
    />
  );
};

export default NextHeroIcon;
