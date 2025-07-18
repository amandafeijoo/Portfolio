// src/utils/useDeviceInfo.js
import { useState, useEffect } from "react";

const useDeviceInfo = () => {
  const [info, setInfo] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio,
  });

  useEffect(() => {
    const update = () =>
      setInfo({
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio,
      });

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return info;
};

export default useDeviceInfo;
