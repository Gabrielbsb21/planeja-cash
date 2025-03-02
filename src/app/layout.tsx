import type { Metadata } from "next";
import { Providers } from "@/components";

export const metadata: Metadata = {
  title: "Planeja Cash",
  description:
    "PlanejaCash é um planner financeiro digital que ajuda você a organizar suas finanças de forma simples e eficiente. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
