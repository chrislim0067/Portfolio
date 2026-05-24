"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

interface MessagingContextValue {
  isVisible: boolean;
  isExpanded: boolean;
  isFullscreen: boolean;
  openCompose: () => void;
  toggleCompose: () => void;
  openFullscreen: () => void;
  exitFullscreen: () => void;
  collapse: () => void;
}

const MessagingContext = createContext<MessagingContextValue | null>(null);

export function MessagingProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const panelStateRef = useRef({ isExpanded, isFullscreen });
  panelStateRef.current = { isExpanded, isFullscreen };

  const openCompose = useCallback(() => {
    setIsVisible(true);
    setIsExpanded(true);
  }, []);

  const toggleCompose = useCallback(() => {
    setIsVisible(true);
    const { isExpanded: expanded, isFullscreen: fullscreen } =
      panelStateRef.current;

    if (expanded || fullscreen) {
      setIsExpanded(false);
      setIsFullscreen(false);
      return;
    }

    setIsExpanded(true);
    setIsFullscreen(false);
  }, []);

  const openFullscreen = useCallback(() => {
    setIsVisible(true);
    setIsExpanded(true);
    setIsFullscreen(true);
  }, []);

  const exitFullscreen = useCallback(() => {
    setIsFullscreen(false);
  }, []);

  const collapse = useCallback(() => {
    setIsExpanded(false);
    setIsFullscreen(false);
  }, []);

  const value = useMemo(
    () => ({
      isVisible,
      isExpanded,
      isFullscreen,
      openCompose,
      toggleCompose,
      openFullscreen,
      exitFullscreen,
      collapse,
    }),
    [
      isVisible,
      isExpanded,
      isFullscreen,
      openCompose,
      toggleCompose,
      openFullscreen,
      exitFullscreen,
      collapse,
    ]
  );

  return (
    <MessagingContext.Provider value={value}>
      {children}
    </MessagingContext.Provider>
  );
}

export function useMessaging() {
  const ctx = useContext(MessagingContext);
  if (!ctx) {
    throw new Error("useMessaging must be used within MessagingProvider");
  }
  return ctx;
}
