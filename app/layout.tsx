import "@/styles/globals.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZB1 Quiz",
  icons: {
    icon: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
