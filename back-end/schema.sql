CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name VARLANT(255) NOT NULL,
    artist VARLANT(255) NOT NULL,
    album VARLANT(255),
    time VARLANT(10),
    is_favorite BOOLeAN

);