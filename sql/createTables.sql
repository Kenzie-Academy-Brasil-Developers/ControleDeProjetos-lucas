CREATE TYPE "OS" AS ENUM ('Windows', 'Linux', 'MacOS');

CREATE TABLE IF NOT EXISTS "developers"(
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(50) NOT NULL ,
"email" VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS "developerInfos"(
"id" SERIAL PRIMARY KEY,
"developerSince" TIMESTAMP DEFAULT NOW() NOT NULL,
"preferredOS" "OS" NOT NULL,
"developerId" INTEGER UNIQUE,
FOREIGN KEY("developerId")
	REFERENCES "developers" ("id")
		ON DELETE CASCADE
) ;


CREATE TABLE IF NOT EXISTS "projects"(
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(50) NOT NULL,
"description" VARCHAR(50),
"repository" VARCHAR(120) NOT NULL ,
"startDate" TIMESTAMP DEFAULT NOW() NOT NULL,
"endDate" Date,
"developerId" INTEGER ,
FOREIGN KEY("developerId")
	REFERENCES "developers" ("id")
		ON DELETE SET NULL
) ;
