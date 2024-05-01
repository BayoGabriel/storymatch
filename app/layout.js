import { Poppins } from "next/font/google";
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
        <div className="flex flex-col container m-auto">
          <Navbar/>
          {children}
        </div>
      </body>
    </html>
  );
}
