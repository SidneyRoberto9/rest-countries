import { useEffect, useState } from 'react';

function getStorageValue(key: string, defaultValue: any) {
  const saved = localStorage.getItem(key);
  let initial;
  if (saved) {
    initial = JSON.parse(saved);
  }
  return initial || defaultValue;
}

export function useLocalStorage(key: string, defaultValue: any) {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
