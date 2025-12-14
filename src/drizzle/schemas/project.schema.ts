import { boolean, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { usersTable } from "@/drizzle/schemas/user.schema";
import { id, createdAt, updatedAt } from "@/drizzle";

export const projectsTable = pgTable("projects", {
  id,
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  featured: boolean().notNull().default(false),
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.id, {
      onDelete: "cascade",
    }),
  createdAt,
  updatedAt,
});

export const projectRelations = relations(projectsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [projectsTable.userId],
    references: [usersTable.id],
  }),
}));

export type ProjectData = typeof projectsTable.$inferInsert;
export type Project = typeof projectsTable.$inferSelect;
