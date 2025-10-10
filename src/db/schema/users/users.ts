import { pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["admin", "editor", "viewer"]);
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  auth_id: text("auth_id").notNull(),
  displayName: text("display_name").notNull(),
  email: text("email").notNull(),
  group: text("group").notNull(),
  store: text("store").notNull(),
  role: roleEnum().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
