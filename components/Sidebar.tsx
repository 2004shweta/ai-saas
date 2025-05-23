"use client";

import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";


const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

const Sidebar = () => {
  return (
    <>
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
        <div className="px-3 py-2 flex-1">
          <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image
               fill
               alt="Logo"
               src="/logo.png"
            />
          </div>
          </Link>
          <h1 className={ cn ("text-2xl front-bold", montserrat.className)}>
            Genius
          </h1>
        </div>

    </div>
    </>
  )
}

export default Sidebar