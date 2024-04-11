import { Meteors } from "@/components/ui/metore"
import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return <div className="flex h-screen flex-col items-center justify-center overflow-hidden">

    <Meteors number={250} className="over" />

    <SignIn />
  </div>
}
