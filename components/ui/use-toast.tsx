"use client"

import { useState, useEffect } from "react";

// Tipagem básica (corrigida)
export type Toast = {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  duration?: number | typeof Infinity; // ✅ agora aceita Infinity (número), não string
  dismiss: () => void;
  update: (props: Partial<Omit<Toast, 'id' | 'update' | 'dismiss'>>) => void;
};

type ToastState = {
  toasts: Toast[];
};

const TOAST_LIMIT = 1;

let count = 0;
function generateId(): string {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

const toastStore = {
  state: {
    toasts: [],
  } as ToastState,
  listeners: [] as ((state: ToastState) => void)[],
  
  getState: () => toastStore.state,
  
  setState: (nextState: Partial<ToastState> | ((state: ToastState) => ToastState)) => {
    if (typeof nextState === 'function') {
      toastStore.state = nextState(toastStore.state);
    } else {
      toastStore.state = { ...toastStore.state, ...nextState } as ToastState;
    }
    toastStore.listeners.forEach(listener => listener(toastStore.state));
  },
  
  subscribe: (listener: (state: ToastState) => void) => {
    toastStore.listeners.push(listener);
    return () => {
      toastStore.listeners = toastStore.listeners.filter(l => l !== listener);
    };
  }
};

export const toast = ({ ...props }: Partial<Omit<Toast, 'id' | 'update' | 'dismiss'>>) => {
  const id = generateId();

  const update: Toast['update'] = (newProps) =>
    toastStore.setState((state) => ({
      ...state,
      toasts: state.toasts.map((t) =>
        t.id === id ? { ...t, ...newProps } as Toast : t
      ),
    }));

  const dismiss = () => toastStore.setState((state) => ({
    ...state,
    toasts: state.toasts.filter((t) => t.id !== id),
  }));

  toastStore.setState((state) => ({
    ...state,
    toasts: [
      { ...props, id, dismiss, update } as Toast,
      ...state.toasts,
    ].slice(0, TOAST_LIMIT),
  }));

  return { id, dismiss, update };
};

export function useToast() {
  const [state, setState] = useState(toastStore.getState());
  
  useEffect(() => {
    const unsubscribe = toastStore.subscribe((newState) => {
      setState(newState);
    });
    return unsubscribe;
  }, []);
  
  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    state.toasts.forEach((t) => {
      if (t.duration === Infinity) return; // ✅ Infinity numérico
      const duration = t.duration || 5000;
      const timeout = setTimeout(() => {
        t.dismiss();
      }, duration);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [state.toasts]);

  return { toast, toasts: state.toasts };
}
