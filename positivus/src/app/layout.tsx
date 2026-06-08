// import type { Metadata } from "next";
// import { Geist } from "next/font/google";
// import Navbar from "../components/layout/Navbar"
// import "./globals.css";

// const geist = Geist({
// subsets: ["latin"],
// });

// export const metadata: Metadata = {
// title: "Positivus",
// description: "Digital marketing agency website",
// };

// export default function RootLayout({
// children,
// }: Readonly<{
// children: React.ReactNode;
// }>) {
// return (<html lang="en"> 
// <head>
//     <link rel="preconnect" href="https://fonts.googleapis.com" />
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//     <link
//       href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
//       rel="stylesheet"
//     />
// </head>
// <body className={geist.className}><Navbar />{children}</body> </html>);
// }

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import SmoothScroll from "../components/utility/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Positivus",
  description: "Digital marketing agency website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <SmoothScroll />
        <Navbar />
        {children}
      </body>
    </html>
  );
}