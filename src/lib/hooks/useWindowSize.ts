import { useEffect, useState } from 'react';

interface WindowSize {
  width?: number;
  height?: number;
}

/**
 * This function returns the current window size and updates it on window resize.
 * @returns The `useWindowSize` function returns an object containing the current width and height of
 * the browser window. The object has two properties: `width` and `height`, both of which are initially
 * set to `undefined`. The function uses the `useState` and `useEffect` hooks to update the state of
 * the `windowSize` object whenever the browser window is resized. The `useEffect` hook
 */
function useWindowSize(): WindowSize {
  // Initialize state with undefined width/height so server and client renders match

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    /**
     * This function sets the window width and height to state.
     */
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    /* `window.addEventListener('resize', handleResize);` is adding an event listener to the window
    object that listens for the `resize` event. When the window is resized, the `handleResize`
    function is called, which updates the state of the `windowSize` object with the new width and
    height of the window. This allows the `useWindowSize` hook to always return the current size of
    the browser window. */
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup

    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default useWindowSize;
