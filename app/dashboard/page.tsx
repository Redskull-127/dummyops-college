import { Projects } from "@/db/schema"

import { UserTypes } from "@/types/user"
import { CreateUser, GetUserDetails, GetUserProjects } from "@/lib/server/db-functions"
import UserDetails from "@/lib/server/getuser"
import DashboardSection from "@/components/dashboard"

export default async function Dashboard() {
  const user: UserTypes | undefined = await UserDetails()

  if (!user) {
    return null
  }

  try {
    await CreateUser({
      name: user.name,
      email: user.email,
      image: user.image,
      uniId: Math.random().toString(36).substring(7),
    })

    const LoggedInUser = await GetUserDetails(user.email)
    if (!LoggedInUser) {
      return null
    }

    const AllProjects = await GetUserProjects(LoggedInUser.uniId)

    return <DashboardSection user={{ ...LoggedInUser, id: LoggedInUser.id.toString() }} projects={AllProjects} />
  } catch (e) {
    return null
  }

}
