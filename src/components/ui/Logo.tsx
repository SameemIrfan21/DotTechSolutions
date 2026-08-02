"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /** Size variant for the logo */
  size?: "sm" | "md" | "lg" | "xl";
  /** Whether to show the wordmark text alongside the icon */
  showWordmark?: boolean;
  /** Link href, defaults to "/" */
  href?: string;
  className?: string;
}

const sizeMap = {
  sm: { icon: 32, text: "text-base" },
  md: { icon: 42, text: "text-xl" },
  lg: { icon: 56, text: "text-2xl" },
  xl: { icon: 72, text: "text-3xl" },
};

/**
 * DotTech Solutions Logo Component
 * Renders the brand logo image with optional wordmark.
 * The logo features a T+D lettermark with blue-to-purple gradient.
 */
export default function Logo({
  size = "md",
  showWordmark = true,
  href = "/",
  className = "",
}: LogoProps) {
  const { icon, text } = sizeMap[size];

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 group select-none ${className}`}
      aria-label="DotTech Solutions - Home"
    >
      {/* Logo Image */}
      <div
        className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: icon, height: icon }}
      >
        <Image
          src="/images/logo.svg"
          alt="DotTech Solutions Logo"
          width={icon}
          height={icon}
          className="object-contain drop-shadow-[0_0_12px_rgba(26,86,219,0.4)]"
          priority
        />
      </div>

      {/* Wordmark */}
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold tracking-tight ${text}`}>
            <span className="text-slate-900">Dot</span>
            <span className="text-blue-600">Tech</span>
          </span>
          <span className="text-[0.6rem] tracking-[0.18em] text-slate-600 uppercase font-medium mt-0.5">
            Solutions
          </span>
        </div>
      )}
    </Link>
  );
}
