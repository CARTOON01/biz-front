"use client";

import { Modal } from "@/components/ui/modal";
import { usestoreModalStore } from "@/hooks/use-store-modal";

export const StoreModal = () => {
    const StoreModal = usestoreModalStore();
    return (
    <Modal title="Create store"
    description="Add a new store to manage products and categories"
    isOpen={StoreModal.isOpen}
    onClose={StoreModal.onClose}
    >
     Future Create from store  
    </Modal>
    );
};