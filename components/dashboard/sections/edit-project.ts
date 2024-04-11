"use server"
import { db } from "@/db"
import { projectsSchema } from "@/db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"


export default async function EditProject(formData: FormData) {
  try{
    await db.update(projectsSchema).set({
      name: formData.get("project-name-input") as string,
      documentation: formData.get("project-file-input") as string,
    }).where(eq(projectsSchema.uniId, formData.get("project-uniId-input") as string))
  } catch (e) {
    console.log(e)
  } finally {
    revalidatePath("#")
  }
}
