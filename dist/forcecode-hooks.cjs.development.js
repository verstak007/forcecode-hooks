'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

var useMediaQuery = function useMediaQuery(minWidth) {
  var _useState = react.useState(false),
    targetReached = _useState[0],
    setTargetReached = _useState[1];
  var updateTarget = react.useCallback(function (event) {
    setTargetReached(event.matches);
  }, []);
  react.useEffect(function () {
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
  var ref = react.useRef();
  react.useEffect(function () {
    ref.current = value;
  });
  return ref.current;
};

exports.useMediaQuery = useMediaQuery;
exports.usePrevious = usePrevious;
//# sourceMappingURL=forcecode-hooks.cjs.development.js.map
