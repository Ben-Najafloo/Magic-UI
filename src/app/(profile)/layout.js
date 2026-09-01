import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";


export const metadata = {
  title: 'Behnam Najafloo | Portfolio & Resume',
  description: 'Official portfolio website of Behnam Najafloo. Showcasing my education, work experience, and projects.',
  keywords: ['Behnam Najafloo', 'Portfolio', 'Software Developer', 'Resume'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Behnam Najafloo | Portfolio',
    description: 'Official portfolio website of Behnam Najafloo.',
    url: 'https://behnam-najafloo.vercel.app',
    siteName: 'Behnam Najafloo Portfolio',
    type: 'website',
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
