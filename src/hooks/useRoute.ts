import { useContext } from "react";
import { RouterContext } from "../context/RouterProvider";

export const useRoute = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
};
