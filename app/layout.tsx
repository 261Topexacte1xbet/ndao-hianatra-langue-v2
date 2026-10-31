export const metadata = {
  title: 'Ndao Hianatra Langue',
  description: 'Sehatra fandalinana fiteny',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mg">
      <body>{children}</body>
    </html>
  );
}
