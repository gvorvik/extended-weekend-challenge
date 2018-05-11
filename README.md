# extended-weekend-challenge

Table Query:
CREATE TABLE "projects"(
    "id" SERIAL PRIMARY KEY,
    "project_name" VARCHAR (50),
    "sqft" INT,
	"total_hours" DECIMAL(6,2) NOT NULL
);

CREATE TABLE "entries"(
    "id" SERIAL PRIMARY KEY,
    "entry_name" VARCHAR (50) NOT NULL,
    "date" VARCHAR (20) NOT NULL,
	"total_hours" DECIMAL(4,2) NOT NULL,
	"project_id" INT REFERENCES "projects" ON DELETE CASCADE NOT NULL
);

The query to add up hours per project:

SELECT "projects"."id", SUM("entries"."total_hours") FROM "projects"
JOIN "entries" ON "projects"."id"="entries"."project_id"
GROUP BY "projects"."id";