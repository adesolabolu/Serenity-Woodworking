import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimation(
  ref: React.RefObject<HTMLElement | null>,
  type: 'fade-up' | 'fade-in' | 'stagger' = 'fade-up',
  staggerSelector: string = ''
) {
  useEffect(() => {
    if (!ref.current) return;

    // Refresh ScrollTrigger calculations after render to ensure correct offsets
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    let ctx = gsap.context(() => {
      if (type === 'fade-up') {
        gsap.fromTo(ref.current, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 95%',
              once: true,
            },
          }
        );
      } else if (type === 'fade-in') {
        gsap.fromTo(ref.current, 
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 95%',
              once: true,
            },
          }
        );
      } else if (type === 'stagger' && staggerSelector) {
        gsap.fromTo(staggerSelector, 
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 95%',
              once: true,
            },
          }
        );
      }
    }, ref);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [ref, type, staggerSelector]);
}

