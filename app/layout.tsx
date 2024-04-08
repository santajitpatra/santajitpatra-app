import { Inter } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Footer";
import { customMetadata } from "@/lib/customMetadata";
import GoogleTagManager from "@/components/SEO/GoogleTagManager";
import GoogleTagManagerHead from "@/components/SEO/GoogleTagManagerHead";
import AuthProvider from "@/components/auth/AuthProvider";
import { Toaster } from "@/components/ui/toaster";


const inter = Inter({ subsets: ["latin"] });

export const metadata = customMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // suppressHydrationWarning
    >
      <head>
        <GoogleTagManagerHead />
      </head>
      <body className={`bg-[#0a162f] ${inter.className}`}>
        {/* auth */}

        <AuthProvider>
          <GoogleTagManager />
          {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
          <Navbar />
          <NextTopLoader color="#0e7490" height={4} showSpinner={false} />
          {children}
          <Footer />
          {/* </ThemeProvider> */}
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
