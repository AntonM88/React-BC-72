import { useState, useEffect } from "react";

export const useLocalStorage = (key, defoultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(localStorage.getItem(key)) || defoultValue;
    } catch (error) {
      currentValue = defoultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};
