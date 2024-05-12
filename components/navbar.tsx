import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";

const Navbar = () => {
    return ( 
        <div className="border-b">
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
            <Container>
                <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <p className="font-bold text-xl">STORE</p>
                </Link>
                <MainNav data={[]}/>
            </Container>
            </div>
        </div>
     );
}
 
export default Navbar;