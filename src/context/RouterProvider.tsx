import { createContext, ReactNode, useEffect, useState } from "react";

interface RouterContextProps {
  path: string;
  navigate: (to: string) => void;
}

export const RouterContext = createContext<RouterContextProps | undefined>(
  undefined
);

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const [path, setPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setPath(to);
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};
