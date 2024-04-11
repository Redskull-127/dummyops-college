import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="absolute top-0 z-40 w-full">
      <div className="flex h-16 w-full items-center justify-between px-12">
        <h1 className="font-bold">Dummy OPS</h1>
        <MainNav items={siteConfig.mainNav} />
        <div className="flex gap-5">
          <Link href={"/dashboard"} className={buttonVariants({
            variant: "glow",
            size: "default",
          })}>
            Sign Up
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
