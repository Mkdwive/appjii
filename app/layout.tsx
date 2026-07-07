import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css'; 
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AppJii - The Ultimate Customer Communication Platform",
  description: "Appji empowers growing businesses to streamline communication, enhance team collaboration, and deliver outstanding customer experiences. Connect WhatsApp, email, social media, SMS, and website chats into one centralized workspace for faster, more efficient customer engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Wrap EVERYTHING inside the body to let Lenis track layout sizing accurately */}
        <SmoothScrollProvider>
          <Header />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
