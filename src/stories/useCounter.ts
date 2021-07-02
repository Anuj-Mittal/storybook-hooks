import { useState, useEffect } from "react";

export interface CounterActions {
  inc: (delta?: number) => void;
  dec: (delta?: number) => void;
  get: () => number;
  set: (value: number) => void;
  reset: () => void;
}
export const useCounter = (
  initialValue: number = 0,
  min: number | null = null,
  max: number | null = null
): [number, CounterActions] => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    if (max !== null) {
      setValue((prevValue) => Math.min(prevValue, max));
    }
    if (min !== null) {
      setValue((prevValue) => Math.max(prevValue, min));
    }
  }, [max, min]);

  const inc = (delta?: number) => {
    if (delta) {
      setValue((prevValue) => prevValue + delta);
    } else {
      setValue((prevValue) => prevValue + 1);
    }
    if (max !== null) {
      setValue((prevValue) => Math.min(prevValue, max));
    }
  };

  const dec = (delta?: number) => {
    if (delta) {
      setValue((prevValue) => prevValue - delta);
    } else {
      setValue((prevValue) => prevValue - 1);
    }
    if (min !== null) {
      setValue((prevValue) => Math.max(prevValue, min));
    }
  };

  const get = () => {
    return value;
  };

  const set = (newValue: number) => {
    setValue(newValue);
    if (max !== null) {
      setValue((prevValue) => Math.min(prevValue, max));
    }
    if (min !== null) {
      setValue((prevValue) => Math.max(prevValue, min));
    }
  };

  const reset = () => {
    if (initialValue) {
      setValue(initialValue);
    } else {
      setValue(0);
    }
    if (max !== null) {
      setValue((prevValue) => Math.min(prevValue, max));
    }
    if (min !== null) {
      setValue((prevValue) => Math.max(prevValue, min));
    }
  };
  return [value, { inc, dec, get, set, reset }];
};
