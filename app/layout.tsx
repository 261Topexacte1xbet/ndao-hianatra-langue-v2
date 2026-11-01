import './globals.css';

export const metadata = {
  title: 'Ndao Hianatra Langue',
  description: 'Écosystème d\'apprentissage',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#07090e] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
