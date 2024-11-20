import Gemini from "/images/gemini.png";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
import useProvider from "@/hooks/useProvider";

const APIForm = () => {
  const [api, setApi] = useState("");
  const { setAPIKey } = useProvider();
  const handleApi = async (e) => {
    e.preventDefault();
    await setAPIKey(api);
  };
  return (
    <div className="w-[300px] flex items-center justify-center flex-col gap-3">
      <img src={Gemini} alt="Gemini Logo" className="w-28 object-fit" />
      <p className="font-medium text-md">Enter your API Key to continue.</p>
      <Input
        placeholder="Enter API Key"
        className="font-medium text-sm"
        autoFocus="on"
        autoComplete="off"
        spellCheck="off"
        onChange={(e) => setApi(e.target.value)}
      />
      <Button className="w-full" disabled={api.length == 0} onClick={handleApi}>
        Submit
      </Button>
      <div className="text-center text-muted-foreground font-medium">
        <p>Don't have an API Key ?</p>
        <p>
          Visit{" "}
          <a
            target="_blank"
            href="https://ai.google.dev"
            className="font-semibold text-black/80 underline underline-offset-1"
          >
            ai.google.dev
          </a>{" "}
          to create one.
        </p>
      </div>
    </div>
  );
};

export default APIForm;
