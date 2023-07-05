import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className={`${inter.className} h-full`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
