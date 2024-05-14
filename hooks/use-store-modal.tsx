import { create } from "zustand";

<<<<<<< HEAD
interface usestoreModalStore {
=======
interface useStoreModalStore {
>>>>>>> 34cfcbc684ed8f20bfcea963f4aca66fb7e434d0
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

<<<<<<< HEAD
export const usestoreModalStore = create<usestoreModalStore>((set) =>({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))
=======
export const useStoreModal = create<useStoreModalStore>((set) =>({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));
>>>>>>> 34cfcbc684ed8f20bfcea963f4aca66fb7e434d0
