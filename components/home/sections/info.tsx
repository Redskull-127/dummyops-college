import Image from "next/image"

import { BG } from "@/lib/images"
import { buttonVariants } from "@/components/ui/button"

export function InfoSection() {
  return (
    <div className="flex h-screen w-full items-center gap-24 max-md:flex-col max-md:items-start max-md:justify-center max-md:p-2">
      <Image src={BG.LockBG} height={500} width={500} className="max-md:absolute" alt="wallet" />
      <div className="flex w-3/5 flex-col gap-5 max-md:z-50 max-md:w-full">
        <p className="w-3/4 text-5xl font-bold max-md:w-full">
          24/7 access to chatbot support for your website or application.
        </p>
        <p className="w-3/4 text-muted-foreground max-md:w-full">
          We invest more resources than any other platform in making sure great
          support from real people is a click away, whenever you need it.
        </p>
        <div
          className={buttonVariants({
            variant: "glow",
            className: "w-fit",
            size: "lg",
          })}
        >
          Get Started
        </div>
      </div>
    </div>
  )
}

