"use client";

import { useEffect, useRef, useState, useSyncExternalStore, useCallback, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

function getReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

export default function RevealOnScroll({
  children,
  delay = 0,
  className = "",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false
  );

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [prefersReducedMotion, handleIntersection]);

  const showContent = prefersReducedMotion || isVisible;

  return (
    <div
      ref={ref}
      className={className}
      style={
        prefersReducedMotion
          ? {}
          : {
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  );
}
