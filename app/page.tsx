"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirection mivantana mankany amin'ny login raha vao misokatra ny pejy
    router.push("/login");
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-cyan-400 font-mono text-xs">
      Chargement du système Cyber...
    </div>
  );
}
