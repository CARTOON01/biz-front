"use client";

import { usestoreModalStore } from "@/hooks/use-store-modal";
import { on } from "events";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = usestoreModalStore((state) => state.onOpen);
  const isOpen = usestoreModalStore((state) => state.isOpen);

useEffect(() => {
  if (!isOpen){
    onOpen();
  }

}, [isOpen, onOpen]);

    return (
      <div className="p-4">
          Root Page
      </div>
    );
  }
  
  export default SetupPage;  

