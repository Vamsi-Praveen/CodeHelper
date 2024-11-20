import useProvider from "@/hooks/useProvider";
import React from "react";
import ValidPage from "./components/ValidPage";
import InvalidPage from "./components/InvalidPage";

const App = () => {
  const { isValidPage } = useProvider();
  return (
    <div className="p-4">{isValidPage ? <ValidPage /> : <InvalidPage />}</div>
  );
};

export default App;
