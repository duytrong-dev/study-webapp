import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

const myFont = localFont({
  src: [
    {
      path: "./fonts/Kodchasan-ExtraLight.ttf",
      style: "extra-light",
      weight: "200",
    },
    {
      path: "./fonts/Kodchasan-Light.ttf",
      style: "light",
      weight: "300",
    },
    {
      path: "./fonts/Kodchasan-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/Kodchasan-Medium.ttf",
      style: "medium",
      weight: "500",
    },
    {
      path: "./fonts/Kodchasan-SemiBold.ttf",
      style: "semibold",
      weight: "600",
    },
    {
      path: "./fonts/Kodchasan-Bold.ttf",
      style: "bold",
      weight: "700",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Trang chủ",
};

export default function RootLayout( {children} : Readonly<{ children: React.ReactNode }> ) {
  return (
    <html lang="en">
      <body className={`${myFont.className} flex justify-center items-center antialiased`}>
        {children}
      </body>
    </html>
  )
}
