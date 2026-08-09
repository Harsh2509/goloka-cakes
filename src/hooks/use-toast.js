import { useEffect, useState } from 'react';

const listeners = new Set();
let toastId = 0;
const toastState = [];

const emit = () => {
  listeners.forEach((listener) => listener([...toastState]));
};

const removeToast = (id) => {
  const index = toastState.findIndex((item) => item.id === id);
  if (index !== -1) {
    toastState.splice(index, 1);
    emit();
  }
};

const toast = ({ title, description, duration = 4000, variant = 'default' } = {}) => {
  const id = ++toastId;
  toastState.unshift({ id, title, description, variant });
  emit();

  if (duration !== Infinity) {
    window.setTimeout(() => removeToast(id), duration);
  }

  return id;
};

const useToast = () => {
  const [toasts, setToasts] = useState([...toastState]);

  useEffect(() => {
    const listener = (nextToasts) => setToasts(nextToasts);
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);

  return { toast, toasts };
};

export { useToast, toast };