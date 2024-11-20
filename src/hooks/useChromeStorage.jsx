import { useState, useEffect } from "react";

const useChromeStorage = () => {
  const [apiKey, setApiKey] = useState(null);

  useEffect(() => {
    const fetchAPIKey = async () => {
      try {
        const result = await chrome.storage.local.get("api_key");
        setApiKey(result["api_key"] || null);
      } catch (error) {
        console.error("Error retrieving API key from storage:", error);
      }
    };
    fetchAPIKey();
  }, []);

  const setAPIKey = async (apiKey) => {
    try {
      await chrome.storage.local.set({ api_key: apiKey });
      setApiKey(apiKey);
    } catch (error) {
      console.error("Error setting API key in storage:", error);
    }
  };

  const deleteItem = async () => {
    try {
      await chrome.storage.local.remove("api_key");
    } catch (error) {
      console.error("Error deleting API key in storage:", error);
    }
  };

  return {
    apiKey,
    setAPIKey,
    deleteItem,
  };
};

export default useChromeStorage;
