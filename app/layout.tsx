import type { Metadata } from "next";
<<<<<<< HEAD
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "GCartoon Creations",
=======
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Urbanist } from "next/font/google";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Store",
  description: "Store",
=======
  title: "Admin Dashboard",
  description: "Cartoon Creations",
>>>>>>> 0e15998 (Fix an error on storeId)
>>>>>>> 34cfcbc684ed8f20bfcea963f4aca66fb7e434d0
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToastProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
=======
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
>>>>>>> 34cfcbc684ed8f20bfcea963f4aca66fb7e434d0
  );
}
