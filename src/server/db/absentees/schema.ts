import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import IdPrefix, { generateId } from "~/lib/ids";

export const absentee = pgTable("absentees", {
  id: varchar("id", { length: 256 })
    .primaryKey()
    .$default(() => generateId(IdPrefix.ABSENTEE)),
  className: varchar("class_name", { length: 256 }),
  name: varchar("absent", { length: 256 }),
  classStart: integer("class_start"),
  classEnd: integer("class_end"),
  ownerId: varchar("owner_id", { length: 256 }).notNull(),
});
