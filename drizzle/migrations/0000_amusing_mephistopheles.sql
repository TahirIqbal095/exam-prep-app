CREATE TABLE "book_chunks" (
	"id" text PRIMARY KEY NOT NULL,
	"subject_name" text,
	"book_title" text,
	"chapter" text,
	"content" text,
	"embedding" vector(1536),
	"inserted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"emailVerified" timestamp,
	"image" text,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
