-- DROP/ CREATE
-- SELECT/ INSERT
-- UPDATE SET WHERE
-- DELETE WHERE

DROP TABLE IF EXISTS pets; 
CREATE TABLE IF NOT EXISTS pets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL,
    age INT
);

SELECT * FROM pets;
INSERT INTO pets (name, age) VALUES
    ('Nego', 10),
    ('Merlin', 1),
    ('Dante', 2),
    ('Louro', 7);

UPDATE pets SET age = 6 WHERE id = 1;
UPDATE pets SET name = "Louro José" WHERE id = 4;

DELETE FROM pets WHERE id = 3;
DELETE FROM pets;