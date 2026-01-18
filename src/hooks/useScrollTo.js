"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

export const useScrollTo = (elementId, offset = 120) => {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToElement = useCallback(() => {
    const element = document.getElementById(elementId);
    if (element) {
      const top =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [elementId, offset]);

  const scrollTo = useCallback(() => {
    if (pathname === "/") {
      scrollToElement();
    } else {
      router.push("/");
      setTimeout(() => {
        scrollToElement();
      }, 150);
    }
  }, [pathname, router, scrollToElement]);

  return scrollTo;
};
