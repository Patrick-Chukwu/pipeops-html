import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const CountUp = ({ start = 30, end = 50, interval = 1000 }) => {
  const [count, setCount] = useState(start);
  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger the count once
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    let timer;
    if (inView && count < end) {
      timer = setTimeout(() => setCount(count + 1), interval);
    }
    return () => clearTimeout(timer);
  }, [inView, count, end, interval]);

  return (
    <div ref={ref}>
      <h1>{count}</h1>
    </div>
  );
};

export default CountUp;
