import { useEffect } from 'react';

export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const checkElementVisibility = (el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // If element is in viewport or above it (already scrolled past)
      if (rect.top <= windowHeight * 0.95 && rect.bottom >= 0) {
        el.classList.add('reveal-active');
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -10px 0px',
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
      elements.forEach((el) => {
        observer.observe(el);
        checkElementVisibility(el);
      });
    };

    observeAll();

    // Re-check after slight delays for layout shifts / animations
    const t1 = setTimeout(observeAll, 100);
    const t2 = setTimeout(observeAll, 400);

    // Watch for DOM changes (such as navigating back from project detail)
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, deps);
}
