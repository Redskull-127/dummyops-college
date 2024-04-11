import { sql } from "drizzle-orm"
import { pgTable, serial, text } from "drizzle-orm/pg-core"

export const projectsSchema = pgTable("projects", {
  id: serial("id").primaryKey(),
  ownerId: text("ownerId").notNull(),
  uniId: text("uniId").notNull(),
  name: text("name").notNull(),
  createdAt: text("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  status: text("status").notNull(),
  price: text("price").notNull(),
  projectImage: text("projectImage").notNull(),
  deployedAt: text("deployedAt").notNull(),
  documentation: text("documentation").notNull(),
})

export const usersSchema = pgTable("users", {
  id: serial("id").primaryKey(),
  uniId: text("uniId").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  image: text("image").notNull(),
  createdAt: text("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
})

export type Projects = typeof projectsSchema.$inferSelect
export type Users = typeof usersSchema.$inferSelect
