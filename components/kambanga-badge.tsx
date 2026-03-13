"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const KambangaBadge = () => {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <div className="text-center mt-2">
      <a
        href="https://kambanga.com"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
        aria-label="Website built by Kambanga"
      >
        <Image
          src="https://kambanga.com/logo.svg"
          alt=""
          width={40}
          height={12}
        />
      </a>
    </div>
  );
};

export default KambangaBadge;
