import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import {
  CardSection,
  ContactSection,
  GlobeDemo,
  InfoSection,
} from "@/components/home"
import { SiteHeader } from "@/components/site-header"

const words = [
  {
    text: "Create",
  },
  {
    text: "Chatbot's",
  },
  {
    text: "with",
  },
  {
    text: "ease!",
  },
]

export default function IndexPage() {
  return (
    <section>
      <SiteHeader />
      <div className="bg-cover flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-hero-pattern bg-full bg-top bg-no-repeat">
        <div className="flex h-screen flex-col items-center justify-center gap-7">
          <h1 className="text-center text-6xl font-bold">
            <TypewriterEffectSmooth words={words} />
          </h1>
          <p className="text-center text-muted-foreground">
            Use DummyOPS to create chatbot for your website or application.
            <br /> It&apos;s easy to use and free to get started.
          </p>
          <Link
            href={"/"}
            className={buttonVariants({
              variant: "glow",
            })}
          >
            <p className="text-md px-2">Get Started</p>
          </Link>
        </div>
        <CardSection />
        <InfoSection />
        <GlobeDemo />
        <ContactSection />
      </div>
    </section>
  )
}
