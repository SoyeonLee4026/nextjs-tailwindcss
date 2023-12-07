"use client";

import Button from "@/frameworks-and-drivers/components/Button";
import { useEffect, useState } from "react";

export default function Home() {
  const [dark, setDark] = useState("다크모드");

  const toggleDarkMode = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
      setDark("기본모드");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark("다크모드");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="flex flex-col justify-center gap-2">
      <Button color="primary" variant="contained" size="L" onClick={toggleDarkMode} className="w-40">
        버튼 {dark}
      </Button>
      <Button color="primary" variant="contained" fullwidth size="L" disabled>
        버튼
      </Button>
      <Button color="primary" variant="outline" fullwidth size="L">
        버튼
      </Button>
      <Button color="primary" variant="outline" fullwidth size="L" disabled>
        버튼
      </Button>
      <Button color="mono" variant="contained" fullwidth size="L">
        버튼
      </Button>
      <Button color="mono" variant="contained" fullwidth size="L">
        버튼
      </Button>
    </div>
  );
}
