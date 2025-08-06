"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{ textAlign: "center", paddingTop: "4rem" }}>
      <h1>Pagina nu a fost găsită</h1>
      <p>Redirecționare către pagina principală...</p>
    </div>
  );
}
