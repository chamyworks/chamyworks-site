import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chamyworks.com"),
  title: "Chamyworks",
  description:
    "Chamyworks is a heartfelt studio adding happiness to everyday life through small ideas.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Chamyworks",
    description:
      "Chamyworks is a heartfelt studio adding happiness to everyday life through small ideas.",
    url: "https://chamyworks.com",
    siteName: "Chamyworks",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chamyworks",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chamyworks",
    description:
      "Chamyworks is a heartfelt studio adding happiness to everyday life through small ideas.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf7f1" },
    { media: "(prefers-color-scheme: dark)", color: "#17120f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
