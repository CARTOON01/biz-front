import { create } from "zustand";

interface usestoreModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const usestoreModalStore = create<usestoreModalStore>((set) =>({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))