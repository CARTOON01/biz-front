"use client";

import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/components/ui/modal";
<<<<<<< HEAD
import { usestoreModalStore } from "@/hooks/use-store-modal";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
=======
import { useStoreModal } from "@/hooks/use-store-modal";
import { useForm } from "react-hook-form";
import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
>>>>>>> 34cfcbc684ed8f20bfcea963f4aca66fb7e434d0
import { useState } from "react";
import toast from "react-hot-toast";



const formSchema = z.object({
    name: z.string().min(1),
});

export const StoreModal = () => {
<<<<<<< HEAD
    const StoreModal = usestoreModalStore();
=======
    const storeModal = useStoreModal();
>>>>>>> 34cfcbc684ed8f20bfcea963f4aca66fb7e434d0

    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
        setLoading(true);

        const response = await axios.post("/api/stores", values);


        window.location.assign (`/${response.data.id}`);
    } catch (error) {
        toast.error("Something went wrong");
    } finally {
        setLoading(false)
    }
}


    return (
    <Modal title="Create store"
    description="Add a new store to manage products and categories"
<<<<<<< HEAD
    isOpen={StoreModal.isOpen}
    onClose={StoreModal.onClose}
=======
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}
>>>>>>> 34cfcbc684ed8f20bfcea963f4aca66fb7e434d0
    >
    <div>
        <div className="space-y-4 py-2 pb-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField 
                        control={form.control}
                        name="name"
<<<<<<< HEAD
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input disabled={loading} placeholder="Biz-Net" {...field}/>
=======
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input disabled={loading} placeholder="Biz-Net" {...field} />
>>>>>>> 34cfcbc684ed8f20bfcea963f4aca66fb7e434d0
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
<<<<<<< HEAD
                        />
=======
                    />
>>>>>>> 34cfcbc684ed8f20bfcea963f4aca66fb7e434d0
                        <div className="pt-4 space-x-2 flex items-center justify-end w-full">
                            <Button 
                                disabled={loading}
                                variant="outline" 
<<<<<<< HEAD
                                onClick={StoreModal.onClose}>
=======
                                onClick={storeModal.onClose}>
>>>>>>> 34cfcbc684ed8f20bfcea963f4aca66fb7e434d0
                                    Cancel
                            </Button>
                            <Button disabled={loading} type="submit">Continue</Button>

                        </div>
                </form>
            </Form>
        </div>
     </div>
    </Modal>
    );
};