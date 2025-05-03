import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: "I'm Aman 👋 Full-Stack Developer | Freelancer — I build scalable web applications and solve real-world problems. Currently available for freelance projects and remote job opportunities.",
  openGraph: {
    title: `${DATA.name} | Full-Stack Developer & Freelancer`,
    description: "I'm Aman 👋 Full-Stack Developer | Freelancer — I build scalable web applications and solve real-world problems. Currently available for freelance projects and remote job opportunities.",
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${DATA.name} - Full-Stack Developer & Freelancer`,
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} | Full-Stack Developer & Freelancer`,
    card: "summary_large_image",
    description: "I'm Aman 👋 Full-Stack Developer | Freelancer — I build scalable web applications and solve real-world problems.",
    images: ['/og.png'],
  },
  verification: {
    google: "",
    yandex: "",
  },
  alternates: {
    canonical: DATA.url,
  },
  authors: [{ name: DATA.name, url: DATA.url }],
  keywords: ["Full-Stack Developer", "Freelancer", "Web Developer", "React Developer", "NextJS Developer", "Frontend Developer", "Backend Developer", "JavaScript Developer", "Aman Raj", "Software Engineer", "Freelance Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable,
          spaceGrotesk.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
