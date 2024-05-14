<<<<<<< HEAD
import { UserButton, auth } from "@clerk/nextjs";
import { MainNav } from "./main-nav";

import StoreSwitcher from "./store-switcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

const Navbar = async () => {
    const { userId } = auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const stores = await prismadb.store.findMany({
        where: {
            userId,
        },
    });

    return ( 
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <StoreSwitcher items={stores} />
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSignOutUrl="/" />
                </div>
=======
import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getcategories from "@/actions/get-categories";

export const revalidate = 0;

const Navbar = async () => {
    const categories = await getcategories();
    return ( 
        <div className="border-b">
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
            <Container>
                <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <p className="font-bold text-xl">STORE</p>
                </Link>
                <MainNav data={categories}/>
            </Container>
>>>>>>> 34cfcbc684ed8f20bfcea963f4aca66fb7e434d0
            </div>
        </div>
     );
}
 
export default Navbar;