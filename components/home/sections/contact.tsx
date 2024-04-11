
import Image from "next/image"

import { BG } from "@/lib/images"
import { Input } from "@/components/ui/input"

export default function ContactSection() {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-5 p-24">
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <p className="mb-10 text-center text-5xl font-bold">Contact Us</p>
        <p className="text-center text-muted-foreground">
          We are here to help you with any queries you have.
          <br /> Feel free to reach out to us.
        </p>
        <Input type="email" placeholder="Type your email here!" className="z-10 w-[30%]" />
      </div>
      <Image
        src={BG.ContactBG}
        height={500}
        width={700}
        alt="bg"
        className="absolute -bottom-10 z-0 opacity-55"
      />
    </div>
  )
}
