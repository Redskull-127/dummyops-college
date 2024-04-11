"use server"

import { db } from "@/db"
import { Projects, projectsSchema, Users, usersSchema } from "@/db/schema"
import { eq } from "drizzle-orm"

export type AddUserTypes = Omit<Users, "id" | "createdAt">
export async function CreateUser(userData: AddUserTypes) {
  try {
    const AllUsers = await db.select().from(usersSchema).execute()
    if (AllUsers.some((user) => user.email === userData.email)) {
      return
    } else {
      const user = await db.insert(usersSchema).values(userData).execute()
      return user
    }
  } catch (e) {
    console.log(e)
  }
}

export type AddProjectTypes = Omit<Projects, "id" | "createdAt">
export async function AddUserProject(projectData: AddProjectTypes) {
  try {
    const project = await db
      .insert(projectsSchema)
      .values(projectData)
      .execute()
    return project
  } catch (e) {
    console.log(e)
  }
}

export async function GetUserProjects(uniId: string) {
  try {
    const projects = await db
      .select()
      .from(projectsSchema)
      .where(eq(projectsSchema.ownerId, uniId))
      .execute()
    return projects
  } catch (e) {
    console.log(e)
  }
}

export async function GetUserDetails(email: string) {
  try {
    const user = await db
      .select()
      .from(usersSchema)
      .where(eq(usersSchema.email, email))
      .execute()
    return user[0]
  } catch (e) {
    console.log(e)
  }
}

export async function GetProjectDetails(uniId: string) {
  try {
    const project = await db
      .select()
      .from(projectsSchema)
      .where(eq(projectsSchema.uniId, uniId))
      .execute()
    console.log(project[0])
    return project[0]
  } catch (e) {
    console.log(e)
  }
}

export async function DeleteProject(uniId: string) {
  try {
    await db
      .delete(projectsSchema)
      .where(eq(projectsSchema.uniId, uniId))
      .execute()
  } catch (e) {
    console.log(e)
  }
}
