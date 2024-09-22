import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { cn, constructMetadata } from "@/lib/utils"
import { Analytics } from "@/components/analytics";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import "./globals.css";


const fontSans = Inter({
  subsets : ["latin"],
  variable: "--font-sans",
});


const fontHeading = localFont({
  src: "../styles/assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = constructMetadata;

export const viewport = {
    themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head />
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        fontHeading.variable
      )}
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
        {children}
        <Analytics />
        <Toaster />
        <TailwindIndicator />
      </ThemeProvider>
    </body>
  </html>
  )
}