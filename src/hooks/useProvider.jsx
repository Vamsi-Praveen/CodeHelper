import { useContext } from "react";
import { ProviderContext } from "@/content/Provider";

const useProvider = () => {
  const context = useContext(ProviderContext);
  if (!context) {
    throw new Error("useProvider must be used inside the Provider Context!");
  }
  return context;
};

export default useProvider;
