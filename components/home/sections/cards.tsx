import Image from "next/image"

import { ICONS } from "@/lib/images"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"

const CardDetails = [
  {
    title: "Accessible",
    description: "Easily accessible to everyone, everywhere and every time!",
    icon: ICONS.Trade,
  },
  {
    title: "Safety",
    description: "Safety is our top priority. We ensure a safe and secure environment for all users",
    icon: ICONS.Wallet,
  },
  {
    title: "Minimal",
    description: "We believe in minimalism. Our platform is simple and easy to use",
    icon: ICONS.Money,
  }
]

type CardType = typeof CardDetails

export default function CardSection() {
  return (
    <div className="flex h-72 w-full items-center justify-center gap-5 px-32 py-10 max-md:h-fit max-md:flex-col max-md:gap-2 max-md:p-0">
      {CardDetails.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  )
}

function Card(item: CardType[0]) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <CardItem
          translateZ="50"
          className="mb-5 flex w-full items-center justify-center text-xl font-bold text-neutral-600 dark:text-white"
        >
          <Image src={item.icon} height={64} width={64} alt="trade" />
        </CardItem>

        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {item.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          {item.description}
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
