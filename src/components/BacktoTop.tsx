
import { useState, useEffect } from "react";
import Image from "next/image";
import BackToTopButton from "../../public/BackToTop.svg";

export default function BackToTheTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      window.scrollY > 200 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", handleScrollVisibility);

    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {visible && (
        <button
          className="fixed bottom-5 right-7 z-40 cursor-pointer p-4"
          onClick={() => scrollToTop()}
          aria-label="Scroll to top"
        >
          <Image
            src={BackToTopButton}
            alt="Back to the top button"
            className="z-40"
          />
        </button>
      )}
    </>
  );
}