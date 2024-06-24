import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrei Andronachi",
  description: "Andrei Andronachi's portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative shadow-md bg-background-light bg-no-repeat bg-cover min-h-dvh dark:bg-background-dark`}
      >
        <ThemeProvider>
          <div className="flex absolute left-0 right-0 top-0 bottom-0 m-auto h-[95%] w-[95%] md:h-min md:w-min md:min-w-[80%] md:min-h-[80%] md:max-w-[90%] md:max-h-[90%] shadow-md bg-background-container-light dark:bg-background-container-dark">
            <Navigation />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
