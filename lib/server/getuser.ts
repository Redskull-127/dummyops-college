import { UserTypes } from "@/types/user"
import { currentUser } from "@clerk/nextjs"

export default async function UserDetails() {
  const user = await currentUser()
  if (user) {
    return {
      id: user.id,
      email: user.emailAddresses[0].emailAddress,
      name: `${user.firstName} ${user.lastName}`,
      image: user.imageUrl
    } as UserTypes
  }
}
