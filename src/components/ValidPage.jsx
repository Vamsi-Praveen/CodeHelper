import useProvider from "@/hooks/useProvider";
import React from "react";
import { Button } from "./ui/button";
import APIForm from "./APIForm";
import useChromeStorage from "@/hooks/useChromeStorage";

const ValidPage = () => {
  const { apiKey } = useProvider();
  if (!apiKey) {
    return <APIForm />;
  }
  const { deleteItem } = useChromeStorage();
  const handleClick = async () => {
    await deleteItem();
  };
  return (
    <div>
      <Button onClick={handleClick}>Plugin Valid</Button>
    </div>
  );
};

export default ValidPage;
