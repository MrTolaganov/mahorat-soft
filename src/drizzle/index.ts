import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { timestamp, uuid } from "drizzle-orm/pg-core";

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);

export const id = uuid("id").primaryKey().defaultRandom();
export const createdAt = timestamp("created_at").notNull().defaultNow();
export const updatedAt = timestamp("updated_at").notNull().defaultNow();
