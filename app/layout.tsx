import "./globals.css";

export const metadata = {
  title: "ontask | simple task management app.",
  description: "simple task maanger app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
