import { useState, useCallback, useEffect, useRef } from 'react';

var useMediaQuery = function useMediaQuery(minWidth) {
  var _useState = useState(false),
    targetReached = _useState[0],
    setTargetReached = _useState[1];
  var updateTarget = useCallback(function (event) {
    setTargetReached(event.matches);
  }, []);
  useEffect(function () {
    var media = window.matchMedia("(min-width: " + minWidth + "px)");
    media.addEventListener('change', updateTarget);
    if (media.matches) {
      setTargetReached(true);
    }
    return function () {
      return media.removeEventListener('change', updateTarget);
    };
  }, []);
  return targetReached;
};

var usePrevious = function usePrevious(value) {
  var ref = useRef();
  useEffect(function () {
    ref.current = value;
  });
  return ref.current;
};

export { useMediaQuery, usePrevious };
//# sourceMappingURL=forcecode-hooks.esm.js.map
