import { timestamp, pgTable, text } from "drizzle-orm/pg-core";
import { vector } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    email: text("email").unique(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: text("image"),
});

export const bookChunks = pgTable("book_chunks", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    subjectName: text("subject_name"),
    bookTitle: text("book_title"),
    chapter: text("chapter"),
    content: text("content"),
    embedding: vector("embedding", { dimensions: 1536 }),
    insertedAt: timestamp("inserted_at", { mode: "date" }).$defaultFn(
        () => new Date(),
    ),
});
