import type { Metadata, Viewport } from "next";
import "../globals.css";

const siteDescription =
  "작은 아이디어에 진심을 담아, 일상에 행복을 더하는 작업실";

export const metadata: Metadata = {
  metadataBase: new URL("https://chamyworks.com"),
  title: "Chamyworks",
  description: siteDescription,
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Chamyworks",
    description: siteDescription,
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
    description: siteDescription,
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
