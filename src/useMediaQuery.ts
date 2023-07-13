import { useCallback, useEffect, useState } from 'react';

const useMediaQuery = (minWidth: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((event: MediaQueryListEvent) => {
    setTargetReached(event.matches);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${minWidth}px)`);
    media.addEventListener('change', updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', updateTarget);
  }, []);

  return targetReached;
};

export default useMediaQuery;
