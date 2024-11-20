import useChromeStorage from "@/hooks/useChromeStorage";
import { createContext, useEffect, useState } from "react";

export const ProviderContext = createContext(null);

const Provider = ({ children }) => {
  const [isValidPage, setIsValidPage] = useState(true);
  const { apiKey, setAPIKey } = useChromeStorage();
  const checkValidTab = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (!tab?.url?.includes("https://leetcode.com/problems")) {
      setIsValidPage(false);
    }
  };
  useEffect(() => {
    checkValidTab();
  }, []);
  return (
    <ProviderContext.Provider
      value={{ isValidPage, checkValidTab, apiKey, setAPIKey }}
    >
      {children}
    </ProviderContext.Provider>
  );
};

export default Provider;
