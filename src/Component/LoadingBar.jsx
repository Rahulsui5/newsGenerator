import React, { useState, useEffect } from "react";

function LoadingBar({ load }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!load) {
      setWidth(0); // reset if not loading
      return;
    }
    setWidth(0); // restart bar when load changes to true
    const interval = setInterval(() => {
      setWidth((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [load]);
  if (!load) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "4px",
        width: `${width}%`,
        backgroundColor: "red",
        transition: "width 0.1s linear",
        zIndex: 9999,
      }}
    />
  );
}

export default LoadingBar;
