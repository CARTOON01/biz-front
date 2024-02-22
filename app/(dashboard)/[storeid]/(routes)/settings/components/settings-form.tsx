"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Store } from "@prisma/client";
import { Trash } from "lucide-react";

interface SettingsPageProps {
    initialData: Store;
}

export const SettingsForm: React.FC<SettingsPageProps> = ({
    initialData
}) => {
    return (
        <div className="flex items-center justify-between">
            <Heading 
                title="Settings"
                description="Manage your store settings"
            />
            <Button
            variant="destructive"
            size="icon"
            onClick={() => {}}
            >
                <Trash className="h-4 w-4" />
            </Button>
        </div>
    );
};
