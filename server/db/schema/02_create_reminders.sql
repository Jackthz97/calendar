-- schema/02_create_urls.sql
DROP TABLE IF EXISTS reminders CASCADE;
-- CREATE URLS
CREATE TABLE reminders (
  id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  weekday VARCHAR(255) NOT NULL,
  date VARCHAR(255) NOT NULL,
  year VARCHAR(255) NOT NULL,
  reminderNote VARCHAR(255) NOT NULL,
  month VARCHAR(255) NOT NULL
);