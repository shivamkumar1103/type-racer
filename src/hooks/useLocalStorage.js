import { useState, useEffect } from "react";

function useLocalStorage(initialValue, key) {
  const [value, setValue] = useState(function () {
    const res = localStorage.getItem(key);
    return res ? JSON.parse(res) : initialValue;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );

  return [value, setValue];
}

export default useLocalStorage;
