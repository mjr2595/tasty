import NavBar from "@/components/ui/navbar";
import RecipeProvider from "@/context/recipe-context";
import type { Metadata } from "next";
import { Lilita_One, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"], weight: ["500", "600", "700"] });

const lilitaFont = Lilita_One({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Tasty Next",
  description:
    "Curated recipes based on 10+ different cuisines such as Indian, American, Asian and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lilitaFont.className}`}>
        <RecipeProvider>
          <>
            <NavBar />
            {children}
          </>
        </RecipeProvider>
      </body>
    </html>
  );
}
