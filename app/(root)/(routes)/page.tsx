"use client";

import { usestoreModalStore } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = usestoreModalStore((state) => state.onOpen);
  const isOpen = usestoreModalStore((state) => state.isOpen);

useEffect(() => {
  if (!isOpen){
    onOpen();
  }

}, [isOpen, onOpen]);

    return null;
  }
  
  export default SetupPage;  

