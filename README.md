# extended-weekend-challenge

Table Query:
CREATE TABLE "projects"(
    "id" SERIAL PRIMARY KEY,
    "project_name" VARCHAR (50),
    "sqft" INT,
	"total_hours" INT
);

CREATE TABLE "entries"(
    "id" SERIAL PRIMARY KEY,
    "entry_name" VARCHAR (50) NOT NULL,
    "date" VARCHAR (20) NOT NULL,
	"total_hours" INT NOT NULL,
	"project_id" INT REFERENCES "projects" ON DELETE CASCADE NOT NULL
);