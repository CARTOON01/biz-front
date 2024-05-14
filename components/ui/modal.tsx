<<<<<<< HEAD
"use client"
=======
"use client";
>>>>>>> 34cfcbc684ed8f20bfcea963f4aca66fb7e434d0

import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogHeader, 
    DialogTitle 
<<<<<<< HEAD
} from "./dialog";
=======
} from "@/components/ui/dialog";
>>>>>>> 34cfcbc684ed8f20bfcea963f4aca66fb7e434d0

interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children
}) => {
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
};

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                    {description}
                </DialogDescription>
                </DialogHeader>
                <div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
        );
    };
