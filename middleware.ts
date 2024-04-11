import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
  publicRoutes: ["/", "/login", "/sign-in"],
})

export const config = {
  matcher: ["/dashboard(.*)", "/admin(.*)"],
}
