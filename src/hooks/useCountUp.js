import { useState, useEffect } from 'react';

export default function useCountUp(endVal, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startOnView) return;
    let startTime = null;
    const target = parseFloat(endVal);

    if (isNaN(target)) return;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease out expo
      const easeVal = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeVal * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [endVal, duration, startOnView]);

  return count;
}
