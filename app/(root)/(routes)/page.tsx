"use client";

<<<<<<< HEAD
import { usestoreModalStore } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = usestoreModalStore((state) => state.onOpen);
  const isOpen = usestoreModalStore((state) => state.isOpen);
=======
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);
>>>>>>> 34cfcbc684ed8f20bfcea963f4aca66fb7e434d0

useEffect(() => {
  if (!isOpen){
    onOpen();
  }

}, [isOpen, onOpen]);

    return null;
  }
  
  export default SetupPage;  

