
DROP DATABASE IF EXISTS songs_dev;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time NUMERIC,
    is_favorite BOOLEAN

);