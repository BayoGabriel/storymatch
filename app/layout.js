import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/NavBar";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col container m-auto px-10 py-4">
          <Navbar/>
          <Her
          {children}
        </div>
      </body>
    </html>
  );
}
