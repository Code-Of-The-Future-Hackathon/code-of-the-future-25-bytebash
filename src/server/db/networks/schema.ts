import { sql } from "drizzle-orm";
import {
  boolean,
  decimal,
  integer,
  pgTable,
  varchar,
} from "drizzle-orm/pg-core";
import IdPrefix, { generateId } from "~/lib/ids";

export const networks = pgTable("networks", {
  id: varchar("id", { length: 256 })
    .primaryKey()
    .$default(() => generateId(IdPrefix.NETWORK)),
  name: varchar("name", { length: 256 }),
  traffic: decimal("traffic", { precision: 10, scale: 2 })
    .notNull()
    .default("0"),
  type: varchar("type", { length: 256 }),
  status: boolean("status").notNull().default(false),
  ispName: varchar("isp_name", { length: 256 }),
  ispOrganization: varchar("isp_organization", { length: 256 }),
  txRetry: decimal("tx_retry", { precision: 10, scale: 2 }),
  wanUptime: decimal("wan_uptime", { precision: 10, scale: 2 }),
  apiKey: varchar("api_key", { length: 256 }).notNull().default("pk_1235678"),
  ownerId: varchar("owner_id", { length: 256 }).notNull(),
  createdAt: integer("created_at")
    .default(sql`(EXTRACT (EPOCH FROM NOW()))`)
    .notNull(),
  updatedAt: integer("updated_at").$onUpdate(
    () => sql`(EXTRACT (EPOCH FROM NOW()))`,
  ),
});
