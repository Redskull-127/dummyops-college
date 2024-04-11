"use server"

import { AddUserProject } from "@/lib/server/db-functions"
import { revalidatePath } from "next/cache"

export default async function AddProject(formData: FormData) {
  return await AddUserProject({
    deployedAt: "Gemini AI",
    name: formData.get("project-name-input") as string,
    ownerId: formData.get("project-uniId-input") as string,
    price: "Free",
    documentation: formData.get("project-file-input") as string,
    projectImage: "/vercel.svg",
    status: "Live",
    uniId: Math.random().toString(36).substring(2, 12)
  }).then(() => {
    revalidatePath("/dashboard")
  })
}
