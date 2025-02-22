import { sql } from "drizzle-orm";
import {
  boolean,
  date,
  decimal,
  integer,
  pgTable,
  varchar,
} from "drizzle-orm/pg-core";
import IdPrefix, { generateId } from "~/lib/ids";

export const absentee = pgTable("absentee", {
  id: varchar("id", { length: 256 })
    .primaryKey()
    .$default(() => generateId(IdPrefix.ABSENTEE)),
  className: varchar("class_name", { length: 256 }),
  name: varchar("absent", { length: 256 }),
  classStart: integer("class-start"),
  classEnd: integer("class-start"),
  ownerId: varchar("owner_id", { length: 256 }).notNull(),
});
